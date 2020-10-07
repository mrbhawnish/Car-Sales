import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      {console.log(props)}
    </div>
  );
};

export default Total;
