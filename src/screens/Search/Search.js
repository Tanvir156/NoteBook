import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Search = () => {
  const [user, setUser] = useState("");
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    fetch(`https://feelfreetopost-api.onrender.com/api/users/userlist`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      }, []);
  });
  const getId = (id) => {};
  return (
    <div
      style={{
        position: "relative",
        top: "100px",
      }}
    >
      <div className="search">
        <form>
          <input
            type="text"
            placeholder=" Search People"
            name="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      {Object.values(user)
        ?.filter((filterName) =>
          filterName.name.toLowerCase().includes(q.toLowerCase())
        )
        .map((users, index) => (
          <div onClick={() => getId(users._id)}>
            <Link
              to={"/showprofile/search/" + users._id}
              key={users._Id}
              style={{
                textDecoration: "none",
                top: "15px",
                position: "relative",
                color: "black",
                fontFamily: " Helvetica",
                marginLeft: "5px",
              }}
            >
              {users.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Search;
