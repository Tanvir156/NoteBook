import React from "react";
import "./UpdateProfile.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { updateUserProfile } from "../../action/userAction";
const UpdateProfile = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institude, setInstitude] = useState("");
  const [session, setSession] = useState("");
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);
  const [picMessage, setPicMessage] = useState(null);
  const [pic, setPic] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setDepartment] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const updateProfile = useSelector((state) => state.updateProfile);
  const { error, success } = updateProfile;
  const his = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      his("/account");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setInstitude(userInfo.institude);
      setDepartment(userInfo.department);
      setRoll(userInfo.roll);
      setSession(userInfo.session);
      setMobile(userInfo.mobile);
    }
  }, [his, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        name,
        email,
        institude,
        session,
        department,
        roll,
        mobile,
        pic,
      })
    );
    his("/profile");
  };
  const postDetails = (pics) => {
    setLoading(true);
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notebook");
      data.append("cloud_name", "di9t7qtyt");
      data.append("api_key", "398755883287761");
      data.append("api_secret", "2UNvhIpwPLwZ9jSsYMvKAYQDbjA");
      fetch("https://api.cloudinary.com/v1_1/di9t7qtyt/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };
  return (
    <div style={{ position: "absolute", top: "60px" }}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div
              className="d-flex flex-column align-items-center text-center p-3 py-5"
              style={{ userSelect: "none" }}
            >
              <img
                className="rounded-circle mt-5"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                src={userInfo.pic}
                alt=""
              />
              <span className="font-weight-bold">{userInfo.name}</span>
              <span className="text-black-50">{userInfo.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={submitHandler}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email "
                      value={email}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Institude</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter institude"
                      value={institude}
                      onChange={(e) => setInstitude(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Session</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter session"
                      value={session}
                      onChange={(e) => setSession(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Roll</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your id"
                      value={roll}
                      onChange={(e) => setRoll(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Profile Picture</label>
                    <br />
                    <input
                      onChange={(e) => postDetails(e.target.files[0])}
                      id="custom-file"
                      className="form-control"
                      type="file"
                      label="Upload Profile Picture"
                      custom
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  {loading && <Loading />}
                  <input
                    className="btn btn-primary profile-button"
                    type="submit"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
