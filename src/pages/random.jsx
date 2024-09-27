import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render");
    return <div>
      <class2/>
      <class3/>
    </div>;
  }
}
export default Parent;