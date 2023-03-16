import React from "react";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./PublicNote.css";
import {
  listPublicNotes,
  navigateProfile,
} from "./../../action/publicNoteAction";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

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
      {notes?.reverse().map((note) => (
        <Card
          style={{
            width: "600px",
            margin: "auto",
            marginBottom: "16px",
          }}
        >
          <Card.Header>
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
            <Card.Title>{note.caption}</Card.Title>
            <img
              src={note.pic}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Card.Header>
          <Card.Body>
            {/* <Card.Text>{subtitle}</Card.Text>
            <Card.Text>
              This is the content of the post. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id.
            </Card.Text> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="link"
                style={{
                  width: "100px",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              >
                <FontAwesomeIcon icon={faHeart} className="me-2" />
              </Button>{" "}
              <Button
                variant="link"
                style={{
                  width: "100px",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              >
                <FontAwesomeIcon icon={faComment} className="me-2" />
              </Button>
              <Button
                variant="link"
                style={{
                  width: "100px",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              >
                <FontAwesomeIcon icon={faShare} className="me-2" />
              </Button>
            </div>
          </Card.Body>
          {/* <Card.Footer></Card.Footer> */}
        </Card>
      ))}
    </div>
  );
};

export default PublicNote;
