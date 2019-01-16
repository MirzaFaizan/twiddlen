import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "10px",
    color: "#FFFFFF",
    textDecoration: "none",
    textAlign:'center',
  },
  subtitle: {
    fontSize: "1rem",
    maxWidth: "500px",
    margin: "10px auto 10px",
    textAlign:'center',
    fontWeight: "400",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-20px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
