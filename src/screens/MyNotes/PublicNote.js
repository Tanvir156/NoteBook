import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./PublicNote.css";
import {
  listPublicNotes,
  navigateProfile,
} from "./../../action/publicNoteAction";
import { Flex, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Heading,
  Image,
} from "@chakra-ui/react";
import { BiLike, BiShare, BiChat, BsThreeDotsVertical } from "@chakra-ui/icons";

import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { BsHeart } from "react-icons/bs";
import { FaComment, FaShare, FaEllipsisV } from "react-icons/fa";
import Loading from "./../../components/Loading";
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
      {notes ? (
        <>
          {notes?.reverse().map((note) => (
            <Card maxW="md" style={{ margin: "auto", marginBottom: "20px" }}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Link
                      to={
                        note._id !== userInfo._id
                          ? "/showprofile/" + note._id
                          : "/profile"
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar name="Segun Adebayo" src={note.shortImage} />
                    </Link>

                    <Box>
                      <Heading size="sm">
                        <Link
                          to={
                            note._id !== userInfo._id
                              ? "/showprofile/" + note._id
                              : "/profile"
                          }
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {note.name}
                        </Link>
                      </Heading>

                      <Text> {note.createdAt.substring(0, 10)}</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<FaEllipsisV />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>{note.caption}</Text>
              </CardBody>
              <Image objectFit="cover" src={note.pic} alt="" />

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<BsHeart />}
                  style={{ width: "95px" }}
                >
                  Like
                </Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<FaComment />}
                  style={{ width: "95px" }}
                >
                  Comment
                </Button>
                <Button
                  flex="1"
                  variant="ghost"
                  leftIcon={<FaShare />}
                  style={{ width: "95px" }}
                >
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PublicNote;
