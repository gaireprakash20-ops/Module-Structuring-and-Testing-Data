// This code only work when there is only hours not whenn there is minutes.
// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));

//   if (time === "00:00") {
//     return `12:00 am`;
//   }

//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// export { formatAs12HourClock };

// The code which run all the run cases is.
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-3);

  if (hours === 0) {
    return `12${minutes} am`;
  }
  if (hours === 12) {
    return `${time} pm`;
  }
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}${minutes} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
