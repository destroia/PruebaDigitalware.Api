using Microsoft.EntityFrameworkCore;
using PruebaDigitalware.Data.Interfaces;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.RepoData
{
    public class FacturaData : IFacturaData
    {
        readonly digitalwareDBContext DB;
        public FacturaData(digitalwareDBContext db)
        {
            DB = db;
        }
        public Task<Factura> Delete(Factura v)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Factura>> Get()
        {
            var f = await DB.Facturas.ToListAsync();
            var FacturasConsulta =  f.Join(DB.Clientes, F => F.ClienteId, C => C.Id, (F, C) => new { F, C })
                .GroupJoin(DB.FacturaProductos, C => C.F.Id, FP => FP.FacturaId, (C, FP) => new { C, FP });

            foreach (var item in f )
            {
              
               
                item.Cliente = FacturasConsulta.Where(x => x.C.C.Id == item.ClienteId).Select(x => x.C.C).FirstOrDefault();
                item.FacturaProductos = FacturasConsulta.Select(x => x.FP).Where(x => x.Any(c => c.FacturaId == item.Id)).FirstOrDefault().ToList();
            }
            return f;
        }

        public Task<Factura> GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<Factura> Post(Factura v)
        {
            try
            {
                v.Id = Guid.NewGuid();
                v.Fecha = DateTime.Now;
                foreach (var item in v.FacturaProductos)
                {
                    item.Id = Guid.NewGuid();
                    item.FacturaId = v.Id;

                }
                await DB.Clientes.AddAsync(v.Cliente);
                await DB.Facturas.AddAsync(v);
                
                await DB.FacturaProductos.AddRangeAsync(v.FacturaProductos);

                await DB.SaveChangesAsync();
                return v;
            }
            catch (Exception e)
            {
                return null;
            }
           
        }

        public Task<Factura> Update(Factura v)
        {
            throw new NotImplementedException();
        }
    }
}
