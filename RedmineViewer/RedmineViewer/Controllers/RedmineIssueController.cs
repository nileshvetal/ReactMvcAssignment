using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace RedmineViewer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RedmineViewerController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<RedmineIssue> Get()
        {
            var issues = new List<RedmineIssue>()
            {
                new RedmineIssue(){ Id = 1, Project="Ezmedifomrs", Tracker="Nilesh", Status="new", Subject="on Leave" },
                new RedmineIssue(){ Id = 2, Project="Rebehat", Tracker="Nilesh Vetal", Status="Completed", Subject="on Leave xyz" }

            };

            return issues.ToArray();
        }
    }
}