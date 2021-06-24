import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { spots, reservations, comments } from "../../store/spots";
import { loadReservations } from "../../store/spots";
import LoginFormModal from "../LoginFormModal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ReservationCalendar = ({ spotId, price }) => {
  const dispatch = useDispatch();
  const [calendar, setCalendar] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session?.user);
  const bookings = useSelector((state) => state.spot?.bookings);

  const handleReservation = (e) => {
    e.preventDefault();
    if (!sessionUser) {
      setLoginModal(true);
      return;
    }
    const price = Math.round(
      (calendar[1].getTime() - calendar[0].getTime()) / (1000 * 3600 * 24)
    );
    setErrors([]);
    if (sessionUser.id) {
      return dispatch(
        reservations({
          spotId: spotId,
          userId: sessionUser.id,
          price,
          body: "I'd like to rent your space!",
          startDate: calendar[0],
          endDate: calendar[1],
        })
      ).catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);
      });
    }
  };

  useEffect(() => {
    dispatch(loadReservations(spotId))
      .then(() => console.log(bookings))
      .then(() => setIsLoaded(true));
  }, []);

  // const disableTiles = ({ date, view }) => {
  //   return (
  //     view === "month" && // Block day tiles only
  //     bookings.some(
  //       (disabledDate) =>
  //         date.getFullYear() === disabledDate.getFullYear() &&
  //         date.getMonth() === disabledDate.getMonth() &&
  //         date.getDate() === disabledDate.getDate()
  //     )
  //   );
  // };

  return (
    isLoaded && (
      <div className="calendar-div-container">
        <div className="calendar-div">
          <form onSubmit={handleReservation} style={{ padding: "20px" }}>
            <div className="house-price">
              <span style={{ fontWeight: "bold" }}>${price}</span>
              /night
            </div>
            <Calendar
              style={{ position: "sticky" }}
              // tileDisabled={disableTiles}
              value={calendar}
              onChange={setCalendar}
              selectRange={true}
              maxDetail="month"
              minDate={new Date()}
            />
            {loginModal ? (
              <LoginFormModal name={"Reserve"} classes={"submit-button"}>
                Reserve
              </LoginFormModal>
            ) : (
              ""
            )}
            <button type="submit" className="submit-button">
              Reserve
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ReservationCalendar;
