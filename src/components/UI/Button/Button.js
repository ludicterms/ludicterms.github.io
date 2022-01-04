import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.path} className={props.className} style={props.style} onClick={props.onClick}>
      {props.buttonName}
    </Link>
  );
};

export default Button;
