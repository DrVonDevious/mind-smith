import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'

const ChannelPosts = (props) => {
    
    

       return (
        <div>
        <h1>{props.channel.name}</h1>
        <p>{props.channel.description}</p>
        <h2>post componant for this channel</h2>
        </div>
        )
}



export default ChannelPosts