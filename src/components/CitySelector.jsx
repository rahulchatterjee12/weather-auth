import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Select } from "@mui/material";

const CitySelector = ({
  selectedCity,
  onCityChange,
  favorites,
  onFavoriteAdd,
  onFavoriteRemove,
}) => {
  const handleSelectChange = (event) => {
    onCityChange(event.target.value);
  };

  const isFavorite = (city) => favorites.includes(city);

  const handleFavoriteClick = (city) => {
    if (isFavorite(city)) {
      onFavoriteRemove(city);
    } else {
      onFavoriteAdd(city);
    }
  };

  return (
    <div className="flex justify-center">
      <select
        value={selectedCity}
        onChange={handleSelectChange}
        className="p-1 bg-white border border-gray-300 rounded-md text-black"
      >
        <option value="kolkata">Kolkata</option>
        <option value="suri">Suri</option>
        <option value="bolpur">Bolpur</option>
        {/* ... */}
      </select>
      {isFavorite(selectedCity) ? (
        <IconButton
          color="error"
          onClick={() => handleFavoriteClick(selectedCity)}
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => handleFavoriteClick(selectedCity)}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </div>
  );
};

export default CitySelector;
