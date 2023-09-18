import { ChangeEvent, FC } from "react"
import './searchInput.scss'

type SearchInputProps = {
    placeholder: string,
    value: string,
    onClick: () => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchInput: FC<SearchInputProps> = ({ placeholder, value, onClick, onChange }) => {
    return (
        <div className="search__input">
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
            <button onClick={onClick}></button>
        </div>
    )
}

export default SearchInput