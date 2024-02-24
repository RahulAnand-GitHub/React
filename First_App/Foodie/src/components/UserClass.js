import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "User",
        location: "Default",
        url: "https://dummy.url",
        avatar_url: "https://dummy.photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RahulAnand-Github");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }

  render() {
    const { name, location, url, avatar_url } = this.state.userinfo;
    //destructuring the state variable

    return (
      <div className="user-card">
        <div className="user-card-container">
          <div className="user-card-image-container">
            <img className="user-image" src={avatar_url}></img>
          </div>
          <div className="user-details">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {url}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
