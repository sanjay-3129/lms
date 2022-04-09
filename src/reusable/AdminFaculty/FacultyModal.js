import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
} from "../../services/firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export default function FacultyModal(props) {
  const { faculties, setFaculties } = props.value;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");

  var domain = "asdf.domain.com";

  const handleSave = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userId = userCredential.user.uid;
        await setDoc(doc(db, "secondary", domain, "faculties", userId), {
          user_id: userId,
          profile: "https://www.w3schools.com/howto/img_avatar.png",
          name: name,
          email: email,
          default_password: password,
          qualification: qualification,
        }).then(() => {
          setFaculties([
            ...faculties,
            {
              name,
              email,
              user_id: userId,
              qualification,
              default_password: password,
              profile: "https://www.w3schools.com/howto/img_avatar.png",
            },
          ]);
          setOpen(false);
          console.log("User created successfully");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ fontSize: "12px" }}
      >
        + Add New
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add New Faculty
          </Typography>

          <br />
          <TextField
            type="text"
            id="outlined-basic1"
            label="Name"
            variant="outlined"
            style={{ width: "100%" }}
            className="textfield"
            InputLabelProps={{ className: "textfield__label" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            type="text"
            id="outlined-basic2"
            label="Email"
            variant="outlined"
            style={{ width: "100%" }}
            className="textfield"
            InputLabelProps={{ className: "textfield__label" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            type="text"
            id="outlined-basic3"
            label="Qualification"
            variant="outlined"
            style={{ width: "100%" }}
            className="textfield"
            InputLabelProps={{ className: "textfield__label" }}
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            type="password"
            id="outlined-basic4"
            label="Default Password"
            variant="outlined"
            style={{ width: "100%" }}
            className="textfield"
            InputLabelProps={{ className: "textfield__label" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
              onClick={handleSave}
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
//
