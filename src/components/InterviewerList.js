import React from "react";
import "components/InterviewerList.scss";

let classNames = require('classnames');

export default function InterviewerListItem(props) {

  // let  = classNames("interviewers", {
    
  // });

    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">{props.name}</h4>
        <ul className="interviewers__list"></ul>
      </section>
   )
}