import React from 'react'

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            <form>
                <div>
                    rajaa näytettäviä: <input
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default Filter