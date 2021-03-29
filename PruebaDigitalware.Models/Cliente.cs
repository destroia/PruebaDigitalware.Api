using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PruebaDigitalware.Models
{
    public class Cliente
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public byte Edad { get; set; }
        //[ForeignKey("ClienteId")]
        //public ICollection<Factura> Facturas { get; set; }
    }
}
