import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formUser = this.state;
    this.props.createNewUser(formUser)
      .then(() => this.props.history.push('/messages'));
  }

  render() {
    return (
      <div className='session-form'>
        <form>
          <h1>Sign up</h1>
          <p>Enter your <strong>email address</strong>, <strong>display name</strong>, and <strong>password</strong></p>

          <input
            type='text'
            placeholder='name@example.com'
            value={this.state.email}
            onChange={this.handleInput('email')}
          /><br />

          <input
            type='text'
            placeholder='sms number'
            value={this.state.phoneNumber}
            onChange={this.handleInput('phoneNumber')}
          /><br />

          <input
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleInput('password')}
          /><br />

          <button onClick={this.handleSubmit}>Continue <strong>&#x2192;</strong></button>
        </form>
      </div>
    );
  }
}

export default Signup;