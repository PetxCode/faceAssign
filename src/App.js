import React from "react";
import "antd/dist/antd.css";
import ButtonPros from "./component/ButtonPros";
import HeaderHolder from "./component/Header/HeaderHolder";
import Body from "./component/Body/Body";

const App = () => {
  return (
    <div>
      <HeaderHolder />

      <div>
        <Body />
      </div>
    </div>
  );
};

export default App;

// <div
// style={{
//   display: "flex",
//   justifyContent: "center",
// }}
// >
// <div
//   style={{
//     display: "flex",
//     justifyContent: "space-around",
//     width: "300px",
//     marginTop: "100px",
//   }}
// >
//   <ButtonPros
//     text="Sign In"
//     bgr="red"
//     press={() => {
//       console.log("Sign In");
//     }}
//   />
//   <ButtonPros
//     text="Sign Up"
//     bgr="blue"
//     press={() => {
//       console.log("Sign Up");
//     }}
//   />
//   <ButtonPros
//     text="Sign Out"
//     bgr="tomato"
//     press={() => {
//       console.log("Sign Out");
//     }}
//   />
// </div>
// </div>
