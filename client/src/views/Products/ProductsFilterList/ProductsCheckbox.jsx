const ProductsCheckbox = ({ name, value }) => {
  return (
    <label htmlFor={name}>
        <input type="checkbox" id={name} className="w-4 h-4 rounded accent-main-primary"/>
        <span className="px-2">{value}</span>
    </label>
  )
}

export default ProductsCheckbox