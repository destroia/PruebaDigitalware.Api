using Microsoft.EntityFrameworkCore;
using PruebaDigitalware.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaDigitalware.Data
{
    public class digitalwareDBContext : DbContext
    {
       public digitalwareDBContext(DbContextOptions<digitalwareDBContext> options) : base(options)
       {

       }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
            "Data Source=.;Initial Catalog=DB_Digitalware;Integrated Security=true"

             );
            base.OnConfiguring(optionsBuilder);
            //Primer Migracion   Add-Migration InitialCreate
            //Despues de la primera migracion se utiliza  Update-Database


        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Factura> Facturas { get; set; }
        public DbSet<FacturaProducto> FacturaProductos { get; set; }

    }
}
