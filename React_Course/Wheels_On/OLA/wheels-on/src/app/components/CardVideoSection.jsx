import React from 'react'

const CardVideoSection = () => {
  return (
    <div className='mt-32'>
      <h1 className='text-5xl'>India's most ambition car</h1>
      <div>
        <video  controls style={{width:'100%' , height:'100%'}} src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-car-video.mp4" ></video>
      </div>
    </div>
  )
}

export default CardVideoSection