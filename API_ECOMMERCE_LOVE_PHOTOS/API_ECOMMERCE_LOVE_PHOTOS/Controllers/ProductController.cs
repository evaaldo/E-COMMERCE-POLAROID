using API_ECOMMERCE_LOVE_PHOTOS.Models;
using API_ECOMMERCE_LOVE_PHOTOS.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API_ECOMMERCE_LOVE_PHOTOS.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {

                var products = _productRepository.Get();

                if (products == null)
                {
                    return NotFound("Nenhum produto foi encontrado.");
                }

                return Ok(products);

            } catch (Exception ex)
            {
                return BadRequest("Erro ao buscar todos os produtos: " + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetById(int id)
        {
            try
            {

                var product = _productRepository.GetById(id);

                if (product == null)
                {
                    return NotFound("O produto não foi encontrado.");
                }

                return Ok(product);

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao buscar todos os produtos: " + ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            try
            {

                _productRepository.Create(product);

                return Ok("Produto cadastrado com sucesso!");

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao cadastrar o produto: " + ex.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Product> Update(int id, Product product)
        {
            try
            {

                if (_productRepository.GetById(id) == null)
                {
                    return NotFound("O produto informado não existe.");
                }

                var updatedProduct = _productRepository.Update(id, product);

                return Ok(updatedProduct);

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao atualizar o produto: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Product>> Delete(int id)
        {
            try
            {

                if (_productRepository.GetById(id) == null)
                {
                    return NotFound("O produto informado não existe.");
                }

                _productRepository.Delete(id);

                return Ok("Produto removido com sucesso!");

            }
            catch (Exception ex)
            {
                return BadRequest("Erro ao remover o produto: " + ex.Message);
            }
        }
    }
}
