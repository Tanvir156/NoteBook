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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  listPublicNotesOwn,
  deletePublicNoteAction,
} from "./../../action/publicNoteAction";
import { Button } from "react-bootstrap";
const ShowOwnPublic = () => {
  const dispatch = useDispatch();
  const publicNoteList = useSelector((state) => state.publicNoteList);
  const { notes } = publicNoteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const deletPublicNote = useSelector((state) => state.deletPublicNote);
  const { success: successDelete } = deletPublicNote;
  const history = useNavigate();
  useEffect(() => {
    dispatch(listPublicNotesOwn());
  }, [dispatch, history, userInfo, successDelete]);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePublicNoteAction(id));
    }
  };
  return (
    <div style={{ position: "relative", top: "100px" }}>
      {notes?.reverse().map((note) => (
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MDBCardTitle style={{ fontWeight: "bold" }}>
                {note.name}
              </MDBCardTitle>
              <Button variant="danger" onClick={() => deleteNote(note._id)}>
                Delet
              </Button>
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
    </div>
  );
};

export default ShowOwnPublic;
