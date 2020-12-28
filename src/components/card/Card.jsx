import React from 'react';

export const Card = props => {
  let CatName = props.cat.name;

  return (
    <div className='container-card'>
      <img
        alt='cat'
        src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}
      />

      <h2>Name: {CatName.charAt(0).toUpperCase() + CatName.slice(1)}</h2>
    </div>
  );
};
