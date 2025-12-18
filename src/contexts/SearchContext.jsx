import { createContext, useState } from "react"

export const SearchContext=createContext()

const SearchProvider=({children})=>{

    const [search,setSearch]=useState('')
    const [showSearchBar,setShowSearchBar]=useState(false)
    
    return (
        <SearchContext.Provider value={{search, setSearch, showSearchBar, setShowSearchBar}}>
            {children}
        </SearchContext.Provider>
    )

}

export default SearchProvider