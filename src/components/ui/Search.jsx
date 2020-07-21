import React from 'react'

export default function Search() {
    return (
        <>
            <div className="form-control">
                <input type="text" name="search" id="search" placeholder="Search for food, coffee, etc..."/>
                <i className="fas fa-search"></i>
            </div>  
        </>
    )
}
