import React from "react";
import haloJSON from "../JSON/halo.json";

const covenant = () => {
  let halo = haloJSON.filter((obj) => obj.faction === "Covenant");

  let haloCovenant = halo.map((enemy) => {
    return (
        <div key={enemy.id} className="card">
            <h2>{enemy.name}</h2>
            <img src={enemy.largeIconImageUrl}></img>
        </div>
    )
  })

  return (
    <div className="covenant">
      {haloCovenant}
    </div>
  );
};

export default covenant;
