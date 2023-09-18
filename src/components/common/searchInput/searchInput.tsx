import { ChangeEvent, KeyboardEvent, FC } from "react"
import './searchInput.scss'
import { BiSearch } from "react-icons/bi"

type SearchInputProps = {
    placeholder: string,
    value?: string,
    handleSearchFunction: () => void,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: FC<SearchInputProps> = ({ placeholder, value, handleSearchFunction, onChange }) => {
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearchFunction();
        }
    };
    return (
        <div className="search__input">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyPress} />
            <button onClick={handleSearchFunction}><BiSearch /></button>
        </div>
    )
}

export default SearchInput