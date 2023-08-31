import { useState } from "react"
import ProductsFilterList from "./ProductsFilterList/ProductsFilterList"
import ProductsList from "./ProductsList/ProductsList"

const Products = () => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
        maxPrice: 9999,
        shop: 'all'
})

  return (
    <section className="w-full flex flex-row">
        <ProductsFilterList/>
        <ProductsList/>
    </section>
  )
}

export default Products