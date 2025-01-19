import React from "react";
import { Heart } from "lucide-react";
import imageNotFound from "../assets/image_not_found.png";

const CardAtleta = ({
  atleta,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
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

      <button
        className="fav-button"
        onClick={() => {
          isFavorite ? removeFromFavorites(atleta.id) : addToFavorites(atleta);
        }}
      >
        <Heart className={isFavorite && "active"} />
      </button>
    </div>
  );
};

export default CardAtleta;
