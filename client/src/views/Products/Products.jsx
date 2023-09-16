import { useEffect, useState } from "react"
import ProductsFilterList from "./ProductsFilterList/ProductsFilterList"
import ProductsList from "./ProductsList/ProductsList"
import fetchProducts from "../../utils/fetchProducts";
import { useLocation } from "react-router-dom";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();
    const { shopFilter, filter } = useLocation().state;
    const [pagination, setPagination] = useState({
      page: 1,
      perPage: 20
    });
    const [filters, setFilters] = useState({
        category: [filter],
        minPrice: 0,
        maxPrice: 9999,
        shop_name: [shopFilter]
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
  }, [filters, pagination])

  return (
    <section className="container flex flex-col md:flex-row mx-auto">
        <ProductsFilterList setFilters={setFilters}/>
        <ProductsList products={products} pagination={pagination} setPagination={setPagination} isLoading={isLoading}/>
    </section>
  )
}

export default Products