import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'

const Channel = (props) => {
    // const [channel, setChannels] = useState([]);


       return (
        
        //  <h2>{props.channel.name}</h2>
        //  <h2>{props.channel.description}</h2>

        < Segment stacked>
            <List.Item>
            <List.Content floated='right'>
                <Button color='teal' floated='right' size='large'>Follow</Button>
            </List.Content>
            
            <List.Content>
                <Image avatar src='https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop' />
                <Header as='h2'>
                {props.channel.name}
                </Header>
            </List.Content>
            <List.Content>
                <Header as='h3'>
                {props.channel.description}
                </Header >
            </List.Content>
            </List.Item>
            </Segment>
        )
}



export default Channel