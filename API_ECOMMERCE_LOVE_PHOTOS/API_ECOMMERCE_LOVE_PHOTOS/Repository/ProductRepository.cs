using API_ECOMMERCE_LOVE_PHOTOS.Models;
using API_ECOMMERCE_LOVE_PHOTOS.Repository.Interfaces;
using Dapper;
using System.Buffers.Text;
using System.Data;

namespace API_ECOMMERCE_LOVE_PHOTOS.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly IDbConnection _connection;

        public ProductRepository(IDbConnection connection)
        {
            _connection = connection;
        }

        public IEnumerable<Product> Get()
        {
            var sql = "SELECT * FROM PRODUCT";
            var products = _connection.Query<Product>(sql);
            return products;
        }

        public Product GetById(int id)
        {
            var sql = "SELECT * FROM PRODUCT WHERE ID = @Id";
            var product = _connection.QueryFirstOrDefault<Product>(sql, new { @Id = id });
            return product;
        }

        public void Create(Product product)
        {
            var sql = "INSERT INTO PRODUCT (Name, Description, Price, Base64) VALUES (@Name, @Description, @Price, @Base64)";
            _connection.Execute(sql, new
            {
                @Name = product.Name,
                @Description = product.Description,
                @Price = product.Price,
                @Base64 = product.Base64
            });
        }

        public Product Update(int id, Product product)
        {
            var sql = "UPDATE PRODUCT SET Name = @Name, Description = @Description, Price = @Price, Base64 = @Base64 WHERE Id = @Id";
            _connection.Execute(sql, new
            {
                @Id = id,
                @Name = product.Name,
                @Description = product.Description,
                @Price = product.Price,
                @Base64 = product.Base64
            });
            return GetById(id);
        }

        public void Delete(int id)
        {
            var sql = "DELETE FROM PRODUCT WHERE Id = @Id";
            _connection.Execute(sql, new { @Id = id });
        }
    }
}
