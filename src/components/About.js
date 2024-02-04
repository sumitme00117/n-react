import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{

    constructor(props){
        super(props)

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent render")
        return (
        <div>
            <h1>About</h1>
            <h2>This is React</h2>
            <User/>
            <UserClass name={"Sumit (class)"} location={"Noida(class)"}/>
        </div>
    )

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is React</h2>
//             <User/>
//             <UserClass name={"Sumit (class)"} location={"Noida(class)"}/>
//         </div>
//     )
// }

export default About