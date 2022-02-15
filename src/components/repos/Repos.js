import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
//when declaring REpos.proptypes p should be small otherwise you can't render the value

export default Repos;
