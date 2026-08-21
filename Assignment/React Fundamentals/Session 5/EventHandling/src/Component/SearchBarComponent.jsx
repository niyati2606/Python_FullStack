import React, { useState } from 'react'

function SearchBarComponent() {

    const [search, setSearch] = useState("")

    const handleSearch = (data) => {
        setSearch(data.target.value)
    }

    return (
        <div className='m-4'>
            <div className="input-group flex-nowrap">
                <input type="text" onChange={handleSearch} value={search} className="form-control" placeholder="Search Products" />
                <span className="input-group-text" id="addon-wrapping">Search</span>
            </div>

            <input type="text" value={"You are lloking for : " + search} className="form-control mt-3 shadow-none" readOnly />

        </div>
    )
}

export default SearchBarComponent