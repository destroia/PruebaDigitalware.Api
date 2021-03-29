using PruebaDigitalware.Data.Interfaces;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.RepoData
{
    public class ClienteData : IClienteData
    {
        public Task<Cliente> Delete(Cliente v)
        {
            throw new NotImplementedException();
        }

        public Task<Cliente[]> Get()
        {
            throw new NotImplementedException();
        }

        public Task<Cliente> GetById(long id)
        {
            throw new NotImplementedException();
        }

        public Task<Cliente> Post(Cliente v)
        {
            throw new NotImplementedException();
        }

        public Task<Cliente> Update(Cliente v)
        {
            throw new NotImplementedException();
        }
    }
}
