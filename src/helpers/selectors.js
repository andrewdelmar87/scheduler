export function getAppointmentsForDay(state, day) {
  const finalAppointments = [];
  for (const singleDay of state.days){
    if (singleDay.name === day){
      for (const appointment of singleDay.appointments){
          finalAppointments.push(state.appointments[appointment])
      }
    }
  }
  return finalAppointments
};

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  const finalInterview = {
    ...interview,
    interviewer: {
      ...state.interviewers[interview.interviewer]
    }
  };
  return finalInterview;
};

export function getInterviewersForDay(state, day) {
  const finalInterviewers = [];
  for (const singleDay of state.days) {
    if (singleDay.name === day){
      for (const interviewer of singleDay.interviewers) {
        finalInterviewers.push(state.interviewers[interviewer]);
      };
    };
  };
  return finalInterviewers;
};
