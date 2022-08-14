import React from 'react'
import Link from 'next/link'

const HeroCarouselCard = ({link, image}) => {
  return (
    <div>
        <Link href={link}>
           <img src={image}/>
        </Link>
    </div>
  )
}

export default HeroCarouselCard