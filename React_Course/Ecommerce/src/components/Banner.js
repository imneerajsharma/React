import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/> 
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}

        >
            
            <div>
                <img loading="lazy" src="./amazonfiretv.jpeg" alt=""/>
            </div>
            <div>
                <img loading="lazy" src="./books.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt=""/>
            </div> 
            <div>
                <img loading="lazy" src="./summer.jpg" alt="" />
            </div> 
            <div>
                <img loading="lazy" src="./university.jpeg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="./dailyessentials.jpg" alt="" />
            </div>          

        </Carousel>
    </div>
  )
}

export default Banner
