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
    public class ProductosController : ControllerBase
    {
        readonly IProductoData Repo;
        public ProductosController(IProductoData repo)
        {
            Repo = repo;
        }
        // GET: api/<ProductosController>
        [HttpGet]
        public async Task<IEnumerable<Producto>> Get()
        {
            return await Repo.Get();
        }

        // GET api/<ProductosController>/5
        [HttpGet("{id}")]
        public async Task<Producto> GetById(Guid id)
        {
            return await Repo.GetById(id);
        }

        // POST api/<ProductosController>
        [HttpPost]
        public async Task<Producto> Post(Producto  value)
        {
            return await Repo.Post(value);
        }

        [HttpPost]
        public async Task<bool> Delete(Producto value)
        {
            return await Repo.Delete(value);
        }

        // Post api/<ProductosController>/5
        [HttpPost]
        public async Task<Producto> Update(Producto value)
        {
            return await Repo.Update(value);
        }
    }
}
