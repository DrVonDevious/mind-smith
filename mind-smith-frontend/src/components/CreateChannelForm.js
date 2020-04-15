import React from 'react'
import { Form , Button, Card } from 'semantic-ui-react'




const CreateChannelForm = (props) => (
<Card fluid >
  <Form onSubmit={(e)=>props.handleChannelCreate(e)}>
    <Form.Input
      fluid
      label='Channel name'
      placeholder='Channel name'
      
    />
    <Form.Input
      fluid
      label='Channel descreption'
      placeholder='Channel descreption'
    />
    <Form.Input
      fluid
      label='Channel picture url'
      placeholder='Picture URL'
    />
    <Form.Checkbox
      label='I agree to the Terms and Conditions'
      
    />
     <Button color='teal'  size='large' type='submit'>Submit</Button>
  </Form>
</Card>
)



export default CreateChannelForm