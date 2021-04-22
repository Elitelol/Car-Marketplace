import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import UsersRepository from "./../services/api/users";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: "",
      passwordRepeated: "",
      joined: "",
      picture: "",
      pictureEncoded: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    UsersRepository.fetchUser(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFileChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureEncoded: reader.result,
      });
    };
  }

  handleUserUpdate(event) {
    event.preventDefault();
    UsersRepository.updateUser(this);
  }

  deleteUser() {
    // TODO: add some sort of confirmation
    UsersRepository.deleteUser();
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <form onSubmit={this.handleUserUpdate}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              name="username"
              type="email"
              value={this.state.username}
              disabled
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="joined">Join date</label>
            <input
              className="form-control"
              name="joined"
              value={this.state.joined}
              disabled
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="repeated-password">Confirm password</label>
            <input
              className="form-control"
              name="passwordRepeated"
              type="password"
              value={this.state.passwordRepeated}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="picture">Profile picture</label>
            <input
              className="d-flex"
              name="picture"
              type="file"
              onChange={this.handleFileChange}
            ></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
        <button className="btn btn-danger" onClick={this.deleteUser}>
          Delete account
        </button>
      </React.Fragment>
    );
  }
}
