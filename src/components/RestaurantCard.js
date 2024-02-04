import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = (props) => {
    const {resData} = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.info
  return (
    <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200' data-testid="resCard">
      <img className='rounded-lg' alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
      <p className='break-words font-bold py-4 text-lg'>{name}</p>
      <p className='break-words'>{cuisines}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

//  Higher Order Component (Restaurant Card ===> Restaurant Card with Promoted Tag)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absoluted bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard
