/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import useToggleInput from "../store/buttonState";

const LanguageQuery = () => {
  const isTextDisabled = useToggleInput((state: any) => state.isTextDisabled);
  const setFileDisabled = useToggleInput((state: any) => state.setFileDisabled);
  const setFileEnabled = useToggleInput((state: any) => state.setFileEnabled);
  
  return (
    <Box sx={{ minWidth: "400px", width:'95%', margin: "10px" }}>
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
            onFocus={setFileDisabled}
            onBlur={setFileEnabled}
            disabled={isTextDisabled}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LanguageQuery;
