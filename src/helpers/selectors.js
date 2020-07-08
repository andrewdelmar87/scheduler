export function getAppointmentsForDay(state, day) {
  const specDays = state.days.filter(e => e.name === day);

  const finalAppointments = [];

  for (const appointment in state.appointments) {

    if (specDays[0]) {
      if (specDays[0].appointments.includes(state.appointments[appointment].id)) {
        finalAppointments.push(state.appointments[appointment])
      }
    }

  }

  return finalAppointments;
}