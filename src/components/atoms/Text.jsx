import React from 'react';
import './Text.css'

function Text(props) {
  return <h1 id="title">{props.children}</h1>;
}

export default Text;
