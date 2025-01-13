import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import ContactUs from '../ContactUs/ContactUs.tsx';
export default function SideMenu({viewValue}) {


    // const handleChangeView=(view:any)=>{
      
    //     console.log('View', view)
    // }

    const handleClick = () => {
      const email = 'abc@suntoryglobal.com';
      window.location.href = `mailto:${email}`;
  };
  return (
    <div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
      <Button onClick={()=>viewValue('ModelsList')}>

        <ListItemText primary="Models List" /></Button>
      </ListItem>
      

      <ListItem>
      <Button onClick={()=>viewValue('outputView')}>
        <ListItemText primary="Output View"/> </Button>
      </ListItem>
    
     
      <ListItem>
      <Button onClick={()=>viewValue('dataView')}>
        <ListItemText primary="Data View" /></Button>
      </ListItem>
    
      <ListItem>
      <Button onClick={()=>viewValue('newExecution') } >

        <ListItemText primary="New Execution" /></Button>
      </ListItem>
    </List>
    <Button  onClick={handleClick} sx={{marginTop :42, marginRight: 25}}>Contact Us</Button>

    </div>
  );
}
