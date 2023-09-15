import { useEffect, useState } from "react"
import ProductsFilterList from "./ProductsFilterList/ProductsFilterList"
import ProductsList from "./ProductsList/ProductsList"
import fetchProducts from "../../utils/fetchProducts";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();
    const [pagination, setPagination] = useState({
      page: 1,
      perPage: 5
    });
    const [filters, setFilters] = useState({
        category: [],
        minPrice: 0,
        maxPrice: 9999,
        shop_name: []
  })

  useEffect(() => {
    async function getProducts() {
      const result = await fetchProducts(filters, pagination);
      if (result) {
        setProducts(result);
        setIsLoading(false);
      }
    }
    getProducts();
  }, [filters])

  console.log(products)

  return (
    <section className="w-full flex flex-row">
        <ProductsFilterList setFilters={setFilters}/>
        <ProductsList products={products} setPagination={setPagination} isLoading={isLoading}/>
    </section>
  )
}

export default Products