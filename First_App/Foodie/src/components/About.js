import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          Welcome to Foodie, your ultimate destination for convenient and
          delicious online food ordering. We understand the hustle and bustle of
          daily life, which is why we've crafted a seamless platform to satisfy
          your cravings with just a few taps on your device. At Foodie, we
          strive to redefine the way you experience food delivery.
        </p>
        {/* <User /> */}
        <UserClass name={""} />
      </div>
    );
  }
}

export default About;
