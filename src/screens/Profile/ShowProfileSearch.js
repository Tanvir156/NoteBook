import React from "react";
import "./UserProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { navigateProfile } from "./../../action/publicNoteAction";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./../../components/Loading";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowProfileSearch = () => {
  const { userid } = useParams();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes/own/profile/search/${userid}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      }, []);
  });

  return (
    <div style={{ position: "relative", top: "60px" }}>
      {profile ? (
        <>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                    <img src={profile.pic} alt="" />
                    <h1>{profile.name}</h1>
                    <p>{profile.email}</p>
                  </div>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                  <div className="bio-graph-heading">
                    Aliquam ac magna metus. Nam sed arcu non tellus fringilla
                    fringilla ut vel ispum. Aliquam ac magna metus.
                  </div>
                  <div className="panel-body bio-graph-info">
                    <h1>Info</h1>
                    <div className="row">
                      <div className="bio-row">
                        <p>
                          <span>Institude</span>: {profile.institude}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>Session</span>: {profile.session}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>Department</span>: {profile.department}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>Roll </span>: {profile.roll}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>Email </span>: {profile.email}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>Mobile </span>: {profile.mobile}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={"/specificuserpost/" + userid}
            style={{ textDecoration: "none" }}
          >
            Posts
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ShowProfileSearch;
