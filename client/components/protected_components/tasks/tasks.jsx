import React from 'react';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchTasks().then(() => this.setState({loading: false}));
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behaviour: 'smooth' });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask({body: `${this.props.tasks.length + 1}. ${this.state.body}`}).then(
      () => this.setState({
        body: ''
      })
    );
  }


  updateBody (e) {
    this.setState({
      body: e.target.value
    });
  }

  render() {
    if (!this.state.loading) {
      return <div className="tasks-component">
          <form className="task-form" onSubmit={e => this.handleSubmit(e)} className="task-input">
            <input type="text" value={this.state.body} onChange={e => this.updateBody(e)} placeholder="Enter a task..." />
            <input type="submit" value="Send" />
          </form>
          {this.props.tasks.map((task) => {
            return <div className="task-item" key={task.id}>
                <div className="body">
                  <p>{task.body}</p>
                </div>
              </div>;
          })}
          <div ref={el => { this.el = el; }} />
        </div>;
    } else {
      return (
        <div className="loading">
          <p>loading...</p>
        </div>);
    }
  }

}