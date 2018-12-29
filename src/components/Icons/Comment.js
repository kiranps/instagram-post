import React from "react";
import PropTypes from "prop-types";

const Comment = ({ onClick, size }) => (
  <svg
    style={{ width: size, height: size, cursor: "pointer" }}
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path
      fill="#757575"
      d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
    />
  </svg>
);

Comment.propTypes = {
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Comment.defaultProps = {
  size: "24px"
};

export default Comment;
