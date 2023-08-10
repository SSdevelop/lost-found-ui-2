import { Button, Grid, TextField, styled } from "@mui/material";
import React from "react";

const ImageInput = () => {
  const [filename, setFilename] = React.useState<string>("");

  const DisabledInput = styled(TextField)(() => ({
    "& .MuiFormLabel-root.Mui-disabled": {
      color: "rgb(0,0,0) !important",
    },
    "& .MuiInputBase-input.Mui-disabled": {
      opacity: 1,
      WebkitTextFillColor: "rgb(0,0,0) !important",
      color: "rgb(0,0,0) !important",
    },
  }));

  const handleFileDialogue: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const filenames = [];
      for (let i = 0; i < files.length; i++) {
        filenames.push(files[i].name);
      }
      return setFilename(filenames.join(", "));
    }
  };
  const openDialogue: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const imageQuery = document.getElementById("image-query");
    if (imageQuery) {
      imageQuery.click();
    }
  };
  return (
    <div>
      <input
        type="file"
        name="image-query"
        id="image-query"
        accept="image/*"
        multiple={true}
        style={{ display: "none" }}
        onChange={handleFileDialogue}
      />
      <Grid container>
        <Grid item xs={9}>
          <DisabledInput
            variant="outlined"
            label={filename || "No File Chosen"}
            fullWidth
            disabled
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "rgba(0,0,0,1)",
                color: "rgba(0,0,0,1)",
              },
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%" }}
            onClick={openDialogue}
          >
            Choose Image
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageInput;
