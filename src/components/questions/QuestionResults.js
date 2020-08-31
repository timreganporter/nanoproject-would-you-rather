import React from 'react';
import { Label, Progress, Segment } from 'semantic-ui-react'

const QuestionResults = ({ question, userAnswer }) => {
  const data = {
    optionOne: {
      text: question.optionOne.text,
      votes: question.optionOne.votes.length
    },
    optionTwo: {
      text: question.optionTwo.text,
      votes: question.optionTwo.votes.length
    }
  }
  data.optionOne.color = data.optionOne.votes > data.optionTwo.votes ? "green" : "grey";
  data.optionTwo.color = data.optionOne.votes < data.optionTwo.votes ? "green" : "grey";
  const totalVotes = data.optionOne.votes + data.optionTwo.votes;

  const renderOption = option => (
      <Segment color={data[option].color}>
        {data[option].text}
        <Progress percent={data[option].votes/totalVotes*100} color={data[option].color}>
          {data[option].votes} of {totalVotes} votes
        </Progress>
        {userAnswer === option && (
          <Label color='teal' floating>
            Your Answer
          </Label>
        )}
      </Segment>
  )

  return (
    <React.Fragment>
      {renderOption("optionOne")}
      {renderOption("optionTwo")}
    </React.Fragment>
  )
}


export default QuestionResults;