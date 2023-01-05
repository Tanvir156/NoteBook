import React from "react";
import "./UserProfile.css";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./../../components/Loading";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChatState } from "./../../Context/ChatProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ShowProfile = () => {
  const { userid } = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [profile, setProfile] = useState(null);
  const [loadingChat, setLoadingChat] = useState(false);
  const histry = useNavigate();
  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();

  useEffect(() => {
    fetch(`https://feelfreetopost-api.onrender.com/api/publicnotes/getnotes/own/profile/${userid}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      }, []);
  });

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`https://feelfreetopost-api.onrender.com/api/chat`, { userId }, config);

      if (chats?.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      histry("/chat");
    } catch (error) {
      console.log(error);
    }
  };

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
                   How was your day?Leave a message for me!
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
          <Button user={user} onClick={() => accessChat(profile._id)}>
            Message
          </Button>
          <Link
            to={"/specificuserpost/" + userid}
            style={{ textDecoration: "none" }}
          >
            Posts
          </Link>
          
          {loadingChat && <Spinner ml="auto" d="flex" />}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ShowProfile;
