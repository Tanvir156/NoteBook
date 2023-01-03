import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createAnnouncmentAction } from "../../action/announcmentAction";
const Announcment = () => {
  const [session, setSession] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [etime, setEtime] = useState("");
  const [stime, setStime] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [corx, setCorx] = useState("");
  const dispatch = useDispatch();
  const setAnnouncment = useSelector((state) => state.setAnnouncment);
  const { loading, error, note } = setAnnouncment;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const name = `${userInfo.name}`;
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (session === "2019-20" && key == "123") {
      dispatch(
        createAnnouncmentAction(
          name,
          session,
          course,
          date,
          stime,
          etime,
          message,
          corx
        )
      );
      history("/showshedule2019");
    } else {
      console.log("no allowed");
    }
  };

  useEffect(() => {}, []);

  return (
    <div style={{ position: "relative", top: "60px" }}>
      <div className="main-content">
        <nav
          className="navbar navbar-top navbar-expand-md navbar-dark"
          id="navbar-main"
        >
          <div className="container-fluid">
            <div className="col-xl-8 order-xl-1" style={{ width: "100%" }}>
              <div className="card bg-secondary shadow">
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <h6 className="heading-small text-muted mb-4">
                      Announcement
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label for="standard-select1">Session</label>
                            <div class="select">
                              <select
                                id="standard-select1"
                                value={session}
                                onChange={(e) => setSession(e.target.value)}
                              >
                                <option value="Option 1">select</option>
                                <option value="2020-21">2020-2021</option>
                                <option value="2019-20">2019-20</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                              </select>
                              <span class="focus"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label for="standard-select1">For</label>
                              <div class="select">
                                <select
                                  id="standard-select1"
                                  value={corx}
                                  onChange={(e) => setCorx(e.target.value)}
                                >
                                  <option value="Option 1">select</option>
                                  <option value="class">Class</option>
                                  <option value="Mid-term">Mid-term</option>
                                  <option value="Assignment">Assignment</option>
                                  <option value="Presentation">
                                    Presentation
                                  </option>
                                </select>
                                <span class="focus"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="standard-select">Course Code </label>
                            <br></br>
                            <div class="select">
                              <select
                                id="standard-select"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                              >
                                <option value="Option 1">select</option>
                                <option value="Option 2">Option 2</option>
                                <option value="EEE-101">EEE-101</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                              </select>
                              <span class="focus"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label for="dateofbirth">Select Date</label>
                            <br></br>
                            <input
                              type="date"
                              name="dateofbirth"
                              id="dateofbirth"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label for="appt">Start Time</label>
                          <br></br>

                          <input
                            type="time"
                            id="appt"
                            name="appt"
                            required
                            value={stime}
                            onChange={(e) => setStime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label for="appt">End Time</label>
                          <br></br>

                          <input
                            type="time"
                            id="appt"
                            name="appt"
                            required
                            value={etime}
                            onChange={(e) => setEtime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label for="appt">Any Important Message?</label>
                          <br></br>

                          <input
                            type="text"
                            id="appt"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label for="appt">Enter your key</label>
                          <br></br>

                          <input
                            type="number"
                            id="appt"
                            name="appt"
                            required
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <input type="submit" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Announcment;
