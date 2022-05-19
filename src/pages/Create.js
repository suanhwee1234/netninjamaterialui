import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { AcUnitOutlined } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>      
      <Typography
      variant="h6"
      component="h2"
      color='textSecondary'
      gutterBottom
      >
    Create a new note
    </Typography>

    <Button 
    onClick={()=>console.log("you clicked me")}
    type="submit" 
    color="secondary" 
    variant="contained" 
    
    endIcon={<KeyboardArrowRightIcon />}
    >

      Submit
    </Button>
    {/* <br />
    <AcUnitOutlined />
    <AcUnitOutlined color="secondary" fontSize='large' />
    <AcUnitOutlined color="secondary" fontSize='small' />
    <AcUnitOutlined color="action" fontSize='small' />
    <AcUnitOutlined color="error" fontSize='small' />
    <AcUnitOutlined color="disabled" fontSize='small' /> */}

    {/* <Button type="submit">SUBMIT</Button>
    <Button type="submit" color="secondary" variant="outlined">SUBMIT</Button>
    <ButtonGroup color="secondary" variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */}
    </Container>
    
  )
}
