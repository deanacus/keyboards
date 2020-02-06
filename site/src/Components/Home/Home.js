import React from 'react';
import { Link, navigate } from '@reach/router';
import { Container, Button } from '@deanacus/upstart';

export const Home = () => {
  const handleClick = (path) => navigate(path)
  return (
    <Container size="sm">
      <Button variant="secondary" isRounded handleClick={() => handleClick('/joker')}>Joker</Button>
      <Link to="/riddler">
        <Button isOutline>Riddler</Button>
      </Link>
      <Link to="/penguin">
        <Button isOutline>Penguin</Button>
      </Link>
    </Container>
  )
}