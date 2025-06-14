using API_ECOMMERCE_LOVE_PHOTOS.Repository;
using API_ECOMMERCE_LOVE_PHOTOS.Repository.Interfaces;
using Microsoft.Data.SqlClient;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IDbConnection>(connection => new SqlConnection(builder.Configuration.GetConnectionString("DBCONNECTION")));

builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
