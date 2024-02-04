import { useState } from "react"
import ItemList from "./ItemList"


const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  const handleClick = () => {
    setShowIndex()
  }


// console.log(data)
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg" onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems ? <ItemList items={data.itemCards}/> : ""}
      </div>
      
    </div>
  )
}

export default RestaurantCategory
