import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color handleClick={props.handleClick} color="red"/> 
          <Color handleClick={props.handleClick} color="pink"/>
          <Color handleClick={props.handleClick} color="blue"/>
          <Color handleClick={props.handleClick} color="green"/>
      </div>
    );
}

export default Menu;