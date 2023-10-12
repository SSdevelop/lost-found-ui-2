/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import useVisibilityStore from "../store/visibilityStore";
import * as inputStyle from '../utils/imageInputStyles';
import CameraModal from './CameraModal';

const ImageInput = () => {
  const {
    imageInput,
    setImageInput,
    imageDisabled
  } = useVisibilityStore(state => ({
    imageInput: state.imageInput,
    setImageInput: state.setImageInput,
    imageDisabled: state.imageDisabled,
  }));
  const [openModal, setOpen] = useState<boolean>(false);

  const onDrop = (acceptedFiles: File[]) => {
    const newInputImages = [...imageInput, ...acceptedFiles];
    setImageInput(newInputImages);
  }

  const handleClose = () => setOpen(false);
  const openCamera = () => setOpen(true);

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
  } = useDropzone({accept: {'image/*': []}, onDrop, disabled: imageDisabled, validator: duplicateValidator, noClick: true, noKeyboard: true});

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
        <img src={URL.createObjectURL(image)} alt="image" style={inputStyle.img} onLoad={() => URL.revokeObjectURL(image.name)} />
      </div>
    </div>
  ));

  return (
    <Box sx={{ width: '100%', maxHeight: '10rem', overflowY: imageInput.length === 0 ? 'hidden' : 'scroll' }}>
      <div {...getRootProps({ style: style as React.CSSProperties })}>
        <input {...getInputProps()}/>
        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={open} sx={{ margin: '10px' }}>
            Select File
          </Button>
          <Button variant="contained" color="primary" onClick={openCamera}>
            Camera Capture
          </Button> 
        </div>
      </div>
      <aside style={inputStyle.thumbsContainer}>
        {thumbs}
      </aside>
      <CameraModal open={openModal} handleClose={handleClose} />
    </Box>
  );
};

export default ImageInput;
