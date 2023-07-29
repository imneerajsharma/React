import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      
      {products
      .slice(0,4)
      .map(({id,title,price,description,category,image})=>(
        <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
        
        />
        
        
        
        // <p key={product.id}>{product.title}</p>
        // <p>{product.title}</p> // this will give an error because 

//  The error "Unhandled Runtime Error: TypeError: Cannot read properties of 
//     undefined (reading 'map')" occurs because the products prop is not being passed 
//     correctly to the ProductFeed component when it is being used.

//  The error suggests that the products prop is undefined, meaning that it is not provided
//  or is not yet available when the ProductFeed component tries to access it using the map method.

//  To resolve this error, you need to ensure that the products prop is passed correctly
//  to the ProductFeed component when it is used in the index.js file. You can do this by 
//  making sure that the products prop is available and contains valid data before rendering 
//  the ProductFeed component.
      
      ))}

      {/* <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt=""/> */}
      <img className='md:col-span-full' src="./advertise.jpg" alt=""/>
      
      <div className='md:col-span-2'>
      {products
      .slice(4,5)
      .map(({id,title,price,description,category,image})=>(
        <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
        
        />
 
      ))}
      </div>

      {products
      .slice(5,products.length)
      .map(({id,title,price,description,category,image})=>(
        <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
        
        />
 
      ))}
    </div>
  )
}

export default ProductFeed
