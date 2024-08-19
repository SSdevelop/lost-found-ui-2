import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
} from "@mui/material";
import useVisibilityStore from "../store/visibilityStore";
import ImageListModal from "./ImageListModal";
import VideoInputDialogue from "./VideoInputDialogue";

const VideoInput = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const { imageInput } = useVisibilityStore(state => ({
    imageInput: state.imageInput,
  }));

  const handleClose = () => setOpenModel(false);

  return (
    <Box sx={{ minWidth: "400px", width: "95%", margin: "10px", borderRadius: '15px', boxShadow: imageInput.length === 0 ? '0' : '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10px", backgroundColor: "#f7f8f8" }}
      >
        <CardContent sx={{ textAlign: "center", position: "relative" }}>
          <Typography gutterBottom variant="h5" component="div">
            Upload Video
          </Typography>
        </CardContent>
        <CardContent sx={{ padding: 0 }}>
          <VideoInputDialogue />
        </CardContent>
      </Card>
      <ImageListModal open={openModel} handleClose={handleClose} />
    </Box>
  );
};

export default VideoInput;