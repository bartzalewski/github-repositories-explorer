import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import UserList from './components/users/UserList/UserList';
import { connect } from 'react-redux';
import * as reactStore from './store/actions/actions';
import ShowUser from './components/ShowUser/ShowUser';
import Button from './components/Button/Button';

const Container = styled.main`
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 320px;
  height: 524px;
  background: #fff;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 340px) {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const Input = styled.input`
  background: #f1f1f1;
  border: 2px solid #e3e3e3;
  padding-left: 15px;
`;
const Result = styled.div``;

function App(props: any) {
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    props.submitForm(e, props.username);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    props.handleUsername(e);
  };

  return (
    <Container>
      <GlobalStyle />
      <Form onSubmit={handleSubmitForm}>
        <label>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Enter username"
            name="search"
            id="search"
          />
        </label>
        <Button />
        {props.grabbedData ? (
          <Result>
            <ShowUser />
            <UserList users={props.users} />
          </Result>
        ) : null}
      </Form>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    username: state.username,
    grabbedData: state.grabbedData,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleUsername: (e: any) => dispatch(reactStore.handleUsername(e)),
    submitForm: (e: any, username: any) =>
      dispatch(reactStore.submitForm(e, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
