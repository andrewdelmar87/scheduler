import React from "react";
import "components/InterviewerListItem.scss";

let classNames = require('classnames');

export default function InterviewerListItem(props) {

  // let  = classNames("interviewers", {
    
  // });

    return (
      <li className="{props.name}">
        <img
          className="{}"
          src="https://i.imgur.com/LpaY82x.png"
          alt="Sylvia Palmer"
        />
        Sylvia Palmer
      </li>
   )
}