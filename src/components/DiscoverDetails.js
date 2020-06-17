import React from 'react';
import {posts}   from './DiscoverList';
import { Link } from 'react-router-dom';
import '../stylesheets/discDeets.css'


const DiscoverDetails = (props) => {


const getDisc = (topic) => {
    const theDisc = oneDisc => {
        return oneDisc.topic === topic
    }
    return posts.find(theDisc)
}

const {params} = props.match;
const foundDisc = getDisc(params.topic)


return (
   <div className="container">
    <div className="portrait">
            {/* style={{backgroundImage: `url(${foundDisc.portrait})`}}  as part of the div */}
    <img src={`${foundDisc.portrait}`} alt={foundDisc.topic}/>

    </div>
    <div className="info" >   
    <h1>{foundDisc.title}</h1>
    <h2>{foundDisc.sub}</h2>
    <p>{foundDisc.content}</p>
    <Link to='/discover'>Back to discoveries</Link>
    </div> 
    </div>

)

}


export default DiscoverDetails


