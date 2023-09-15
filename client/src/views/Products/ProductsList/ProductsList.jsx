import ProductTile from "../ProductTile/ProductTile"

const ProductsList = ({ products, setPagination, isLoading }) => {
  return (
    <div className="flex gap-12 flex-wrap p-12">
        {isLoading ? (
          <span>Ładowanie...</span>
        ) : (
          products && products.map((product, i) => (
            <ProductTile key={i} product={product} />
          ))
        )}
    </div>
  )
}

export default ProductsList