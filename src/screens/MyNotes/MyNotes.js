import React from "react";
import MainScreen from "./../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import { listNotes } from "../../action/notesActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./../../components/Loading";
import ErrorMessage from "./../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { deleteNoteAction } from "../../action/notesActions";
const MyNotes = () => {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useNavigate();
  const noteDelete = useSelector((state) => state.noteDelete);
  const { success: successDelete } = noteDelete;
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successDelete]);
  const deleteNote = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <div style={{ position: "relative", top: "100px" }}>
      <MainScreen title={`Welcome Back ${userInfo.name}..`}>
        <Link to="/createnote">
          <Button style={{ margin: "5px" }}>Create Your Private Note</Button>
        </Link>
        <Link to="/createpublicnote">
          <Button style={{ margin: "5px" }}>Share With Friend</Button>
        </Link>
        <Link to="/showyourpublicnote">
          <Button>Timeline</Button>
        </Link>
        {error && <ErrorMessage />}
        {loading && <Loading></Loading>}
        {notes?.map((note) => (
          <Accordion defaultActiveKey="1" key={note._id}>
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ marginBottom: "-1 !important" }}>
                  <Card.Header
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>{note.title}</span>
                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteNote(note._id)}
                      >
                        Delet
                      </Button>
                    </div>
                  </Card.Header>
                </Accordion.Header>

                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{note.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
