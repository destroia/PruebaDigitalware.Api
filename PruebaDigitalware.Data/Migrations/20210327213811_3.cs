using Microsoft.EntityFrameworkCore.Migrations;

namespace PruebaDigitalware.Data.Migrations
{
    public partial class _3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacturaProductos_Productos_FacturaId",
                table: "FacturaProductos");

            migrationBuilder.CreateIndex(
                name: "IX_FacturaProductos_ProductoId",
                table: "FacturaProductos",
                column: "ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_FacturaProductos_Productos_ProductoId",
                table: "FacturaProductos",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacturaProductos_Productos_ProductoId",
                table: "FacturaProductos");

            migrationBuilder.DropIndex(
                name: "IX_FacturaProductos_ProductoId",
                table: "FacturaProductos");

            migrationBuilder.AddForeignKey(
                name: "FK_FacturaProductos_Productos_FacturaId",
                table: "FacturaProductos",
                column: "FacturaId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
