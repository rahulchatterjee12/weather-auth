import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Select, TextField, Tooltip } from "@mui/material";
import SavedCityModal from "./SavedCity";

const CityInput = ({
  selectedCity,
  onCityChange,
  favorites,
  onFavoriteAdd,
  onFavoriteRemove,
  setSelectedCity,
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
    <div className="flex text-white justify-center mx-2 gap-2">
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        color="secondary"
        value={selectedCity}
        onChange={handleSelectChange}
      />
      {isFavorite(selectedCity) ? (
        <Tooltip title="Save City">
          <IconButton
            color="error"
            onClick={() => handleFavoriteClick(selectedCity)}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Remove City">
          <IconButton onClick={() => handleFavoriteClick(selectedCity)}>
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      )}
      <SavedCityModal
        setSelectedCity={setSelectedCity}
        onFavoriteRemove={onFavoriteRemove}
        favorites={favorites}
      />
    </div>
  );
};

export default CityInput;
