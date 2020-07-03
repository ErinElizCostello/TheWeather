import React from 'react';
import TheIncident from './theIncident';

const TheLog = (props) => {
    return (
      props.incident.map((e) => (
        <div><TheIncident e={e} /><br /></div>))
    );
}

export default TheLog