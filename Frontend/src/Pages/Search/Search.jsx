import React from 'react'
import { assets } from '../../assets/assets'
const Search = ({placeholder, data}) => {
 const{ menu_list, food_list} = useContext(StoreContext);
  return (
    <div className='search'>
        <div className="search-inputs">
            <div className="data-input">
                <input type="text" />
            </div>
        </div>

    </div>
  )
}

export default Search