import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  //if we don't use arroow function then we need to bind the function like this one
  /* const onChange = (e) => {
    //this.setState({[e.target.name]:e.target.value});
    this.setState({
      text: e.target.value,
      name: e.target.name,
    });

  }; */
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.text);
    //creating a props function that saves the text from search bar to send it to app component

    if (text === "") {
      // alert("Please enter something");
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      //clearing our states once we clicked the search button.
      //setState({ text: "", name: "" });
      setText("");
    }
  };

  // const { showClear, clearUsers } = this.props;
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users..'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
