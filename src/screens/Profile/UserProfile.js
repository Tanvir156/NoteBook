import React from "react";
import "./UserProfile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
const UserProfile = () => {
  const [userDetails, setUserDetails] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    fetch(`https://feelfreetopost-api.onrender.com/api/users/userprofile`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUserDetails(result);
      }, []);
  });

  return (
    <div style={{ position: "relative", top: "60px" }}>
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </head>

      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <img src={userDetails.pic} alt="" />

                <h1>{userDetails.name}</h1>
                <p>{userDetails.email}</p>
              </div>

              <ul className="nav nav-pills nav-stacked">
                <li>
                  <Link to="/updateprofile">
                    <Button>Update Profile</Button>
                  </Link>
                  <Link to="/showyourpublicnote">
                    <Button>Posts</Button>
                  </Link>
                  <Link
                    to="/showyourannouncement"
                    style={{ paddingTop: "10px" }}
                  >
                    <Button>Announcement</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              <div className="bio-graph-heading">
               How was your day?Leave a message for me!
              </div>
              <div className="panel-body bio-graph-info">
                <h1>Info</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>Institude</span>: {userDetails.institude}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Session</span>: {userDetails.session}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Department</span>: {userDetails.department}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Roll </span>: {userDetails.roll}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Email </span>: {userDetails.email}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>: {userDetails.mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
