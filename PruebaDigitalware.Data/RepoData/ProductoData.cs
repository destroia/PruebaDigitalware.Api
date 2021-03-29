using Microsoft.EntityFrameworkCore;
using PruebaDigitalware.Data.Interfaces;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.RepoData
{
    public class ProductoData : IProductoData
    {
        readonly digitalwareDBContext DB;
        public ProductoData(digitalwareDBContext db)
        {
            DB = db;
        }

        public async Task<bool> Delete(Producto v)
        {
            try
            {
                DB.Productos.Remove(v);
                await DB.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<Producto[]> Get()
        {
            return await DB.Productos.ToArrayAsync();
        }

        public async Task<Producto> GetById(Guid id)
        {
            return await DB.Productos.FindAsync(id);
        }

        public async Task<Producto> Post(Producto v)
        {
            try
            {
                v.Id = Guid.NewGuid();
                await DB.Productos.AddAsync(v);
                await DB.SaveChangesAsync();

                return v;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<Producto> Update(Producto v)
        {
            try
            {
                DB.Productos.Update(v);
                await DB.SaveChangesAsync();
                return v;
            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
