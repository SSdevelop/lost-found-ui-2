import { useState, useEffect } from 'react';
import { Box, Tabs, Tab, CircularProgress, Typography } from "@mui/material";
import useVisibilityStore from "../store/visibilityStore";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

type ResultsProps = {
    loading: boolean;
    timetaken: string;
};

export default function Results( { loading, timetaken }: ResultsProps) {
    const { resultVideoDirs } = useVisibilityStore(state => ({
        resultVideoDirs: state.resultVideoDirs,
    }));

    const [videos, setVideos] = useState<string[]>([]);

    useEffect(() => {
        console.log(resultVideoDirs);
        const resultVideos = [];
        for(let i = 0; i < resultVideoDirs.length; i++) {
            resultVideos.push(`${resultVideoDirs[i]}/rank0.mp4`);
            resultVideos.push(`${resultVideoDirs[i]}/rank1.mp4`);
            resultVideos.push(`${resultVideoDirs[i]}/rank2.mp4`);
            // resultVideos.push(`${resultVideoDirs[i]}/rank3.mp4`);
            // resultVideos.push(`${resultVideoDirs[i]}/rank4.mp4`);
        }
        setVideos(resultVideos);
    }, [resultVideoDirs]);

    return (
        <Box sx={style}>
            {
                loading ? (<CircularProgress />) : (
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography variant="h6">Time taken: {timetaken}</Typography>
                        </Box>
                        <VideoTabs videoNames={videos} />     
                    </Box>
                
                )
            }
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
                        videoNames.map((videoName, index) => {
                            const rank: string = videoName.slice(videoName.lastIndexOf('/') + 1);
                            const rankNumber: number = parseInt(rank.charAt(4)) + 1
                            return videoName !== '' && (
                            <Tab label={`Rank ${rankNumber}`} key={index} {...a11yProps(index)} />
                        )})
                    }
                </Tabs>
            </Box>
            {
                videoNames.map((videoName, index) => videoName !== '' && (
                    <div key={index} role="tabpanel" hidden={value !== index} id={`video-tabpanel-${index}`} aria-labelledby={`video-tab-${index}`}>
                        {
                            value === index && (
                                <video controls height={500}>
                                    <source src={`http://localhost:5000/files/results?filepath=${videoName}`} />
                                </video>
                            )
                        }
                    </div>
                ))
            }
        </Box>
    );
}