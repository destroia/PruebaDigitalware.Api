using Microsoft.EntityFrameworkCore.Migrations;

namespace PruebaDigitalware.Data.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacturaProductos_Facturas_ProductoId",
                table: "FacturaProductos");

            migrationBuilder.DropIndex(
                name: "IX_FacturaProductos_ProductoId",
                table: "FacturaProductos");

            migrationBuilder.AddForeignKey(
                name: "FK_FacturaProductos_Facturas_FacturaId",
                table: "FacturaProductos",
                column: "FacturaId",
                principalTable: "Facturas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacturaProductos_Facturas_FacturaId",
                table: "FacturaProductos");

            migrationBuilder.CreateIndex(
                name: "IX_FacturaProductos_ProductoId",
                table: "FacturaProductos",
                column: "ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_FacturaProductos_Facturas_ProductoId",
                table: "FacturaProductos",
                column: "ProductoId",
                principalTable: "Facturas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
