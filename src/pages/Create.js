import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'

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
    variant="contained" >
      Submit
    </Button>

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
