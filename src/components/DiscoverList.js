import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/discList.css'


export const posts = [
    {topic: "forest", title: "Discover the Forest", sub: "Welcome to the forest. Take in the trees, sounds, the woody scents.", img: "../images/forest.jpg", portrait: "../images/forestport2.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {topic: "mountains", title: "Discover the Mountains", sub: "Breathe in. Breathe out. Life brought you here. You've made it.", img: "../images/mountains.jpg", portrait: "../images/mountainport.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {topic: "sea", title: "Discover the Sea", sub: "Let go of all that it means to be human. You are one with the water.", img: "../images/beach.jpg", portrait: "../images/seaport.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
]

// could maybe add like an array of activities or something to map over
// shoudl forest deet portrait be 2 or 3?? Ugh can't decide

export default class DiscoverList extends Component {


    render() {
        return (
            <div style={{height: "100%", marginTop: "45px"}}>
                {posts.map((post) => 
                <div key={post.topic} className="discList">
                  <Link to={`/discover/${post.topic}`}>
                    <h2 style={{backgroundImage: `url(${post.img})`}}>
                          {post.title}
                     </h2>     
                </Link> 
                   </div>
                    )}
            </div>
        )
    }
}




