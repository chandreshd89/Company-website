function Card(props) {
  return (
    <>
      <div>
        <img src={props.img} alt={props.title} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </>
  );
}

export default Card;
