import React, { useState , useEffect } from 'react';
import Channel from './Channel'
import { List , Button ,Card } from 'semantic-ui-react'
import CreateChannelForm from './CreateChannelForm'





const Channels = (props) => {
    const [channels, setChannels] = useState([]);
    const [showcreatechannel, setShowcreatechannel] = useState(false);


    useEffect(() => {
        // Update the document title using the browser API
       fetch("http://localhost:3000/channels")
       .then(res => res.json())
       .then(channels => setChannels(channels))
       }, [])



       const handleChannelCreate = (e) =>{
         let form = e.target
        e.preventDefault()
       let  channel= {
            name: e.target[0].value,
            description: e.target[1].value
        }
        console.log(channel)
        fetch("http://localhost:3000/channels",{
            method:"POST",
            headers:{"Content-Type": "application/json",  Accept: "application/json"
        },
            body:JSON.stringify(channel)
        })
        .then(res => res.json())
        .then(channel=> 
          {
            setChannels([...channels , channel])
            setShowcreatechannel(false)
         })
      }

       return (
         <div class="col-lg-8 col-md-8">
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
           {showcreatechannel? <CreateChannelForm handleChannelCreate={handleChannelCreate} /> :<Button onClick={()=>setShowcreatechannel(true)}color='teal' floated='right' size='large'>Create a new channel</Button>}
          <Card fluid >
          <List divided verticalAlign='middle'>
          {channels.map(channel => <Channel  channel={channel}/>)}
         </List>
         </Card>
         </div>
         
      );
}



export default Channels