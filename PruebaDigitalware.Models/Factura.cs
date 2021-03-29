using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PruebaDigitalware.Models
{
    public class Factura
    {
        public Guid Id { get; set; }
        public string ClienteId { get; set; }
        public long Total { get; set; }
        public DateTime Fecha { get; set; }

        [ForeignKey("FacturaId")]
        public List<FacturaProducto> FacturaProductos { get; set; }
        [NotMapped]
        public Cliente Cliente { get; set; }
    }
}
