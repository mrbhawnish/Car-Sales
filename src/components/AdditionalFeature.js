import React from 'react';
import { addFeature } from "../actions/index";
import {connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {console.log("props",props)}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = { addFeature };

export default connect(null, mapDispatchToProps)(AdditionalFeature);
