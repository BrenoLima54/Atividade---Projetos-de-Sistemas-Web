import React from "react";
import { Heart } from "lucide-react";
import anderson from "../assets/anderson.png";

const CardAtleta = ({ atleta, addToFavorites }) => {
  return (
    <div className="card">
      {/* <img src={atleta.image || 'default-image.jpg'} alt={atleta.name} /> */}
      <img src={anderson}/>
      <h2>{atleta.name}</h2>
      <h3>{atleta.nickname}</h3>
      <p>{atleta.weight}</p>
      <p>{atleta.category}</p>

      <button className="fav-butto" onClick={() => addToFavorites(atleta)}>
         <Heart/> 
         </button>
    </div>
  );
};

export default CardAtleta;
