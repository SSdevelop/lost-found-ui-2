import { Box, Button, Modal, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import useVisibilityStore from "../store/visibilityStore";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

export default function VideosModal() {
    const [open, setOpen] = useState(false);
    const { videoNames } = useVisibilityStore(state => ({
        videoNames: state.videoNames,
    }));

    const [videos, setVideos] = useState<string[]>([]);

    const handleClick = () => {
        setOpen(true);
    };

    useEffect(() => {
        const videoNamesFiltered = videoNames.filter(videoName => videoName !== '');
        setVideos(videoNamesFiltered);
    }, [videoNames]);

    return (
        <Box>
            <Button variant="contained" sx={{ margin: 0, height: "100%" }} disabled={!videoNames.some(Boolean)} onClick={handleClick}>
                Show Selected Videos
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <VideoTabs videoNames={videos} />
                </Box>
            </Modal>
        </Box>
    );
}

interface VideoTabsProps {
    videoNames: string[];
}

const VideoTabs = ({ videoNames }: VideoTabsProps) => {
    const [value, setValue] = useState(0);

    const a11yProps = (index: number) => {
        return {
            id: `video-tab-${index}`,
            'aria-controls': `video-tabpanel-${index}`,
        };
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="video tabs">
                    {
                        videoNames.map((videoName, index) => videoName !== '' && (
                            <Tab label={videoName} key={index} {...a11yProps(index)} />
                        ))
                    }
                </Tabs>
            </Box>
            {
                videoNames.map((videoName, index) => videoName !== '' && (
                    <div key={index} role="tabpanel" hidden={value !== index} id={`video-tabpanel-${index}`} aria-labelledby={`video-tab-${index}`}>
                        {
                            value === index && (
                                <video controls height={500}>
                                    <source src={`http://10.10.101.17:5000/files/${videoName}`} />
                                </video>
                            )
                        }
                    </div>
                ))
            }
        </Box>
    );
}