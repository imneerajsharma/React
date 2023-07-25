import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
      <h1>Products .......</h1>
      {products.map((product)=>(
        <p key={product.id}>{product.title}</p>
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
    </div>
  )
}

export default ProductFeed
