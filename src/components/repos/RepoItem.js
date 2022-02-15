import React from "react";
import PropTypes from "prop-types";

//need to pass ({repo }) like this or else we will not be able to render the value
const RepoItem = ({ repo }) => {
  console.log("repo name is", repo.name);
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
