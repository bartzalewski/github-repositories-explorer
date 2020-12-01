import React from 'react';
import styled from 'styled-components';
import RepoSummary from '../RepoSummary/RepoSummary';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default function RepoList({ repos }: { repos: any }) {
  return (
    <Container>
      {repos &&
        repos.map((repo: any) => {
          return <RepoSummary repo={repo} key={uuidv4()} />;
        })}
    </Container>
  );
}
