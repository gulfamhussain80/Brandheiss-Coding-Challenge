import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid, Typography } from '@mui/material';

const ProgressBar = ({progressPercentage, label}: {progressPercentage: number, label: string}) => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} mt={2}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress sx={{height: "30px", borderRadius: "6px"}} variant="determinate" value={progressPercentage} />
      </Box>
      <Box sx={{ minWidth: 55 }}>
        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                <Typography variant="body2">{label}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body2">{progressPercentage} %</Typography>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProgressBar;