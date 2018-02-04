using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Test5.Models;
using Test5.Filter;

namespace Test5.Controllers
{
    public class HomeController : Controller
    {

        DataClasses1DataContext db = new DataClasses1DataContext();
        
        // mtavari ===============================================================================
        public ActionResult Index()
        {
            Session.Clear();
            return View();
        }

        [Authorisation]
        public ActionResult Main()
        {

            User A = (User)Session["User"];
            int ID = A.Id;
            
            return View(db.list4(A.Id).ToList());
        }

        [HttpPost]
        [Authorisation]
        public ActionResult Main(string SawT, string SabT)
        {

            User A = (User)Session["User"];
            int ID = A.Id;


            //ViewBag.SawN = db.

            return View(db.list4(A.Id).ToList());
        }



        //[HttpPost]
        //public JsonResult Main(string angarishi, string dasaxeleba, string gadaf, string findeb, string finkred, string finval, string tipi)
        //{
        //    User A = (User)Session["User"];

        //    db._SawyisiNaStis.InsertOnSubmit(new _SawyisiNaSti()
        //    {
        //        AngNom = angarishi,
        //        AngDas = dasaxeleba,
        //        AngTip = tipi,
        //        Gadaf = Convert.ToBoolean(gadaf),
        //        Valuta = finval,
        //        Debeti = Convert.ToInt32(findeb),
        //        Krediti = Convert.ToInt32(finkred),
        //        Done = 0,
        //        PID = 0,
        //        SasNaStDate = DateTime.Now,
        //        Company = A.Company,
        //        User = A.Id
        //    });
        //    db.SubmitChanges();

        //    return Json("a", JsonRequestBehavior.AllowGet);
        //}



        //[HttpPost]
        //public JsonResult AddChild(string angarishi, string dasaxeleba, string gadaf, string findeb, string finkred, string finval, string tipi, string Pid, string Done)
        //{
        //    User A = (User)Session["User"];

        //    _SawyisiNaSti MS = db._SawyisiNaStis.Where(x => x.id == Convert.ToInt32(Pid)).FirstOrDefault();

        //    if(MS.Debeti > 0 || MS.Krediti > 0)
        //    {
        //        return Json("metia", JsonRequestBehavior.AllowGet);
        //    }
        //    else { 

        //    db._SawyisiNaStis.InsertOnSubmit(new _SawyisiNaSti()
        //    {
        //        AngNom = angarishi,
        //        AngDas = dasaxeleba,
        //        AngTip = tipi,
        //        Gadaf = Convert.ToBoolean(gadaf),
        //        Valuta = finval,
        //        Debeti = Convert.ToInt32(findeb),
        //        Krediti = Convert.ToInt32(finkred),
        //        Done = Convert.ToInt32(Done) + 1,
        //        PID = Convert.ToInt32(Pid),
        //        SasNaStDate = DateTime.Now,
        //        Company = A.Company,
        //        User = A.Id
        //    });
        //    db.SubmitChanges();
        //    return Json("ok", JsonRequestBehavior.AllowGet);

        //    }
        //}


        //[Authorisation]
        //[HttpPost]
        //public JsonResult Del(string Id)
        //{
        //    _SawyisiNaSti SHV = db._SawyisiNaStis.Where(x => x.id == Convert.ToInt32(Id)).FirstOrDefault();

        //    _SawyisiNaSti MS = db._SawyisiNaStis.Where(x => x.PID == SHV.id).FirstOrDefault();

        //    if (MS == null)
        //    {
        //        db._SawyisiNaStis.DeleteOnSubmit(SHV);
        //        db.SubmitChanges();
        //        return Json("ok", JsonRequestBehavior.AllowGet);
        //    }
        //    else
        //    {
        //        return Json("HASC", JsonRequestBehavior.AllowGet);
        //    }

        //}


        //[Authorisation]
        //[HttpPost]
        //public JsonResult Red(string Rangarishi, string Rdasaxeleba, string Rgadaf, string Rfindeb, string Rfinkred, string Rfinval, string Rtipi, string Rid, string RDone)
        //{
        //    _SawyisiNaSti R = db._SawyisiNaStis.Where(x => x.id == Convert.ToInt32(Rid)).FirstOrDefault();
        //    User A = (User)Session["User"];


        //    if (R == null)
        //    {
        //        return Json("error", JsonRequestBehavior.AllowGet);
        //    }
        //    else
        //    {
        //        R.AngNom = Rangarishi;
        //        R.AngTip = Rtipi;
        //        R.AngDas = Rdasaxeleba;
        //        R.Gadaf = Convert.ToBoolean(Rgadaf);
        //        R.Debeti = Convert.ToInt32(Rfindeb);
        //        R.Krediti = Convert.ToInt32(Rfinkred);
        //        R.Valuta = Rfinval;
        //        R.SasNaStDate = DateTime.Now;
        //        R.User = A.Id;

