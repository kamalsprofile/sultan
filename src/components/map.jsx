import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMap extends Component {
    state = {}

    render() {
        const mapStyles = {
            width: '70%',
            height: '80%',
            margin: '0 auto',
            padding: '20px'
        };
        return (
            <div style={{ width: "500px", height: "100px", paddingBottom: "20px" }}>
                <Map
                    google={this.props.google}
                    zoom={11}
                    style={mapStyles}
                    initialCenter={{ lat: 55.691443, lng: 12.553666 }}

                >
                    <Marker position={{ lat: 55.691443, lng: 12.553666 }} />
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYo0Tbem5hgwbOdVvEnAe9n-R9l7A5ITU'
})(GoogleMap);;