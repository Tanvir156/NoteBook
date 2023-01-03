import NavScrollExample from "./components/Header/Header";

import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import PublicNote from "./screens/MyNotes/PublicNote"
import CreateNote from "./screens/CreateNote/CreateNote";
import CreatePublicNote from "./screens/CreateNote/CreatePublicNote";
import ShowOwnPublic from "./screens/MyNotes/ShowOwnPublic";
import NoteForSpecificUser from "./screens/MyNotes/NoteForSpecificUser";
import UserProfile from "./screens/Profile/UserProfile";
import UpdateProfile from "./screens/UpdateProfile/UpdateProfile";
import ShowProfile from "./screens/Profile/ShowProfile";
import Announcment from "./screens/Announcment/Announcment";
import SessionSelect from "./screens/SessionSelect/SessionSelect";
import Shedule2019 from "./screens/ClassShedule/Shedule2019";
import ShowMyAnnouncement from "./screens/Announcment/ShowMyAnnouncement";
import Search from "./screens/Search/Search";
import ShowProfileSearch from "./screens/Profile/ShowProfileSearch";
import MyChats from "./components/MyChats";
import ChatPage from "./screens/Chatpage";

function App() {
  return (
    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route path="/account" element={<LandingPage />} />
        <Route path="/" element={<PublicNote />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/createpublicnote" element={<CreatePublicNote />} />
        <Route path="/showyourpublicnote" element={<ShowOwnPublic />} />
        <Route path="/showyourannouncement" element={<ShowMyAnnouncement />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/showprofile/:userid" element={<ShowProfile />} />
        <Route
          path="/showprofile/search/:userid"
          element={<ShowProfileSearch />}
        />
        <Route path="/announcment" element={<Announcment />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/announcmentforsession" element={<SessionSelect />} />
        <Route path="/showshedule2019" element={<Shedule2019 />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/specificuserpost/:userid"
          element={<NoteForSpecificUser />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
