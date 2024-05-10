import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90vw", md: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  color: "black",
};

export default function SavedCityModal({
  setSelectedCity,
  onFavoriteRemove,
  favorites,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItem = (value) => {
    onFavoriteRemove(value);
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <BookmarkIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Saved City List
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {favorites.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton
                      color="error"
                      edge="end"
                      aria-label="comments"
                      onClick={() => deleteItem(value)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={() => setSelectedCity(value)}
                    dense
                  >
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
