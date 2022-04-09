import React from "react";
import {getUser} from "../axios";

const Home = (user) =>{
   getUser('mekerimkilic').then((res) =>console.log(res.data));

    return (<div>{user?.email}</div>);
}

export default Home;