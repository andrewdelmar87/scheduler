export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(e => e.name === day);
  const finalAppointments = [];

  for (const appointment in state.appointments) {

    if (filteredDays[0]) {
      if (filteredDays[0].appointments.includes(state.appointments[appointment].id)) {
        finalAppointments.push(state.appointments[appointment]);
      }
    }

  }
  return finalAppointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewObj = {
    ...interview,
    interviewer: {
      ...state.interviewers[interview.interviewer]
    }
  };
  return interviewObj;
};

export function getInterviewersForDay(state, day) {

  const filteredDays = state.days.filter(e => e.name === day);
  const finalAppointments = [];

  for (const appointment in state.appointments) {
    if (filteredDays[0]) {
      if (filteredDays[0].appointments.includes(state.appointments[appointment].id)) {
        finalAppointments.push(state.appointments[appointment]);
        console.log("state.appointments[appointment]", state.appointments[appointment])
      }
    }
  }
  return finalAppointments;
};