/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import useVisibilityStore from "../store/visibilityStore";

const LanguageQuery = () => {
  const { textInput, setTextInput, textDisabled } = useVisibilityStore(state => ({
    textInput: state.textInput,
    setTextInput: state.setTextInput,
    textDisabled: state.textDisabled,
  }));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };
  return (
    <Box sx={{ minWidth: "400px", width:'95%', margin: "10px", borderRadius: '15px', boxShadow: textInput === "" ? '0' : '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10px", backgroundColor: "#f7f8f8" }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            Language Query
          </Typography>
        </CardContent>
        <CardContent>
          <TextField
            id="lang-query"
            label="Object Description"
            variant="outlined"
            fullWidth
            value={textInput}
            onChange={handleChange}
            disabled={textDisabled}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LanguageQuery;
