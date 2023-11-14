import TabSwitch from '../shared/TabSwitch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useState } from 'react';
import TabContent from '../shared/TabContent';

const cardStyles = {
    width: "130%",
    marginTop: "5px",
    padding:"7px",
    backgroundColor:"#192655", 
    color: "#ffffff"
}

const AnalysisCard = () => {
    const [activeTab, setActiveTab] = useState(0)
  
  return (
    <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item>
            <Card sx={cardStyles}>
                <CardContent>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Typography>
                                Was 35 analysten sagen {'>'}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TabSwitch setActiveTab={setActiveTab} activeTab={activeTab}/>
                        </Grid>
                    </Grid>
                    <TabContent activeTab={activeTab} />
                </CardContent>
            </Card>
        </Grid>
    
    </Grid>
  );
}

export default AnalysisCard;