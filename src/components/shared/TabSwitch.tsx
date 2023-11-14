import { Tab, Tabs } from "@mui/material";

const tabStyles = {
  '&.Mui-selected': {
    backgroundColor: '#363062',
    color: '#ffffff',
    borderRadius: "7px"
  },
  borderColor:"#363062",
  color: "#ffffff",
  fontSize: "10px",
  alignContent: "start"
}

const TabSwitch = ({setActiveTab, activeTab}:{setActiveTab: (activeValue:number) => void, activeTab: number}) => {

  const handleTabChange = (event: any, newValue:any) => {
    setActiveTab(newValue)
  }

  return (
    <Tabs value={activeTab} onChange={handleTabChange} TabIndicatorProps={{ style: { display: 'none'}}} variant='fullWidth'>
      <Tab
        label="Bewertung"
        sx={tabStyles}
      />
    
      <Tab
        label="Kursziel"
        sx={tabStyles}
      />
    </Tabs>
  );
}


export default TabSwitch;