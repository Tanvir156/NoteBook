import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { createPublicNoteAction } from "../../action/publicNoteAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./../../components/Loading";
function CreatePublicNote({ history }) {
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const name = `${userInfo.name}`;

  const userr = `${userInfo._id}`;
  const shortImage = `${userInfo.pic}`;
  const his = useNavigate();

  const dispatch = useDispatch();

  const publicNoteCreate = useSelector((state) => state.publicNoteCreate);
  const { error, note } = publicNoteCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPublicNoteAction(name, userr, caption, pic, shortImage));

    his("/");
  };

  useEffect(() => {}, []);

  const postDetails = (pics) => {
    setLoading(true);
    setPicMessage("upload your image");
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
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "relative", top: "115px" }}>
      <MainScreen title="Create a Public Note">
        <Card>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading variant="danger">{error}</Loading>}
              <Form.Group controlId="title">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="title"
                  value={caption}
                  placeholder="Enter Your Caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="file"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" variant="primary" loading={loading}>
                Upload
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </MainScreen>
    </div>
  );
}

export default CreatePublicNote;
