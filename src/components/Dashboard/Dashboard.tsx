import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BreadcrumbsTab from '../Breadcrumbs/BreadcrumbsTab.tsx'
import SideMenu from '../SideMenu/SideMenu.tsx'
import ModelList from '../ModelList/ModelList.tsx'
import OutputView from '../OutputView/OutputView.tsx'
import DataView from '../DataView/DataView.tsx'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const [view , setView] = React.useState(<ModelList/>)

  const handleChangeView =(value : any)=>{
    if(value == 'newExecution'){
      setView(<BreadcrumbsTab/>)
    }
    else if(value == 'ModelsList')
    {
      setView(<ModelList/>)
    }
    else if(value == 'outputView')
      {
        setView(<OutputView/>)
      }
      else if(value == 'dataView')
        {
          setView(<DataView/>)
        }
  }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={3}>
         <SideMenu viewValue ={handleChangeView}/>
        </Grid>
        <Grid item xs={9}>
          {/* <Item> <BreadcrumbsTab/></Item> */}
          <Item>{view}</Item>
        </Grid>
        
      </Grid>

    </Box>
    </div>
  );
}