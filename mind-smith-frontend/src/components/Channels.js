import React, { useState , useEffect } from 'react';
import Channel from './Channel'
import { List , Button ,Card } from 'semantic-ui-react'
import CreateChannelForm from './CreateChannelForm'


const Channels = (props) => {
    const [showcreatechannel, setShowcreatechannel] = useState(false);

    const handleChannelCreate = (e) =>{
      let form = e.target
      e.preventDefault()
      let  channel = {
          name: form[0].value,
          description: form[1].value
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
          props.onCreateChannel(channel)
          setShowcreatechannel(false)
       })
    }

     return (
      //  <div classNameName ="col-lg-8 col-md-8">
         

      //    <br/>
      //    <br/>

      //    <Card fluid >
      //      <List divided verticalAlign='middle'>
      //        {props.channels.map(channel => <Channel setChannel={props.setChannel} changePage={props.changePage} currentUser={props.currentUser}  channel={channel}/>)}
      //      </List>
      //    </Card>
      //  </div>
      <div className="col-lg-8 col-md-8">
        { props.currentUser
             ? showcreatechannel ? <CreateChannelForm handleChannelCreate={handleChannelCreate} /> :<Button onClick={()=>setShowcreatechannel(true)}color='teal' floated='right' size='large'>Create a new channel</Button>
             : null
         }
       <br/>
       <br/>

        {props.channels.map(channel => <Channel setChannel={props.setChannel} changePage={props.changePage} currentUser={props.currentUser}  channel={channel}/>)}
       </div>


    );
}



export default Channels
