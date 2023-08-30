import useVisibilityStore from '../store/visibilityStore';
import { Box, Modal } from '@mui/material';

type ImageListModalProps = {
    open: boolean;
    handleClose: () => void;
};

const ImageListModal = ({ open, handleClose }: ImageListModalProps) => {
    const { imageInput } = useVisibilityStore(state => ({
        imageInput: state.imageInput,
    }));
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box>
                <h2>Uploaded Imaged</h2>
                {
                    imageInput.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={URL.createObjectURL(image)} alt={image.name} />
                            </div>
                        );
                    })
                }
            </Box>
        </Modal>
    );
};

export default ImageListModal;
