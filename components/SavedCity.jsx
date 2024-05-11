import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/[locale]/firebase/config";

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
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItem = (value) => {
    onFavoriteRemove(value);
  };
  return (
    <div>
      {user && (
        <Tooltip title="Saved City">
          <IconButton onClick={handleOpen} color="secondary">
            <BookmarkIcon />
          </IconButton>
        </Tooltip>
      )}
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
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <IconButton
                      color="error"
                      edge="end"
                      aria-label="comments"
                      onClick={() => deleteItem(value.id)}
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
                    <ListItemText primary={value.name} />
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
