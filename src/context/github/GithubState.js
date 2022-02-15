import React, { useReducer } from "react";

import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User
  const searchUsers = async (text) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
      ${githubClientId}
      &client_secret=${githubClientSecret}`);
    //console.log("list of users is", res.data);
    /* this.setState({
      users: res.data.items,
      loading: false,
    }); */
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
    //setUsers(res.data.items);
    //setLoading(false);
  };

  //get User
  const getUser = async (username) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=
      ${githubClientId}
      &client_secret=${githubClientSecret}`);
    console.log("user data is", res.data);

    /* setUser(res.data);
    setLoading(false); */
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
      ${githubClientId}
      &client_secret=${githubClientSecret}`);
    console.log("repos is", res.data);

    /* setRepos(res.data);
    setLoading(false); */
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  /*  setUsers([]);
    setLoading(false);
  }; */

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        //must add value in gitub state otherwise will have issue
        //and can't debug it as its not eror we just missed the value
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
