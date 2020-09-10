import React from 'react';
import haloJSON from '../JSON/halo.json';

const promethean = () => {

    let halo = haloJSON.filter(obj => obj.faction === "Promethean")

    let haloPromethean = halo.map(promo => {
        return (
            <div className="card" key={promo.id}>
                <h2>{promo.name}</h2>
                <img src={promo.smallIconImageUrl}></img>
            </div>
        )
    })

    return (
        <div className="promethean">
            {haloPromethean}
        </div>
    )
}

export default promethean