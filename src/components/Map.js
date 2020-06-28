import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import '../stylesheets/map.css'


mapboxgl.accessToken ='pk.eyJ1Ijoic2NhcmFtMDIiLCJhIjoiY2tha2EzeGdjMDBwNzJ3cnR4NTY0c2xueSJ9.okEwbRZu2x0aIbks4zmeVA';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
        };
        }



        componentDidMount() {
            const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
            });

            map.on('move', () => {
                this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(4)
                });
                });

            }


    render() {
        return (
            <div>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis, dolor eaque aut aperiam sequi. Quae, numquam recusandae fuga nesciunt voluptatum ratione laboriosam tempora totam, aliquam quaerat sint ut itaque?
                <h1>Map</h1>
                <p>delete all this text and stuff from nav and App.js if decide not to use map. and stylesheet and index.js and index.html</p> */}
             
                {/* <div className='sidebarStyle'>
                <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                </div> */}
                <div ref={el => this.mapContainer = el} className="mapContainer"/>
                {/* </div> */}
            </div>
        )
    }
}
