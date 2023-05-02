import React from "react";
import './Home.css'

const Home = () =>{
    return(
        <div className="home">
            <div className="parent">
                <div className="child left">
                    <div className="tagline">
                        <h1>"From server<br/> to browser, <br/>I've got you covered."</h1>                
                    </div>
                    <div className="download-resume">
                        <button>Download Resume</button>
                    </div>
                </div>
                <div className="child right">
                    <div className="profile-picture">
                    <img src={require('../images/myPhoto.png')}  alt="profile-pic" />
                    </div>
                    <div className="full-name">
                        <h1>Dhananjoy Dey</h1>
                    </div>
                    <div className="about">
                        <p>Passionate full-stack developer skilled in Golang, React, and MongoDB | Crafting exceptional digital experiences</p>
                    </div>
                    {/* <h1>Profile</h1> */}
                </div>
            </div>
            
        </div>
    )

    
}
export default Home