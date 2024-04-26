import React from 'react';

const Wine = ({ title, description, rating }) => {
  return (
    <div >
      <h2>{title}</h2>
      <p >{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Wine;