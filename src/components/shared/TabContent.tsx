import { Grid } from '@mui/material';
import ProgressBar from './ProgressBar';
import { ProgressObject } from '../../types/types';

const TabContent = ({activeTab}: {activeTab: number}) => {
    const progressBarObjects: ProgressObject[] = [
        {
            ID: 0,
            ObjLabel: activeTab === 0 ? "Kurszeil" : "Kaufen",
            ObjPercentage: activeTab === 0 ? 100 : 90
        },
        {
            ID: 1,
            ObjLabel: activeTab === 0 ? "Actuell" : "Halten",
            ObjPercentage: activeTab === 0 ? 50 : 5
        },
        {
            ID: 2,
            ObjLabel: activeTab === 0 ? "Potential" : "Verkaufen",
            ObjPercentage: activeTab === 0 ? 0 : 5
        }
    ]
  
  
    return (
        <Grid container direction="column">
            {
                progressBarObjects.map((obj: ProgressObject) => {
                    return (
                        <Grid item key={obj.ID}>
                            <ProgressBar progressPercentage={obj.ObjPercentage} label={obj.ObjLabel} />
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default TabContent;
