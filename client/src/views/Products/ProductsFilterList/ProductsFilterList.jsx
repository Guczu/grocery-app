const ProductsFilterList = () => {
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
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded accent-main-primary"/>
                    <span className="px-2">Nazwa sklepu</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Nazwa sklepu</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Nazwa sklepu</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Nazwa sklepu</span>
                </label>
            </div>

            <span className="text-heading-3">
                Kategoria
            </span>

            <div className="flex flex-col gap-3 mb-12">
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
            </div>

            <span className="text-heading-3">
                Cena
            </span>

            <div className="flex flex-col gap-1 mb-12">
                <label htmlFor="">
                    <input type="text" placeholder="Min" className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"/>
                    -
                    <input type="text" placeholder="Max" className="w-[5rem] m-2 rounded-[15px] px-4 border-[2px] focus:outline-none"/>
                </label>
            </div>

            <span className="text-heading-3">
                Kategoria
            </span>

            <div className="flex flex-col gap-3 mb-12">
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
                <label htmlFor="">
                    <input type="checkbox" className="w-4 h-4 rounded"/>
                    <span className="px-2">Kategoria</span>
                </label>
            </div>
        </div>

    </div>
  )
}

export default ProductsFilterList