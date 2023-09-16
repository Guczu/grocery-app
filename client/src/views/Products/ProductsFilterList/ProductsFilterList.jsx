import ProductsCheckbox from "./ProductsCheckbox"
import fetchFilters from "../../../utils/fetchFilters"
import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { Formik, Form, Field } from 'formik'

const ProductsFilterList = ({ setFilters }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [availableFilters, setAvailableFilters] = useState();

    useEffect(() => {
        async function getFilters() {
            const available_filters = await fetchFilters();
            if (available_filters) {
                setAvailableFilters(available_filters);
            }
            setIsLoading(false);
        }
        getFilters();
    }, [])

  return (
    <div className="w-fill h-fill p-12">

        <span className="text-heading-5 p-6 flex justify-center">
            Dostosuj
        </span>

        <div className="flex flex-col items-center gap-2 px-6">

            <Formik
                initialValues={{ shop_name: [], category: [], minPrice: 1, maxPrice: 999 }}
                onSubmit={(values) => {
                    setFilters(values);
                }}
            >
                {({
                    values,
                    handleChange,
                    errors,
                    touched
                }) => (
                    <Form>
                        <span className="text-heading-3">
                            Sklep
                        </span>

                        <div className="flex flex-col gap-3 mb-12">
                            {isLoading ? (
                                <span>Ładowanie...</span>
                            ) : (
                                availableFilters && availableFilters.availableShops.map((name, i) => (
                                    <ProductsCheckbox key={i} id={name} name={'shop_name'} value={name} />
                                ))
                            )}
                        </div>

                        <span className="text-heading-3">
                            Kategoria
                        </span>

                        <div className="flex flex-col gap-3 mb-12">
                            {isLoading ? (
                                <span>Ładowanie...</span>
                            ) : (
                                availableFilters && availableFilters.availableCategories.map((name, i) => (
                                    <ProductsCheckbox key={i} id={name} name={'category'} value={name} />
                                ))
                            )}
                        </div>

                        <span className="text-heading-3">
                            Cena
                        </span>

                        <div className="flex flex-col gap-1 mb-12">
                            <label htmlFor="min">
                                <Field 
                                    type="text" 
                                    id="min" 
                                    name="minPrice"
                                    placeholder="Min" 
                                    onChange={handleChange}
                                    value={values.minPrice}
                                    className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"
                                />
                            </label>
                            <label htmlFor="max">
                                <Field 
                                    type="text" 
                                    id="max" 
                                    name="maxPrice"
                                    placeholder="Max" 
                                    onChange={handleChange}
                                    value={values.maxPrice}
                                    className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"
                                />
                            </label>
                        </div>

                        <CustomButton 
                            styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-2"
                            type="submit"
                        >
                            <span>
                                Zastosuj
                            </span>
                        </CustomButton>
                    </Form>
                )}
            </Formik>
            
        </div>

    </div>
  )
}

export default ProductsFilterList