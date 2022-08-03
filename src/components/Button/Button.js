import buttonStyle from "./button.module.css";

function Button(props) {
  const { textBtn = "", className = "", startIcon = "" } = props;
  return (
    <button
      className={`${buttonStyle.button} ${className} ${buttonStyle.blank} ${buttonStyle.bkgWhite}`}
    >
      {textBtn}
      {startIcon ? startIcon : null}
    </button>
  );
}

export default Button;
