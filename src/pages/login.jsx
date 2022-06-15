import React from 'react';
import Form from '../components/form';
import Preview from '../components/preview';

class Login extends React.Component {
  email = 'rbardales@newhorizons.edu.pe';
  render() {
    return (
      <div>
        <Form email={this.email} />
        <Preview email={this.email} />
      </div>
    );
  }
}

export default Login;
