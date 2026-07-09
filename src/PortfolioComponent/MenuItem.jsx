import React from 'react';

const MenuItem = ({ title, img, desc, category,anchor }) => {
  return (
    <li className="project-item active" data-filter-item data-category={category}>
      <a href={anchor} target="_blank"  rel="noreferrer">
      <figure className="project-img">
        <img src={img} alt={title} className="img" />
        <div className="item-info">
          <header>
            <br />
            <h3 className="project-title">{title}</h3>
            <p className="project-category">{category}</p>
             <p className="project-desc">
              {desc}
            </p>
          </header>
          
           
         
        </div>
      </figure>
      </a>
    </li>
  );
};

export default MenuItem;