        //        db.SubmitChanges();
        //        return Json("ok", JsonRequestBehavior.AllowGet);
        //    }

        //}


            //angarishta gegma


        [Authorisation]
        public ActionResult AngGeg()
        {

            User A = (User)Session["User"];
            int Com = A.Company;
            
            
            return View(db.Ang(Com).ToList());
        }
        

        ///bugaltruli gatareba===================================================================

        [Authorisation]
        public ActionResult BugGat()
        {

            User A = (User)Session["User"];
            int Com = A.Company;
            //var B = db._BugaltruliGatarebas.Where(x => x.Company == Com).ToList();
            //var date = from AngGeg in db.AngGegs select AngGeg;
            //ViewBag.Ang = date.ToList();


            ViewBag.ANG = db.Ang(Com).ToList();
            return View(db._BugGat(A.Company).ToList());
        }

        //damateba
        [Authorisation]
        [HttpPost]
        public JsonResult BugGat(string BugDokNom, string BugGatDate, string Proeqti, string Memoriali, string saxeoba,
            string Safudzveli, string AnalizuriCheck, string DadastCheck, string GadadebuliCheck,
            int DebAngId, int KerdAngId, string Analizuri)
        {

            User Us = (User)Session["User"];
            int Com = Us.Company;
            AngGeg deb = db.AngGegs.Where(x => x.ID == DebAngId).FirstOrDefault();

            AngGeg kred = db.AngGegs.Where(x => x.ID == KerdAngId).FirstOrDefault();

            db._BugaltruliGatarebas.InsertOnSubmit(new _BugaltruliGatareba()
            {
                Dadasturebuli = Convert.ToBoolean(DadastCheck),
                Gadadebuli = Convert.ToBoolean(GadadebuliCheck),
                DokTipi = 1,
                DokNom = 1,
                Tarigi = Convert.ToDateTime(BugGatDate),
                DebAng = deb.ID,
                KredAng = kred.ID,
                Tanxa = Convert.ToInt32(saxeoba),
                Kursi = 1.0,
                Memoriali = Convert.ToInt32(Memoriali),
                Safudzveli = Safudzveli,
                AnalizuriVeli = Analizuri,
                ShesrulebisTarigi = DateTime.Now,
                company = Us.Company,
                Shemsrulebeli = Us.Id
            });

            db.SubmitChanges();

            return Json("ok", JsonRequestBehavior.AllowGet);
        }



        [Authorisation]
        public JsonResult BugGatDel(int id)
        {
            User A = (User)Session["User"];
            int Com = A.Company;
            var B = db._BugaltruliGatarebas.Where(x => x.company == Com).ToList();
            _BugaltruliGatareba OB = db._BugaltruliGatarebas.Where(x => x.Id == id).FirstOrDefault();


            db._BugaltruliGatarebas.DeleteOnSubmit(OB);
            db.SubmitChanges();
            return Json("ok", JsonRequestBehavior.AllowGet);
        }


        [Authorisation]
        public ActionResult Barati()
        {
            User A = (User)Session["User"];
            int Com = A.Company;
            var B = db._BugaltruliGatarebas.Where(x => x.company == Com).ToList();
            //List<_BugaltruliGatareba> Bug = new List<_BugaltruliGatareba>();
            //Bug.Add();


            return View();
        }


        [Authorisation]
        public ActionResult Nashti()
        {
            DateTime Sawyisi = Convert.ToDateTime("2017-01-01");
            DateTime Saboloo = Convert.ToDateTime("2017-05-06");
            User A = (User)Session["User"];
            int Com = A.Company;
            List<_BugaltruliGatareba> B = db._BugaltruliGatarebas.Where(x => x.company == Com).ToList();
            
            int tanxa = 0;
            foreach(var i in B){
                tanxa = tanxa + Convert.ToInt32(i.Tanxa);
            }
            
            List<_SawyisiNaSti> S = db._SawyisiNaStis.Where(x => x.Company == Com).ToList();

            int tanxa2 = 0;
            foreach(var j in S)
            {
                if (Convert.ToDateTime(j.SasNaStDate) > Sawyisi && Convert.ToDateTime(j.SasNaStDate) < Saboloo)
                    tanxa2 = tanxa2 + (Convert.ToInt32(j.Debeti) - Convert.ToInt32(j.Krediti));
                else continue;
            }



            

            ViewBag.Tanxa = tanxa + tanxa2;
            //List<_BugaltruliGatareba> Bug = new List<_BugaltruliGatareba>();
            //Bug.Add();


            return View();
        }

    }
}