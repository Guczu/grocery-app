import { useEffect, useState } from "react"
import ProductsFilterList from "./ProductsFilterList/ProductsFilterList"
import ProductsList from "./ProductsList/ProductsList"
import fetchProducts from "../../utils/fetchProducts";
import { useLocation } from "react-router-dom";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const { shopFilter, filter } = location.state || {};
    const [pagination, setPagination] = useState({
      page: 1,
      perPage: 20
    });
    const [filters, setFilters] = useState({
        category: [filter && filter],
        minPrice: 0,
        maxPrice: 9999,
        shop_name: [shopFilter && shopFilter]
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