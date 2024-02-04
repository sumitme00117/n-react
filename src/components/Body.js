import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }


    // conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return <h1>Looks Like you are offline</h1>

    const {loggedInUser, setUserName} = useContext(UserContext)
    return (
        listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button onClick={() => {
                    
                    const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant)
                }} className="px-4 py-2 bg-green-100 m-4 rounded-lg">Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
                    console.log(filteredList)
                    setFilteredRestaurant(filteredList)
                }} className="px-4 py-2 bg-gray-100 rounded-lg">Top rated restaurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName</label>
                <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="border border-black p-2"/>
                </div>

            </div>
            <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant) => (
                
                <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                    {
                        restaurant.info.avgRating <=4.2 ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard  resData={restaurant} />
                    }
                    
                    
                    </Link>
            ))}
            </div>
        </div>
    )
    )
}

export default Body