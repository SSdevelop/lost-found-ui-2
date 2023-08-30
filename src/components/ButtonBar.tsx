/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import useVisibilityStore from "../store/visibilityStore";
const ButtonBar = () => {
  const { imageInput, resetInputs } = useVisibilityStore(state => ({
    imageInput: state.imageInput,
    resetInputs: state.resetInputs,
  }));

  // const handleReset = (event: React.FormEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   console.log("Reset");
  // };
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
      <Button variant="contained" sx={{ width: "35%", height: "100%" }} onClick={() => {console.log(imageInput)}}>
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
    </Box>
  );
};

export default ButtonBar;
