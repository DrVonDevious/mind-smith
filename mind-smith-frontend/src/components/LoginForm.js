import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './LoginForm.css'

const LoginForm = (props) => {

  const login = (e) => {
    let form = e.target
    e.preventDefault()
    // Testing
    props.users.find(user => user.username === e.target[0].value) 
      ? console.log("found")
      : console.log("not found")
    // fetch()
  }

  return (
    <Grid className="login" textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column className="modal-content" style={{ maxWidth: 450 }}>
        <div  onClick={props.handleCloseOverlay}>
          <i class="close icon" style={{fontSize: "2em", zIndex: 4}}></i>
        </div>
        <Header as='h2' color='teal' textAlign='center'>
          {/* <Image src='/logo.png' />  */}
          Log-in to your account
        </Header>
        <Form size='large' onSubmit={login}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User name' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button  color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm
