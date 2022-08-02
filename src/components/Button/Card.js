import cardStyle from "./card.module.css";

function Card(props) {
  return (
    <>
      <div className={` ${props.className}`}>
        <img src={props.img} alt={props.title} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </>
  );
}

export default Card;
