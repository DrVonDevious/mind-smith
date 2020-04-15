import React, { useState , useEffect } from 'react';
import { Button, Image, List ,Segment, Header} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Channel = (props) => {
    // const [channel, setChannels] = useState([]);
    const followChannel = (channel) => {
        fetch("http://localhost:3000/subscriptions",{
            method: "POST",
            headers:{"Content-Type": "application/json",  Accept: "application/json"},
            body:JSON.stringify({
                subscription:{
                    user_id: props.currentUser.id,
                channel_id: channel.id
                }
             })
        }).then(res => res.json())
        .then(sub => console.log(sub))
    }


       return (
        
        //  <h2>{props.channel.name}</h2>
        //  <h2>{props.channel.description}</h2>

        // < Segment stacked>
        //     <List.Item>
        //     <List.Content floated='right'>
        //         <Button onClick={()=>followChannel(props.channel)}color='teal' floated='right' size='large'>Follow</Button>
        //     </List.Content>
            
        //     <List.Content>
        //         <Image avatar src='https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop' />
        //         <Header  onClick={()=>{ props.changePage("channelPosts"); props.setChannel(props.channel)} } as='h2'> 
        //             <a>{props.channel.name}</a>
        //         </Header>
        //     </List.Content>
        //     <List.Content>
        //         <Header as='h3'>
        //         {props.channel.description}
        //         </Header >
        //     </List.Content>
        //     </List.Item>
        //     </Segment>

            // {/* <!-- Channel --> */}
            <div className="post" style={{boxShadow: "0 3px 6px #5ac2b9"}}>
                <div className="wrap-ut pull-left">
                    <div className="userinfo pull-left">
                        <div className="avatar"><img src={props.channel.img} alt="" /></div>
                    </div>
                    <div className="posttext">
                        <h2 ><Link to={`/channelPosts/${props.channel.id}`} >{props.channel.name}</Link></h2>
                        <p>{props.channel.description}</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                
                    <div className="comments">
                        <div className="commentbg">
                            {props.channel.posts.length} posts
                            <div className="mark"></div>
                        </div>
                    </div>
             
                        <Button onClick={()=>followChannel(props.channel)}color='teal' floated='right' size='large'>Follow</Button>  
          
                <div className="clearfix"></div>
            </div>
//   {/* <!-- Channel --> */}
        
        )
}



export default Channel
