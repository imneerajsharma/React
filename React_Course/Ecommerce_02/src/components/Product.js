import React, { useState } from 'react'
import Image from 'next/image'
//import {StarIcon} from "@heroicons/react/solid";
//import StarIcon from '.../public/icons/StarIcon';


//   SVG code for StarIcon
const StarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5  text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
  );

  const Currency = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
    );

const MAX_RATING =5;
const MIN_RATING =1;

function Product({id,title,price,description,category,image}) {
    const[rating]=useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] =useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
        .fill()
        .map((_,i) => (
            <StarIcon className='h-5 text-yellow-500' />
            
        ))}        
      
      </div>
    
      <p className='text-xs my-2 line-clamp-2'>{description}</p>

       {/* <div className='mb-5'>
                {<Currency {quantity={price * 64 }} currency='INR' /> }
                <Currency {price} />
      </div>  */}

      <div className='mb-5 flex items-center'>
        {/* <Currency /> */}
        ₹ <span className="ml-1">{price * 64}</span>

      </div>
      
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src="./prime.png" alt="" />
            <p className= "text-xs text-gray-500">Free Next-day Delivery </p>
        </div>        
      )}     

        <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
}

export default Product;
