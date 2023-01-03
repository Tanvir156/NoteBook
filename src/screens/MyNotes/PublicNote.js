import React from "react";
import { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import "./PublicNote.css";
import {
  listPublicNotes,
  navigateProfile,
} from "./../../action/publicNoteAction";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PublicNote = () => {
  const dispatch = useDispatch();
  const publicNoteList = useSelector((state) => state.publicNoteList);
  const { notes } = publicNoteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const publicNoteCreate = useSelector((state) => state.publicNoteCreate);
  const { success: successCreate } = publicNoteCreate;

  const history = useNavigate();
  useEffect(() => {
    dispatch(listPublicNotes());
  }, [dispatch, history, userInfo, successCreate]);

  const getId = (id) => {
    dispatch(navigateProfile(id));
  };

  return (
    <div style={{ position: "relative", top: "100px" }}>
      {notes?reverse().map((note) => (
        <MDBCard
          className="mb-3"
          key={note._id}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            width: "500px",
            margin: "auto",
          }}
        >
          <MDBCardBody>
            <MDBCardTitle
              style={{ fontWeight: "bold", display: "flex" }}
              onClick={() => getId(note._id)}
            >
              <Link
                to={
                  note._id !== userInfo._id
                    ? "/showprofile/" + note._id
                    : "/profile"
                }
                style={{ textDecoration: "none" }}
              >
                <img className="Image" src={note.shortImage} alt="" />
              </Link>

              <Link
                to={
                  note._id !== userInfo._id
                    ? "/showprofile/" + note._id
                    : "/profile"
                }
                style={{
                  textDecoration: "none",
                  top: "15px",
                  position: "relative",
                  color: "black",
                  fontFamily: " Helvetica",
                  marginLeft: "5px",
                }}
              >
                {note.name}
              </Link>
            </MDBCardTitle>
            <MDBCardText>{note.caption}</MDBCardText>
          </MDBCardBody>

          <MDBCardImage
            style={{
              width: "300px",
              objectFit: "cover",
              margin: "auto",
            }}
            src={note.pic}
          />
          <MDBCardText>
            <small className="text-muted">
              {note.createdAt.substring(0, 10)}
            </small>
          </MDBCardText>
        </MDBCard>
      ))}
    </div>
  );
};

export default PublicNote;
