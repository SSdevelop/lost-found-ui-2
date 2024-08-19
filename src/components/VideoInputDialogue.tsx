/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import useVisibilityStore from "../store/visibilityStore";
import * as inputStyle from '../utils/imageInputStyles';

const VideoInputDialogue = () => {
  const {
    imageInput,
    setImageInput,
    imageDisabled,
    videoNames,
    setVideoNames
  } = useVisibilityStore(state => ({
    imageInput: state.imageInput,
    setImageInput: state.setImageInput,
    imageDisabled: state.imageDisabled,
    videoNames: state.videoNames,
    setVideoNames: state.setVideoNames
  }));

  const onDrop = (acceptedFiles: File[]) => {
    const newInputImages = [...imageInput, ...acceptedFiles];
    const newVideoNames = [...videoNames, ...acceptedFiles.map(file => file.name)];
    setImageInput(newInputImages);
    setVideoNames(newVideoNames);
  }


  const duplicateValidator = (file: File) => {
    for(let i=0; i < imageInput.length; i++) {
      if (imageInput[i].name === file.name) {
        return {
          code: 'duplicate',
          message: 'Duplicate file'
        };
      }
    }
    return null;
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({accept: {'video/mp4': [".mp4"]}, onDrop, disabled: imageDisabled, validator: duplicateValidator, noClick: true, noKeyboard: true});

  // const dropzoneRef = createRef<HTMLInputElement | any>();

  const style = useMemo(() => ({
    ...inputStyle.baseStyle,
    ...(isFocused ? inputStyle.focusedStyle : {}),
    ...(isDragAccept ? inputStyle.acceptStyle : {}),
    ...(isDragReject ? inputStyle.rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  

  const thumbs = imageInput.map((image, index) => (
    <div key={index} style={inputStyle.thumb}>
      <div style={inputStyle.thumbInner}>
        <video src={URL.createObjectURL(image)} controls onLoad={() => URL.revokeObjectURL(image.name)} />
      </div>
    </div>
  ));

  return (
    <Box sx={{ width: '100%', overflowY: imageInput.length === 0 ? 'hidden' : 'scroll' }}>
      <div {...getRootProps({ style: style as React.CSSProperties })}>
        <input {...getInputProps()}/>
        <p>Drag 'n' drop video files here, or click to Select Video</p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={open} sx={{ margin: '10px' }}>
            Select Video
          </Button> 
        </div>
      </div>
      <aside style={inputStyle.thumbsContainer}>
        {thumbs}
      </aside>
    </Box>
  );
};

export default VideoInputDialogue;
