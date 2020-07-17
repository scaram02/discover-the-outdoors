import React, { Component } from 'react'
import '../stylesheets/home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home-contain">
                <div className="cover">
                <h1>Discover the Outdoors</h1>
                </div>

                <div className="quote">
                <h1>"The mountains are calling and I must go"</h1>
                <br/>
                <h2>–John Muir</h2>
                <p>Get inspired, get outside. Discover the world using all five senses. Find your best outdoor moments, discover all the nature has to offer. Discover yourself. 
                    <br/><strong>Discover the outdoors.</strong>
                    
                    </p>
                </div>


                <div className="tri-container">
                    <div className="tri-one">
                        <h1>About</h1>
                    </div>
                    <div className="tri-two">
                        <h1>Coming soon</h1>
                    </div>
                    <div className="tri-three">
                        <h1>Moose</h1>
                    </div>
                </div>
            </div>
        )
    }
}


// if not included somewhere else, could add pages like Activities: camping, hiking, canoeing etc.

// access location to find nearest xyz? 

// should def add state so click a pic, something happens, or show appreciation somehow...like button?

// could make a Get Involved iwth some climate change facts and sustainabiliity incentives

// there was somehting about if you have blank space at bottom it fills in with a color??