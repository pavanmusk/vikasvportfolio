import React from 'react'
import menu from '../data';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';

const allCategories=['All',...new Set(menu.map((item)=>item.category))]

const Portfolio = () => {
    const[menuItems, setMenuItems]= useState(menu);
    const [categories, SetCategories]=useState(allCategories);
    const filterItems=(category)=>{
        if(category === 'all'){
            setMenuItems(menu);
            return ;
          }
        const newItems=menu.filter((item)=>item.category=== category);
        setMenuItems(newItems);
    }
  return (
    <article className="portfolio " data-page="portfolio">
    <header>
        <h2 className="h2 article-title">Portfolio</h2>
    </header>
    
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>

   
</article>
  )
}

export default Portfolio