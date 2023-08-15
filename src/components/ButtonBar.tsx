/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";
import useToggleInput from "../store/buttonState";

const ButtonBar = () => {
  const setFileEnabled = useToggleInput((state: any) => state.setFileEnabled);
  const setTextEnabled = useToggleInput((state: any) => state.setTextEnabled);

  const handleReset = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFileEnabled(true);
    setTextEnabled(true);
    console.log("Reset");
    const langQuery: HTMLInputElement = document.getElementById(
      "lang-query"
    ) as HTMLInputElement;
    const imageQuery: HTMLInputElement = document.getElementById(
      "image-query"
    ) as HTMLInputElement;
    langQuery.value = "";
    imageQuery.value = "";
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
      <Button variant="contained" sx={{ width: "35%", height: "100%" }}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "35%", height: "100%" }}
        onClick={handleReset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default ButtonBar;
