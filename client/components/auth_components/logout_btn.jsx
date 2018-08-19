import React from 'react';
import { logout } from '../../actions/session';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const logoutBtn = (props) => {
  return (
    <button onClick={props.logout}>
      Logout
    </button>
  );
};


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(logoutBtn)
);
