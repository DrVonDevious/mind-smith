import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './Register.css'

const Register = (props) => {

  const handleRegister = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        username: e.target[0].value,
        password_digest: e.target[1].value,
        bio: "",
        img_url: ""
      })
    })
    //TODO: Fix fetch getting a cors response that wont allow .then()
  }

  return (
    <Grid  className="login" textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column className="modal-content" style={{ maxWidth: 450 }}>
      <div  onClick={props.handleCloseOverlay}>
        <i class="close icon" style={{fontSize: "2em", zIndex: 4}}></i>
      </div>
      <Header as='h2' color='teal' textAlign='center'>
        {/* <Image src='/logo.png' />  */}
        Sign up
      </Header>
      <Form size='large' onSubmit={handleRegister}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='User name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Sign up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
   </Grid>
  )
}

export default Register
