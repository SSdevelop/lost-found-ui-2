import { Box, Button, Modal, SxProps, Typography } from "@mui/material";
import { useRef } from "react";
import Webcam from 'react-webcam';
import useVisibilityStore from "../store/visibilityStore";
// import { FullscreenExit } from "@mui/icons-material";

type CameraModalProps = {
    open: boolean;
    handleClose: () => void;
};

const style: SxProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 4,
    width: '60em',
    height: '40em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

export default function CameraModal({ open, handleClose }: CameraModalProps) {
    const webcamRef = useRef<Webcam | null>(null);
    const { imageInput, setImageInput } = useVisibilityStore(state => ({
        imageInput: state.imageInput,
        setImageInput: state.setImageInput
    }));
    const getFormattedTime = (): string => {
        const today = new Date();
        return "" + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds();
    };
    const handleCapture = () => {
        if (webcamRef.current) {
            const screenshot = webcamRef.current.getScreenshot();
            if (screenshot) {
                fetch(screenshot)
                    .then(res => res.blob())
                    .then(blob => {
                        const imageFile = new File([blob], `${getFormattedTime()}.png`, { type: 'image/png' });
                        setImageInput([...imageInput, imageFile]);
                        handleClose();
                    })
                    .catch(err => alert("Something went wrong with image capture: " + err));
            }
        }
    };
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h2" component="div" sx={{ width: '100%', textAlign: 'center' }}>
                    Capture Camera
                </Typography>
                <Webcam height={400} width={600} audio={false} ref={webcamRef} screenshotFormat="image/png" />
                <Button variant="contained" color="primary" onClick={handleCapture}>
                    Capture
                </Button>
            </Box>
        </Modal>
    );
}