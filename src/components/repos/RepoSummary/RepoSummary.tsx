import React from 'react';
import styled from 'styled-components';
import IconStar from '../../icons/IconStar/IconStar';

const Link = styled.a`
  text-decoration: none;
  color: #000;
  width: 92.5%;
  margin: 5px 0;

  :first-of-type {
    margin-top: 0px;
  }

  :last-of-type {
    margin-bottom: 10px;
  }
`;
const Container = styled.div`
  background: #e0e0e0;
  padding: 10px 5px 40px;
`;
const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
`;
const StarsText = styled.p`
  margin: 0 0.4rem 0 0;
  font-weight: 700;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Description = styled.p`
  margin: 0;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export default function RepoSummary({ repo }: { repo: any }) {
  return (
    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <Container>
        <Flex>
          <Title>{repo.name}</Title>
          <Stars>
            <StarsText>{repo.stargazers_count}</StarsText>
            <IconStar />
          </Stars>
        </Flex>
        <Description>{repo.description}</Description>
      </Container>
    </Link>
  );
}
