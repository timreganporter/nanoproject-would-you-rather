import React, { Component } from 'react';
import { Button, Card, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

class QuestionListItem extends Component {
  render() {
    const { question, asker } = this.props;

    return (
      <Card centered fluid>
        <Header block size='large' textAlign='center'>
          { asker.name } asks:
        </Header>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={ asker.avatarURL } alt={ asker.name } size='large' circular />
            </Grid.Column>
            <Grid.Column width={10} centered textAlign='center'>
              <Header as='h2'>Would you rather...</Header>
              <Segment textAlign="center">
                <TextTruncate line={1} truncateText="..." text={question.optionOne.text} />
                <Divider horizontal>or</Divider>
                <TextTruncate line={1} truncateText="..." text={question.optionTwo.text} />
              </Segment>
              <Button as={Link} basic primary to={`/questions/${question.id}`} style={{ marginTop: "1.3rem" }}>
                Take Poll
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id] || null;
  const asker = question ? users[question.author] : null;
  return { question, asker }
}

export default connect(mapStateToProps)(QuestionListItem);