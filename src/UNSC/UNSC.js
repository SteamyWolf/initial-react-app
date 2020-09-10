import React, { Component } from 'react';
import haloJSON from '../JSON/halo.json';

class UNSC extends Component {

    render() {

        let halo = haloJSON.filter(obj => obj.faction === "Unsc")

        const style = {
            width: '300px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto'
        }

        const cardStyle = {
            display: 'flex',
            flexDirection: 'column'
        } 

        return (
            <div className="UNSC" style={style}>
                <div className="card" style={cardStyle}>
                    <h2>{halo[0].name}</h2>
                    <img src={halo[0].smallIconImageUrl}></img>
                </div>
            </div>
        )
    }
}

export default UNSC