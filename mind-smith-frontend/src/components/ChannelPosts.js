import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'
import PostView from './PostView';

const ChannelPosts = (props) => {
    

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        
       fetch(`http://localhost:3000/channels/${props.channel.id}`)
       .then(res => res.json())
       .then(channel => setPosts(channel.posts))
       }, [])

       return (
        <div>
        <h1>{props.channel.name}</h1>
        <p>{props.channel.description}</p>
        <h2>post componant for this channel</h2>
        {posts.map(post =><PostView postId={post.id}/> )}
        </div>
     
        )
}



export default ChannelPosts