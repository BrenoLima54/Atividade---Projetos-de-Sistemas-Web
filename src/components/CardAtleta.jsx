import React from "react";
import { Heart } from "lucide-react";
import imageNotFound from "../assets/image_not_found.png";

const CardAtleta = ({ atleta, addToFavorites }) => {
  return (
    <div className="card">
      <img
        src={atleta.photo}
        alt={atleta.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = imageNotFound;
        }}
      />
      <h2>{atleta.name}</h2>
      <h3>{atleta.nickname}</h3>
      <p>{atleta.weight}</p>
      <p>{atleta.category}</p>

      <button className="fav-butto" onClick={() => addToFavorites(atleta)}>
        <Heart />
      </button>
    </div>
  );
};

export default CardAtleta;
