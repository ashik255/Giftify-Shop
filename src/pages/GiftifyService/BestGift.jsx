import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../images/suzon/modal image/vouchers.webp";
import store from "../../images/suzon/service/store.png";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const BestGift = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="align-self-center">
              <Button onClick={handleOpen}>
                <img style={{ width: "40px" }} src={store} alt="" />
              </Button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="keep-mounted-modal-title"
                    variant="h3"
                    component="h2"
                  >
                    Best Gift Collection
                  </Typography>
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2 }}
                  >
                    Well curated gift collection
                  </Typography>
                  <img className="py-3" style={{width:'100%'}} src={img1} alt="" />
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2 }}
                  >
                   We have a well curated gift box catalog for you.
                  </Typography>
                </Box>
              </Modal>
            </div>
  );
};

export default BestGift;
