using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaDigitalware.Models
{
    public class FacturaProducto
    {
        public Guid Id { get; set; }
        public Guid FacturaId { get; set; }
        public Guid ProductoId { get; set; }
        public string Nombre { get; set; }
        public int Cantidad { get; set; }
    }
}
