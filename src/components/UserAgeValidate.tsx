import React, { Component, ChangeEvent } from 'react';

interface State {
  input: string;
  userAge: string;
}

class UserAgeValidate extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: '',
      userAge: '',
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      input: e.target.value,
      userAge: '',
    });
  }

  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">Enter to Continue</h1>
                <input
                  type="number"
                  className="form-control mb-3"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.submit}
                >
                  Submit
                </button>
                {this.state.userAge === '' ? null : (
                  <div className="text-center mt-3">
                    {this.state.userAge >= '18' ? (
                      <button className="btn btn-success">You May Enter</button>
                    ) : (
                      <button className="btn btn-danger">You Shall Not Pass</button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAgeValidate;
