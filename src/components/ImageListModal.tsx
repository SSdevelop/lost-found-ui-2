import useVisibilityStore from '../store/visibilityStore';
import { Box, Button, Card, CardActionArea, CardMedia, Modal, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';

type ImageListModalProps = {
    open: boolean;
    handleClose: () => void;
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

const imageViewStyle = {
    width: '100%',
    height: '100%',
    marginTop: '20px',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: '10px',
}

const ImageListModal = ({ open, handleClose }: ImageListModalProps) => {
    const { imageInput, removeImageAt } = useVisibilityStore(state => ({
        imageInput: state.imageInput,
        removeImageAt: state.removeImageAt,
    }));

    useEffect(() => {
        if (imageInput.length === 0) {
            handleClose();
        }
    }, [imageInput]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography variant='h2' component='div'>Uploaded Imaged</Typography>
                <div style={imageViewStyle}>
                    {
                        imageInput.map((image, index) => {
                            return (
                                <Card key={index} sx={{ width: 200, height: 250 }}>
                                    <CardMedia component='img' image={URL.createObjectURL(image)} sx={{ width: '200px', height: '200px' }} />
                                    <Button variant='contained' color='error' onClick={() => removeImageAt(index)} sx={{ width: '100%', height: 45, marginTop: '5px' }}>
                                        <DeleteIcon />
                                    </Button>
                                </Card>
                            );
                        })
                    }
                </div>
            </Box>
        </Modal>
    );
};

export default ImageListModal;
