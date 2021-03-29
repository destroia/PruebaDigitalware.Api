using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PruebaDigitalware.Models
{
    public class Producto
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public decimal Costo { get; set; }
        public decimal Valor { get; set; }
        public int  Cantidad { get; set; }
        [ForeignKey("ProductoId")]
        public ICollection<FacturaProducto> FacturaProductos { get; set; }
    }
}
