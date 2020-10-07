import React from 'react';
import { connect } from "react-redux";
import { delFeature } from "../actions/index";

const AddedFeature = props => {
  return (
    <li>
      {console.log("delete props", props)}
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.delFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { delFeature })(AddedFeature);
