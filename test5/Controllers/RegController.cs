using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Test5.Models;

namespace Test5.Controllers
{
    public class RegController : Controller
    {
        // GET: Reg

        DataClasses1DataContext db = new DataClasses1DataContext();

        public ActionResult Reg()
        {
            return View();
        }



        [HttpPost]
        public ActionResult Reg(string Mail, string comp, string pwd)
        {

            db.Companies.InsertOnSubmit(new Company()
            {
                Company1 = comp,
                UserC = 1
            });
            db.SubmitChanges();
            
            
            Company C = db.Companies.Where(x => x.Company1 == comp).FirstOrDefault();

            db.Users.InsertOnSubmit(new Models.User()
            {
                Mail = Mail,
                Company = C.Id,
                Tarigi = DateTime.Now,
                Dashveba = 1,
                Pass = MD5Hash(pwd)

            });
            db.SubmitChanges();
            
            return RedirectToAction("Index", "Home");
        }

        public static string MD5Hash(string input)
        {
            byte[] data = System.Security.Cryptography.MD5.Create().ComputeHash(System.Text.Encoding.UTF8.GetBytes(input));
            string md5 = "";
            for (int i = 0; i < data.Length; i++)
            {
                md5 += data[i].ToString("x2");
            }

            return md5;

        }



        [HttpPost]
        public ActionResult Login(string email1, string corp1, string pwd2)
        {
            
            //Mail ml = db.Mails.Where(x => x.Mail1 == email1).FirstOrDefault();
            Company com = db.Companies.Where(x => x.Company1 == corp1).FirstOrDefault();

            User U = db.Users.Where(x => x.Mail == email1 && x.Pass == MD5Hash(pwd2) && x.Company == com.Id).FirstOrDefault();

            if (U == null)
            {
                Session["error"] = "ასეთი მომხმარებელი არ არსებობს!!!";
                return RedirectToAction("Reg", "Reg");
            }
            else
            {
                Session["User"] = U;

                return RedirectToAction("Main", "Home");
            }
        }



    }
}