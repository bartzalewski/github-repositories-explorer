import React from 'react';
import styled from 'styled-components';
import UserSummary from '../UserSummary/UserSummary';

const Container = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export default function UserList({ users }: { users: any }) {
  return (
    <Container>
      {users &&
        users.map((user: any) => {
          return <UserSummary user={user} key={user} />;
        })}
    </Container>
  );
}
