using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Test5.Models;

namespace Test5.Filter
{
    public class Authorisation : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //User us = filterContext.HttpContext.Session["User"];

            User US = (User)filterContext.HttpContext.Session["User"];

            if (US == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                    new RouteValueDictionary { { "Controller", "Home"},
                        {"action", "Index" }}
                    );
            }

            base.OnActionExecuting(filterContext);

        }


    }
}