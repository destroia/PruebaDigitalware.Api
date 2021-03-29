using PruebaDigitalware.Data.Interfaces;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.RepoData
{
    public class FacturaProductoData : IFacturaProductoData
    {
        public Task<FacturaProducto> Delete(FacturaProducto v)
        {
            throw new NotImplementedException();
        }

        public Task<FacturaProducto[]> Get()
        {
            throw new NotImplementedException();
        }

        public Task<FacturaProducto> GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<FacturaProducto> Post(FacturaProducto v)
        {
            throw new NotImplementedException();
        }

        public Task<FacturaProducto> Update(FacturaProducto v)
        {
            throw new NotImplementedException();
        }
    }
}
