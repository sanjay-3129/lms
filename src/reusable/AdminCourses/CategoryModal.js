import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {
  collection,
  getDocs,
  db,
  addDoc,
  updateDoc,
} from "../../services/firebase";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 6,
};

export default function CategoryModal(props) {
  console.log("Category", props);
  const { category, setCategory } = props.value;
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var domain = "asdf.domain.com";
  const handleCreateCategory = async () => {
    if (categoryName != null) {
      const firestoreRef = await addDoc(
        collection(db, "secondary", domain, "category"),
        {
          categoryName: categoryName,
        }
      );
      updateDoc(firestoreRef, {
        categoryId: firestoreRef.id,
      }).then(() => {
        console.log("Category Added");
        setCategory([
          ...category,
          { categoryName, categoryId: firestoreRef.id, NoOfcourse: 0 },
        ]);
        handleClose();
      });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ fontSize: "12px" }}>
        + New Category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add New Category
          </Typography>
          <br />
          <TextField
            type="text"
            id="outlined-basic"
            label="Category"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
            className="textfield"
            InputLabelProps={{ className: "textfield__label" }}
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              style={{
                marginRight: "10px",
                padding: "4px 5px",
                fontSize: "14px",
              }}
              onClick={handleCreateCategory}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#DC3545",
                padding: "3px 5px",
                fontSize: "14px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
