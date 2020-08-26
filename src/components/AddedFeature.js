import React from 'react';
import { deleteFeature } from "../actions/index";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.deleteFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchFromProps = {deleteFeature}

export default connect(null, mapDispatchFromProps)(AddedFeature);
