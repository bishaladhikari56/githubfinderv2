import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import { About } from "./components/pages/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // foo = () => "Bar";
  //const [users, setUsers] = useState([]);
  //const [user, setUser] = useState({}); ///this is fpr object
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);
  /* state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }; */

  /* async componentDidMount() {
    this.setState({
      loading: true,
    });
    //can use fetch api or axios to access the data
    //can add async and const res = await axios.get('')
    //the we can just do this without .then method
    const res = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //.then((res) => console.log(res.data));
    this.setState({
      users: res.data,
      loading: false,
    });

    console.log(res.data);
  } */
  //search github users

  //get single Github user
  /* const getUser = async (username) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("user data is", res.data);

    setUser(res.data);
    setLoading(false);
  }; */

  //getUser's repo
  /* const getUserRepos = async (username) => {
    setLoading(true);
    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log("repos is", res.data);

    setRepos(res.data);
    setLoading(false);
  }; */
  //clear users from state

  /* const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }; */

  //set Alert
  /*  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    //set the time so alert goes away.
    setTimeout(() => setAlert(null), 5000);
  }; */

  //return React.createElement('div', {className: 'App'},
  //React.createElement('h1',null, 'Hello from React'));

  /* const name = "John Doe";
    const loading = false;

    const showName = false; */
  /* if (loading) {
      return <h4>Loading...</h4>;
    } */
  //showName && name //only show name if showName is true
  //const foo = () => "Bar";
  //const numbers = [1, 2, 3, 4];
  // const { users, loading, user, repos } = this.state;
  //working version of return until routing comes to play
  /*  return (
      <div className='App'>
        <Navbar title='Github-Finder' />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    ); */

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github-Finder' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                  /* render={(props) => (
                    <Fragment>
                      <Search
                      //searchUsers={searchUsers}
                      //clearUsers={clearUsers}
                      //showClear={users.length > 0 ? true : false}
                      // setAlert={showAlert}
                      />
                      ,
                      <Users />
                    </Fragment>
                  )} */
                />
                <Route exact path='/about' component={About} />

                <Route
                  exact
                  path='/user/:login'
                  /* render={(props) => (
                  <User
                   // {...props}
                    // getUser={getUser}
                   // getUserRepos={getUserRepos}
                    // user={user}
                    //repos={repos}
                    //loading={loading}
                  /> 
                  
                  
                )}*/
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
//could use <Route exact path='/about' element={<><About />, <Home /></>} /> in react router dom v6
//...props will only pass the props if anything on the props changes //any extra props we have
//... called spread operator
export default App;
