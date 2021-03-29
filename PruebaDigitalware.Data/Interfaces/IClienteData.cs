using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDigitalware.Data.Interfaces
{
    public interface IClienteData
    {
        Task<Cliente> Post(Cliente v);
        Task<Cliente> Update(Cliente v);
        Task<Cliente> Delete(Cliente v);
        Task<Cliente[]> Get();
        Task<Cliente> GetById(long id);
       


    }
}
