import React from 'react';
import {useState} from 'react';
import {AddCategory,GifGrid } from './components'




export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Simpsons'])

  const onAddCategory = (newCategory) =>{

    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([...categories, newCategory])

  }


  return (
    <>
        <h1>Gif Expert App</h1>
      
        <AddCategory 
        onNewValue={ onAddCategory }
        />
        
        
          {
          categories.map(category =>(
          <GifGrid key={category} category={category}/>) 
          )
          }

    </>
  )     
}
