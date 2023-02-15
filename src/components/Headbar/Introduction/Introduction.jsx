import './Introduction.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Introduction = () => {
    return(
        <>
        <Box className="container">
            <Typography color='#F7F7F7' sx={{fontWeight: '500', fontSize:'larger'}} className='typewriter'>I'm Pierson, a Front-End Developer! <span> 😀 </span>
            </Typography>
        </Box>
        </>
    )
}

export default Introduction;