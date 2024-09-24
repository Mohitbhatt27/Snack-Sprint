// const AboutUs = () => {
//   return <div>AboutUs</div>;
// };

// export default AboutUs;

import React from "react";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Mohitbhatt27");
    const jsonData = await data.json();
    this.setState({
      email: jsonData.type,
      name: "Mohit",
    });
  }

  render() {
    return (
      <>
        <div className="aboutUs">AboutUs</div>
        <div>Email: {this.state.email}</div>
        <div>Avatar: {this.state.name}</div>
      </>
    );
  }
}

export default AboutUs;
