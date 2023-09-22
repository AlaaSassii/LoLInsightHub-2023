import React, { ChangeEvent, useState } from 'react'
import SearchInput from '../../common/searchInput'

const matchHistory = () => {
    const [value, setValue] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const searchForPlater = () => {
        alert('adsadjshdj')
    }
    return (
        <div className='match__history__data'>
            <SearchInput
                placeholder='search your account'
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default matchHistory