import React from 'react';
import { Card, Grid, Header, Image, Label, Popup } from 'semantic-ui-react'

const Leader = props => {
  const { place, user } = props;

  const getLabelForPlace = place => {
    if (place > 3) {
      return null;
    }
    const placeMap = {
      0: { color: 'gold', placeInWords: '1st' },
      1: { color: 'silver', placeInWords: '2nd' },
      2: { color: 'bronze', placeInWords: '3rd' }
    };
    return <Popup content={`${placeMap[place].placeInWords} Place`}
      trigger={<Label corner='left' icon='trophy' id={placeMap[place].color} />} />
  }

  return (
    <Card centered fluid>
      <Grid celled='internally' verticalAlign='middle'>
        <Grid.Row>

          <Grid.Column width={3}>
            <Image src={ user.avatarURL } alt={ user.name } size='large' circular />
          </Grid.Column>

          <Grid.Column width={9} textAlign='center'>
            <Header>
              {user.name}
            </Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={13} textAlign='left'>
                  Answered Questions
                </Grid.Column>
                <Grid.Column width={3} textAlign='right'>
                  {Object.keys(user.answers).length}
                </Grid.Column>
                <Grid.Column width={13} textAlign='left'>
                  Created Questions
                </Grid.Column>
                <Grid.Column width={3} textAlign='right'>
                  {user.questions.length}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column width={4}>
            <Card centered>
              <Card.Content header='Score' textAlign='center' style={{ backgroundColor: '#f3f4f5' }}/>
              <Card.Content textAlign='center'>
                <Label circular color='teal' size='big'>
                  {Object.keys(user.answers).length + user.questions.length}
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {getLabelForPlace(place)}
    </Card>
  )
}

export default Leader;