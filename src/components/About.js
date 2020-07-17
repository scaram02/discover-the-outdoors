import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import '../stylesheets/about.css'




     let advantages = [ "the smell of a campfire on a mild evening", 'hammocking, 10/10 would recommend', `trees you can climb, trees you can't climb`, `picnics`, 'sports are way more fun when outside', 'that CRUNCH of snow underfoot', 'the smell of moss, grass, trees, rain, mulch...the list goes on', 'wild animals you can look at! talk to! photograph! identify!', 'sunrises, sunsets, and golden hour. Nice']


export default class About extends Component {
    render() {
        return (
            <div className="trisection-container">
               <div className="section-one">
                <p>While recently spending a lot of time sitting outside, I thought, why not make a fan website for the Great Outdoors? Let's show this nature thing some appreciation. Thus began my latest side project, a sample site to bring the outdoors to you, and you to the outdoors. This site was built using React and is the result of what was initially a challenge to myself to build something responsive—made both for desktop and mobile devices. Feel free to provide feedback!<br/><br/>
                Have a look around. Find something you like.</p>
                </div> 
                <div className="section-two">
                 <h2>Adventure is out there!</h2>
                 </div> 
                 <div className="section-three">
                <p>Did you come here to...read about the outdoors? Not about me? I get it. That's why I've provided a list of just some of the advantages of going outside.</p>
                <ul>
               {advantages.map((vorteil, index) =>
               <li key={index}> 
               {vorteil}
               </li>
               )}
               </ul>
                    <p className="post-list">Oh, you came here to learn about me? Cool cool, check out my <a className="linkedin" href="https://www.linkedin.com/in/amelia-scarbrough/">Linkedin</a>.</p>
            </div>
            </div>
        )
    }
}
