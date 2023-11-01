import React from 'react'
import Image from 'next/image';
import {
  MenuIcon,SearchIcon,ShoppingCartIcon,
} from "@heroicons/react/outline";

// import menu from "../assets/menu.png";

function Header() {
  return (
    
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image
              src='https://links.papareact.com/f90'
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"

            />
          </div>
          {/* Search  */}
          <div className= "hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
            <input className=" p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"  type="text"/>
            {/* <SearchIcon className="h-12 p-4"/> */}
            {
              // SearchIcon svg code
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 p-4" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          </div>
          {/* Right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
              <div className="highlight-on-hover">
                <p>Hello Neeraj Sharma</p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
              </div>
              <div className="highlight-on-hover">
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>&Orders</p>
              </div>
              <div className="relative highlight-on-hover flex items-center">

                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font bold">0</span>
                {/* <ShoppingCartIcon className='h-10'/> */}
                {

                 //ShoppingCartIcon with svg code
                <svg xmlns="http://www.w3.org/2000/svg" className='h-10' class="h-10 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                }


                <p className='hidden md:inline font-extrabold md:text- mt-2' >Basket</p>
              </div>
          </div>
      </div>
    
      {/* Bottom Nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>        
        <p className='highlight-on-hover flex items-center'>
         
         { 
         //Menu Icon with svg code
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          
         }
            
          All
        </p>
        <p className='highlight-on-hover'>Prime Video</p>
        <p className='highlight-on-hover'>Amazon Business</p>
        <p className='highlight-on-hover'>Today's Deals</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Electronics</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Food & Grocery</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Prime</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Buy Again</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='highlight-on-hover hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
