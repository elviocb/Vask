var React = require('react');

var Voting = React.createClass({
  voteUp: function(){
    console.log("vote up");
    var isAnswer = !!this.props.answerIndex;
    var answerIndex = this.props.answerIndex;
    var questionId = this.props.questionId;
    this.setState({votes: (this.props.votes + 1)});
    if(isAnswer){
      console.log('vote answer');
      voteQuestion(questionId,1,answerIndex);
    } else {
      console.log('question up vote');
      voteQuestion(questionId,1);
    }
  },
  voteDown: function(){
    console.log("vote down");
    var isAnswer = !!this.props.answerIndex;
    var answerIndex = this.props.answerIndex;
    var questionId = this.props.questionId;
    this.setState({votes: (this.props.votes - 1)});
    if(isAnswer){
      console.log('vote answer');
      voteQuestion(questionId,-1,answerIndex);
    } else {
      voteQuestion(questionId,-1);
    }
  },
  getInitialState: function(){
    return {votes: this.props.votes};
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function(){
    return (<div
              className="media-left voting">
                <IconButton
                  iconClassName="mdi mdi-chevron-up vote-button"
                  tooltip="Vote Up"
                  onClick={this.voteUp} />
                <p
                  className="votes">
                    <span>{this.state.votes}</span>
                </p>
                <IconButton
                  iconClassName="mdi mdi-chevron-down vote-button"
                  tooltip="Vote Down"
                  onClick={this.voteDown} />
            </div>
            );
  }
});

module.exports = Voting;