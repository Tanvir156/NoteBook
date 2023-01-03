import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnnouncmentListAction } from "./../../action/announcmentAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Shedule2019.css";
const Shedule2019 = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(AnnouncmentListAction());
  }, [dispatch, history]);
  const readAnnouncment = useSelector((state) => state.readAnnouncment);
  const { loading, error, notes } = readAnnouncment;
  const setAnnouncment = useSelector((state) => state.setAnnouncment);
  const { sucess: sucessCreate } = setAnnouncment;
  useEffect(() => {
    dispatch(AnnouncmentListAction());
  }, [dispatch, history, sucessCreate]);
  // let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
  //   new Date().getDay()
  // ];
  // let date = new Date();
  // const n = 2;
  return (
    <div style={{ position: "relative", top: "100px" }}>
      <div className="hheading">
        <h1 className="hheading__title">Class Schedule</h1>
      </div>
      {notes
        ?.reverse()
        .slice(0, 5)
        .map((note, n) => (
          <div key={note._id}>
            <div classNameName="mmain-container">
              <div className="ccards">
                <div className="ccard ccard-1">
                  <p style={{ fontSize: "25px", color: "#fff" }}>{note.name}</p>
                  Announce a{" "}
                  <p style={{ display: "inline", color: "#aa2d2d" }}>
                    {note.corx}
                  </p>{" "}
                  at{" "}
                  <p style={{ display: "inline", color: "#aa2d2d" }}>
                    {note.date}
                  </p>{" "}
                  from {note.stime} to {note.etime} <br></br> Note:
                  {note.message}
                  <p
                    className="ccard__apply"
                    style={{ fontSize: "14px", color: "white" }}
                  >
                    {note.course}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shedule2019;
