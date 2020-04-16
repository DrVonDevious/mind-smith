import React from 'react'
import { Popup, Card, Image, Rating , Icon,Feed} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import Channel from "./Channel"





const Home= (props) => (


    <div className="col-lg-8 col-md-8" style={{marginTop: "40px"}}>
        <h2>Most popular channels</h2>
        <br/>
       <Card.Group itemsPerRow={4}>
        {props.channels.map(channel => (
            <Card>
                <Image className="imgcard" src={channel.img} ui={false} />
                <Card.Content>
                        <Card.Header><Link to={`/channelPosts/${channel.id}`}> {channel.name} </Link></Card.Header> 
                <Card.Meta>Joined in 2020</Card.Meta>
                <Card.Description>
                    {channel.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Link to={`/channelPosts/${channel.id}`}> 
                    <Icon name='keyboard' />
                    {channel.posts.length}
                </Link>
                </Card.Content>
                </Card>
        ))}
       </Card.Group>
       <br/>
       <hr/>
       <br/>
       <h2>Most active users</h2>
       <br/>
       <Card.Group itemsPerRow={4}>
        {props.users.map(user => (
            <Card>
                <Image className="imgcard" src={user.img_url} ui={false} />
                <Card.Content>
                        <Card.Header> {user.username} </Card.Header> 
                <Card.Meta>Joined in 2020</Card.Meta>
                <Card.Description>
                    {user.bio}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                    <Icon name='user' />
                    {/* {user.posts.length} */}
            
                </Card.Content>
                </Card>
        ))}
       </Card.Group>


       <br/>
       <hr/>
       <br/>
       <h2>Most recent posts</h2>
       <br/>
       <Card.Group itemsPerRow={3}>
        {props.channels.reduce((accum,channel) => accum.concat(channel.posts),[]).map(post => (
            <Card>
                <Image className="imgcard" src={post.img_url} ui={false} />
                <Card.Content>
                        <Card.Header> {post.title} </Card.Header> 
                <Card.Meta>published on: {post.created_at}</Card.Meta>
                <Card.Description>
                    {post.body}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                    <Icon name='book' />
                    {/* {user.posts.length} */}
            
                </Card.Content>
                </Card>
        ))}
       </Card.Group>

       
    </div>
)

export default  Home