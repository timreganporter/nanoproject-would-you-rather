import React from 'react';
import { Button, Card, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

export const QuestionDisplay = ({ question }) => (
  <React.Fragment>
    <Segment textAlign="center">
      <TextTruncate line={1} truncateText="..." text={question.optionOne.text} />
      <Divider horizontal>or...</Divider>
    </Segment>
    <Button as={Link} basic primary to={`/questions/${question.id}`} style={{ marginTop: "1.3rem" }}>
      Take Poll
    </Button>
  </React.Fragment>
)

const QuestionTemplate = ({ asker, children }) => (
  <Card centered fluid>
    <Header block size='large' textAlign='center'>
      { asker.name } asks:
    </Header>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={ asker.avatarURL } alt={ asker.name } size='large' circular />
        </Grid.Column>
        <Grid.Column width={10} textAlign='center'>
          <Header as='h2'>Would you rather...</Header>
          { children }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card>
);

export default QuestionTemplate;