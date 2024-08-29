 import React from "react";
import ReactDOM from "react-dom/client"


// const Title=() => (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );

// const HeadingComponent=() => (
//     <div id="container">
//         <Title/>
//         <h1 className="heading">Namste React Functional Component</h1>
//     </div>
// );

const Header =()=>{
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://cdn.dribbble.com/userupload/4288549/file/original-438b97178ade9d02cb34fd941adc6357.jpg?resize=400x300&vertical=center"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> contact us </li>
                    <li> cart </li>

                </ul>

            </div>

        </div>
    )
}

const RestaurantCard=()=>{
    return(    
    <div className="res-card">
        <h3>Meghna foods</h3>
    </div>
    )

}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

