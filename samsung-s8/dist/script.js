function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /*
  Inspired by: "OTP"
  By: Yogesh Shetty
  Link: https://dribbble.com/shots/3896416-OTP
*/


const { Component } = React;
const numberPads = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'];
const dot = '·';

class LockScreen extends Component {constructor(...args) {super(...args);_defineProperty(this, "numberClicked",

    event => {
      this.props.addNumber(event.target.textContent);
    });}

  render() {
    let password = [...this.props.pin];

    while (password.length < 4) password.push(dot);

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      // <img src="./../../HeroBiz/lgarin211.github.io/logo.png" alt="">
      // add img
      React.createElement("div", { class: "header" }, /*#__PURE__*/
      React.createElement("img", { src: "./../../HeroBiz/lgarin211.github.io/logo.png" })), /*#__PURE__*/
      React.createElement("div", { class: "info" }, /*#__PURE__*/
      React.createElement("p", null, "Enter the OTP CODE"), /*#__PURE__*/
      React.createElement("p", null, "and send it to 888-999-9999")), /*#__PURE__*/


      React.createElement("div", { class: "password" },
      password.map(p => /*#__PURE__*/React.createElement("span", null, p))), /*#__PURE__*/


      React.createElement("ul", { class: "numbers" },

      numberPads.map((number) => /*#__PURE__*/
      React.createElement("li", { onClick: this.numberClicked },

      number)), /*#__PURE__*/



      React.createElement("li", { onClick: this.props.removeNumber }, /*#__PURE__*/
      React.createElement("svg", { class: "backspace", x: "0px", y: "0px", width: "612px", height: "612px", viewBox: "0 0 612 612" }, /*#__PURE__*/
      React.createElement("path", { d: "M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561 c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7 l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z" })))), /*#__PURE__*/






      React.createElement("button", { class: "submit",
        disabled: this.props.pin.length < 4,
        onClick: this.props.open }, "SUBMIT")));





  }}



class SuccessScreen extends Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "info-success" }, /*#__PURE__*/
      React.createElement("img", { src: "./../../HeroBiz/lgarin211.github.io/logo.png" }), /*#__PURE__*/

      React.createElement("p", { class: "info-header" }, "SUCCESS!"), /*#__PURE__*/
      React.createElement("p", { class: "info-text" }, "SIMPELKAN AYOK"), /*#__PURE__*/
      React.createElement("p", { class: "info-text" }, "JOIN NOW")), /*#__PURE__*/


      React.createElement("button", { class: "close", onClick: this.props.close }, "CLOSE")));


  }}



class App extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      shouldLock: true,
      pin: [] });_defineProperty(this, "open",


    () => {
      this.setState({ shouldLock: false });
    });_defineProperty(this, "close",

    () => {
      this.setState({
        shouldLock: true,
        pin: [] });

    });_defineProperty(this, "removeNumber",

    () => {
      let newPin = this.state.pin;
      newPin.splice(-1, 1);
      this.setState({ pin: newPin });
    });_defineProperty(this, "addNumber",

    number => {
      if (this.state.pin.length >= 4 || number === '') return;

      this.setState({
        pin: [...this.state.pin, number] });

    });}

  render() {
    return (
      this.state.shouldLock ? /*#__PURE__*/
      React.createElement(LockScreen, { pin: this.state.pin, addNumber: this.addNumber, removeNumber: this.removeNumber, open: this.open }) : /*#__PURE__*/
      React.createElement(SuccessScreen, { close: this.close }));

  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('.screen'));