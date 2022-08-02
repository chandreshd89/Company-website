import buttonStyle from "./button.module.css";

function ButtonArrow(props) {
  const { className = "", startIcon = "" } = props;

  return (
    <button className={`${buttonStyle.circle} ${className}$ `}>
      {startIcon ? startIcon : null}
    </button>
  );
}

export default ButtonArrow;
