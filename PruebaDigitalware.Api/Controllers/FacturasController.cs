using Microsoft.AspNetCore.Mvc;
using PruebaDigitalware.Data.Interfaces;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PruebaDigitalware.Api.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class FacturasController : ControllerBase
    {
        readonly IFacturaData Repo;
        public FacturasController(IFacturaData repo)
        {
            Repo = repo;
        }
        // GET: api/<FacturasController>
        [HttpGet]
        public async Task<IEnumerable<Factura>> Get()
        {
            return await Repo.Get();
        }

        // GET api/<FacturasController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FacturasController>
        [HttpPost]
        public async Task<Factura> Post(Factura factura)
        {
            return await Repo.Post(factura);
        }

        // PUT api/<FacturasController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FacturasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
