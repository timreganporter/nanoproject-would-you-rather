import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const NotFound = () => (
  <Header as='h1' icon textAlign='center'>
    <Icon name='ban' circular />
    <Header.Content>Not Found</Header.Content>
  </Header>
);

export default NotFound;