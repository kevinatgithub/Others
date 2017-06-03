import React from 'react';
import PropTypes from 'prop-types';

const MyBox = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Sed sapiente accusantium iste error ipsam vel velit</p>
      {props.children && <div style={{ margin: '1em' }} >{props.children}</div>}
    </div>
  );
};

MyBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MyBox;
