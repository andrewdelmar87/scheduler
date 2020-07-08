import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  // const interviewersList = classnames("interviewers", {
  //   "interviewers__list": props.interviewers
  // })

  const Interviewer = props.interviewers.map(interviewer => {
    if (interviewer.id === props.interviewer) {
      return <InterviewerListItem
        key={interviewer.id}
        interviewerId={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    } else {
      return <InterviewerListItem
        key={interviewer.id}
        interviewerId={interviewer.id}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    }
  })

  return <section className={"interviewers"}>
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <div className="interviewers__list"> {Interviewer} </div>
  </section>
}