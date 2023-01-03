import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Shedule2019.css";
import { AnnouncmentListActionOwn } from "./../../action/announcmentAction";

const ShowMyAnnouncement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AnnouncmentListActionOwn());
  }, [dispatch]);
  const readAnnouncementown = useSelector((state) => state.readAnnouncementown);
  const { notes } = readAnnouncementown;

  useEffect(() => {
    dispatch(AnnouncmentListActionOwn());
  }, [dispatch]);
  return (
    <div style={{ position: "relative", top: "100px" }}>
      <div className="hheading">
        <h1 className="hheading__title">Your Announcment</h1>
      </div>
      {notes?.reverse().map((note) => (
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

export default ShowMyAnnouncement;
