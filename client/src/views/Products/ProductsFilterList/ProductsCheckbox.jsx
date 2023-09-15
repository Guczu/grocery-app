import { Field } from 'formik';

const ProductsCheckbox = ({ id, name, value }) => {
  return (
    <label htmlFor={id}>
    <Field 
      type="checkbox" 
      id={id} 
      name={name} 
      value={value} 
      className="w-4 h-4 rounded accent-main-primary"
    />
        <span className="px-2">{value}</span>
    </label>
  )
}

export default ProductsCheckbox