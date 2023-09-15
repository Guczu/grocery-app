import ProductsCheckbox from "./ProductsCheckbox"
import fetchFilters from "../../../utils/fetchFilters"
import { useEffect, useState } from "react"
import CustomButton from "../../../components/CustomButton/CustomButton"

const ProductsFilterList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState();

    useEffect(() => {
        async function getFilters() {
            const available_filters = await fetchFilters();
            if (available_filters) {
                setFilters(available_filters);
            }
            setIsLoading(false);
        }
        getFilters();
    }, [])

    console.log(filters)

  return (
    <div className="w-fill h-fill p-12">

        <span className="text-heading-5 p-6 flex justify-center">
            Dostosuj
        </span>

        <div className="flex flex-col gap-2 px-6">
            <span className="text-heading-3">
                Sklep
            </span>

            <div className="flex flex-col gap-3 mb-12">
                {isLoading ? (
                    <span>Ładowanie...</span>
                ) : (
                    filters && filters.availableShops.map((name, i) => (
                        <ProductsCheckbox key={i} name={name.toLowerCase()} value={name} />
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
                    filters && filters.availableCategories.map((name, i) => (
                        <ProductsCheckbox key={i} name={name.toLowerCase()} value={name} />
                    ))
                )}
            </div>

            <span className="text-heading-3">
                Cena
            </span>

            <div className="flex flex-col gap-1 mb-12">
                <label htmlFor="min">
                    <input type="text" id="min" placeholder="Min" className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"/>
                </label>
                <label htmlFor="max">
                    <input type="text" id="max" placeholder="Max" className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"/>
                </label>
            </div>

            <CustomButton styles="text-body-2 bg-main-primary hover:bg-main-third text-white px-6 py-2">
                    <span>
                        Zastosuj
                    </span>
            </CustomButton>
        </div>

    </div>
  )
}

export default ProductsFilterList