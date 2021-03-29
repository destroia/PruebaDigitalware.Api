using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.Interfaces
{
    public interface IFacturaData
    {
        Task<Factura> Post(Factura v);
        Task<Factura> Update(Factura v);
        Task<Factura> Delete(Factura v);
        Task<IEnumerable<Factura>> Get();
        Task<Factura> GetById(Guid id);
    }
}
