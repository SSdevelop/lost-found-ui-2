/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Modal } from "@mui/material";
import useVisibilityStore from "../store/visibilityStore";
import Results from "./Results";
import { useState } from "react";
import axios from "axios";
const ButtonBar = () => {
  const { textInput, imageInput, videoNames, resetInputs, setResultVideoDirs } = useVisibilityStore(state => ({
    textInput: state.textInput,
    imageInput: state.imageInput,
    videoNames: state.videoNames,
    resetInputs: state.resetInputs,
    setResultVideoDirs: state.setResultVideoDirs
  }));

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(imageInput);
    setLoading(true);
    setOpen(true);
    const query_type = imageInput.length !== 0 ? 'image' : 'lang';
    const videoNamesFiltered = videoNames.filter(videoName => videoName !== '');
    const formData = axios.toFormData({
      'query_type' : query_type,
      'video_names' : videoNamesFiltered.join(','),
      'lang_query' : imageInput.length !== 0 ? '' : textInput,
      'image_query' : imageInput.length !== 0 ? imageInput : '',
    });
    axios.post('http://localhost:5000/upload', formData).then(res => {
      setResultVideoDirs(res.data.message as string[]);
    }).then(() => {setLoading(false)}).catch((err: any) => {setLoading(false); setOpen(false); console.log(err); alert(err)});
  }
  

  const handleClose = () => {
    setOpen(false);
    resetInputs();
  };
  
  return (
    <Box
      sx={{
        width: "100%",
        height: "3rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <Button variant="contained" sx={{ width: "35%", height: "100%" }} onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "35%", height: "100%" }}
        onClick={resetInputs}
      >
        Reset
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Results loading={loading} />
      </Modal>
    </Box>
  );
};

export default ButtonBar;
