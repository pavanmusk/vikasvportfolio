import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className="filter-list">
        {categories.map((category)=>{
            return   <section className="projects">
            <ul className="filter-list">
                <li className="filter-item">
                    <button type="button"  key={category} onClick={()=>filterItems(category)}>
                {category}
            </button>
            </li>
            </ul>
            </section>
        })}
        
    </div>
  )
}

export default Categories