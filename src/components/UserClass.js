import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     count: 0,
        //     count2: 2,
        // }
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
        console.log("Child Constructor")
    }

    async componentDidMount(){
        console.log("Child Component Did Mount")

        // API call

        const data = await fetch("https://api.github.com/users/sumitme00117")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){

        // It is called at the last of update cycle
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }

    render() {
        console.log("Child render")
        // const {name, location} = this.props
        // const {count, count2} = this.state
        const {login, id, avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                {/* <h1>{count}</h1> */}
                <button onClick={()=> {
                    // this.setState({
                    //     count: this.setState.count+1,
                    //     count2: this.setState.count2+1
                    // })
                }}>Count Increase</button>
                <h2>Name {login}</h2>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {(data) => console.log(data)}
                    </UserContext.Consumer>
                </div>
                <h3>Location: {id}</h3>
                <h4>Contact: sumitme00117@gmail.com</h4>
                <img src={avatar_url}/>
            </div>
        )

    }

}

export default UserClass