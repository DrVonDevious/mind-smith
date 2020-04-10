import React, { useState , useEffect } from 'react';
import Channel from './Channel'

import { List } from 'semantic-ui-react'


const Channels = (props) => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
       fetch("http://localhost:3000/channels")
       .then(res => res.json())
       .then(channels => setChannels(channels))
       }, [])


       return (
         <div class="col-lg-8 col-md-8">
          <List divided verticalAlign='middle'>
         {channels.map(channel => <Channel  channel={channel}/>)}
         </List>
         </div>
      );
}



export default Channels
