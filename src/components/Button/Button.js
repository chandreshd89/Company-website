import buttonStyle from "./button.module.css";

function Button(props) {
  const { text = "", className = "", startIcon = "" } = props;
  return (
    <button className={`${buttonStyle.button} ${className}`}>
      {text}
      {startIcon ? startIcon : null}
    </button>
  );
}

export default Button;
