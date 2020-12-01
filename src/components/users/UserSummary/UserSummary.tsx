import React, { useState } from 'react';
import styled from 'styled-components';
import IconTickUp from '../../icons/IconTickUp/IconTickUp';
import IconTickDown from '../../icons/IconTickDown/IconTickDown';
import RepoList from '../../repos/RepoList/RepoList';
import * as reactStore from '../../../store/actions/actions';
import { connect } from 'react-redux';

const Container = styled.li`
  background: #f2f2f2;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span,
  svg,
  rect {
    pointer-events: none;
  }
`;

function UserSummary(props: any) {
  const [show, setShow] = useState(false);

  const handleShow = (e: any) => {
    setShow(!show);
    props.chooseUsername(e, e.target.querySelector('span').textContent);
  };

  return (
    <>
      <Container onClick={handleShow}>
        <span>{props.user}</span>
        {show === false ? <IconTickDown /> : <IconTickUp />}
      </Container>
      {show === true ? <RepoList repos={props.repos} /> : null}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    repos: state.repos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    chooseUsername: (e: any, username: any) =>
      dispatch(reactStore.chooseUsername(e, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSummary);
