import React from 'react';

const Featured = ({match}) => {
  const name = match.params.name;
  const topic = match.params.topic;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;