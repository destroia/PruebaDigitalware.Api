using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.Interfaces
{
    public interface IFacturaProductoData
    {
        Task<FacturaProducto> Post(FacturaProducto v);
        Task<FacturaProducto> Update(FacturaProducto v);
        Task<FacturaProducto> Delete(FacturaProducto v);
        Task<FacturaProducto[]> Get();
        Task<FacturaProducto> GetById(Guid id);
    }
}
