const ProductTile = ({ product }) => {
  const { product_name, price, image_url } = product;

  return (
    <div className="relative w-[200px] h-[200px] border-[3px] rounded-[15px] flex flex-col justify-center items-center hover:cursor-pointer hover:border-main-primary">
        <img src={image_url} alt={product_name} className="w-3/4 h-3/4 rounded-[15px] object-contain"/>
          <span className="text-heading-2 text-center">
            {product_name}
          </span>
          <span className="text-heading-2">
            {price}zł
          </span>
    </div>
  )
}

export default ProductTile