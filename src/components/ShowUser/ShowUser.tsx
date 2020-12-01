import React from 'react';
import { connect } from 'react-redux';

const ShowUser = (props: any) => {
  return (
    <p>
      Showing users for: <q>{props.username}</q>
    </p>
  );
};

const mapStateToProps = (state: any) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps, null)(ShowUser);
