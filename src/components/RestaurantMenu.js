import { useState } from "react"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"


const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

    // useEffect(()=>{
    //     fetchMenu()
    // },[])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId)

    //     const json = await data.json()

    //     setResInfo(json.data)

    // }
    if(resInfo === null) return <Shimmer/>
    
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6].card?.card

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {
                categories.map((category, index) => (
                    // Controlled component
                    <RestaurantCategory key={category?.card?.card?.name} data={category?.card?.card} showItems={index===showIndex && true} setShowIndex={()=> setShowIndex(index)}/>
                ))
            }
            {/* <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{(Math.floor((item.card.info.price)/100))}</li>)} 
            </ul> */}
        </div>
    )

}

export default RestaurantMenu