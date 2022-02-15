import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//const UserItem = (props) => {
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //could or couldn't use constructor for state
  /* state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  }; */

  //render() {
  // const { login, avatar_url, html_url } = props.user;
  //instead of passing props we could do this as well called destructuring.
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
  // }
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  //for prop types object
};

export default UserItem;
