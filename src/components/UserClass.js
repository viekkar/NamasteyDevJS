import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }

    };

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/viekkar");
        const json = await data.json();


        this.setState({
            userInfo:json,
        })

        console.log(json);
    }


    render(){
        const{name, location,avatar_url}=this.state.userInfo;
        return (
            <div className="">
                <img className="rounded-full w-[300px]" src={avatar_url}></img>
              <h2 className="py-4 flex justify-center font-bold">Name: {name}</h2>
              <h3 className="flex justify-center" >Location: {location}</h3>
            </div>
          );
    }
}

export default UserClass;