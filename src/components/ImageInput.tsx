/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import useVisibilityStore from "../store/visibilityStore";
const baseStyle = {
  width: '90%',
  height: '5.5em',
  margin: 'auto',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

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

  const onDrop = (acceptedFiles: File[]) => {
    const newInputImages = [...imageInput, ...acceptedFiles];
    setImageInput(newInputImages);
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
    // acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'image/*': []}, onDrop, disabled: imageDisabled, validator: duplicateValidator});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const thumbsContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginLeft: 20
  };
  const thumb: React.CSSProperties = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 'auto',
    height: 200,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner: React.CSSProperties = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img: React.CSSProperties = {
    display: 'block',
    width: 'auto',
    height: 'auto'
  };

  const thumbs = imageInput.map((image, index) => (
    <div key={index} style={thumb}>
      <div style={thumbInner}>
        <img src={URL.createObjectURL(image)} alt="image" style={img} onLoad={() => URL.revokeObjectURL(image.name)} />
      </div>
    </div>
  ));

  return (
    <Box >
      <div {...getRootProps({ style: style as React.CSSProperties })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </Box>
  );
};

export default ImageInput;
