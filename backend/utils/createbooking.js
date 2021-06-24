/*
This function takes in an end date and start date for a booking
and creates an array of date ranges so the react calendar can block
them out
*/

const createBookings = (start, end, bookings = []) => {
  bookings.push(new Date(start));

  if (
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth() &&
    start.getDate() === end.getDate()
  ) {
    return bookings;
  }
  start.setDate(start.getDate() + 1);
  return createBookings(new Date(start), end, bookings);
};

module.exports = {
  createBookings,
};
