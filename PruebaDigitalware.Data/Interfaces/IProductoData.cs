using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.Interfaces
{
    public interface IProductoData
    {
        Task<Producto> Post(Producto v);
        
        Task<Producto> Update(Producto v);
        Task<bool> Delete(Producto v);
        Task<Producto[]> Get();
        Task<Producto> GetById(Guid id);
    }
}
