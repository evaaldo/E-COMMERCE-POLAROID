using API_ECOMMERCE_LOVE_PHOTOS.Models;

namespace API_ECOMMERCE_LOVE_PHOTOS.Repository.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> Get();
        Product GetById(int id);
        void Create(Product product);
        Product Update(int id, Product product);
        void Delete(int id);
    }
}
