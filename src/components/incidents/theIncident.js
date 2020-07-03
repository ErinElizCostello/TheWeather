import React from 'react';

const TheIncident = (props) => {
  return (
    <div>
      <div>
        <div>{props.e.who}</div>
        <div>{props.e.what}</div>
        <div>{props.e.when}</div>
        <div>{props.e.where}</div>
        <div>{props.e.why}</div>
        <br />
      </div>
      <br />
    </div>
  );
}

export default TheIncident;