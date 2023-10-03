import { IoIosArrowDown } from "react-icons/io"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { useEffect, useState } from "react";
import fetchFilters from "../../../utils/fetchFilters";

const SearchbarCategories = ({ category, setCategory }) => {
    const [availableFilters, setAvailableFilters] = useState();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        async function getFilters() {
            const available_filters = await fetchFilters();
            if (available_filters) {
                setAvailableFilters(['Wszystkie kategorie', ...available_filters.availableCategories]);
            }
        }
        getFilters();
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeOption = (name) => {
        setCategory(name);
        setIsDropdownOpen(false);
    }

  return (
    <div className="relative">
        <CustomButton 
            styles={'w-44 text-body-1 bg-base-graybackground hover:bg-base-border gap-2 hidden lg:flex'}
            onClick={toggleDropdown}
        >
                <span className="text-typography-text">
                    {category}
                </span>
                <IoIosArrowDown/>
        </CustomButton>
        {isDropdownOpen && (
            <div className="absolute bg-base-graybackground w-full rounded z-50">
            <ul className="flex flex-col justify-center items-center gap-2 p-2 text-body-6">
                {availableFilters && availableFilters.map((optionName, index) => (
                    <li 
                        className="w-full flex justify-center items-center rounded hover:bg-base-border hover:cursor-pointer"
                        key={index}
                        onClick={() => changeOption(optionName)}
                    >
                        {optionName}
                    </li>
                ))}
            </ul>
            </div>
        )}
    </div>
  )
}

export default SearchbarCategories