using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NotifyMe_WebAPI.Models;
using System.Web.Http;
using System.Net.Http;
using Newtonsoft.Json;

namespace NotifyMe_WebAPI.Models
{
    public class UserController : ApiController
    {
        private ScribbleItEntities ctx = new ScribbleItEntities();
        

        //Select * from UserInfo
         [HttpGet]
        public IEnumerable<UserInfo> GetAllUsers()
        {
            List<UserInfo> users = ctx.UserInfoes.ToList();
            return users;
        }

        //Select by Id 
        [HttpGet]
        public IHttpActionResult GetUserById(int id)
        {
            List<UserInfo> users = ctx.UserInfoes.ToList();

            var user = users.FirstOrDefault(i => (i.UserID == id));
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        //Save the user info to the DB
        [HttpPost]
        public IHttpActionResult Post([FromBody] UserInfo userInfo)
        {
            ctx.UserInfoes.Add(userInfo);
            ctx.SaveChanges();
            return Ok(userInfo);
        }
    

        
    }
}