import React from 'react';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

export default function IconSwitch(props) {
  const { icon } = props;

  const onSwitch = () => {
    props.onSwitch();
  }

  return (
    <div className="set-view">
      <div className="material-icons" onClick={onSwitch}>{icon}</div>
    </div>
  );

}
