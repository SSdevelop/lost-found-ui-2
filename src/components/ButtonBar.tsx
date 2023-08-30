/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";

const ButtonBar = () => {

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
      <Button variant="contained" sx={{ width: "35%", height: "100%" }}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "35%", height: "100%" }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default ButtonBar;
