import Header from "../../../components/Header/Header"
import ProductTile from "../ProductTile/ProductTile"

const ProductsList = () => {
  return (
    <div className="flex gap-12 flex-wrap p-12">
        <ProductTile/>
        <ProductTile/>
        <ProductTile/>
        <ProductTile/>
        {}
    </div>
  )
}

export default ProductsList