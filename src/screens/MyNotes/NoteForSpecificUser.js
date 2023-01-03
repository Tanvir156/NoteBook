import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./../../components/Loading";
const NoteForSpecificUser = () => {
  const { userid } = useParams();
  const [notes, setNotes] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    fetch(`/api/publicnotes/getnotes/own/profile/posts/${userid}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setNotes(result);
      }, []);
  });

  return (
    <div style={{ position: "relative", top: "100px" }}>
      {notes ? (
        <>
          {notes.reverse().map((note) => (
            <MDBCard
              className="mb-3"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                width: "500px",
                margin: "auto",
              }}
            >
              <MDBCardBody>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <MDBCardTitle style={{ fontWeight: "bold" }}>
                    {note.name}
                  </MDBCardTitle>
                </div>
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default NoteForSpecificUser;
