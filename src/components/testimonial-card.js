import CardStyle from "../components/Button/card.module.css";

function CardTest(props) {
  return (
    <>
      <div className={`${CardStyle.blankCard} `}>
        <p>{props.title}</p>
        <div className="flex ml-1">
          {" "}
          <div className={`${CardStyle.managerimg}`}>
            <img src={props.img} alt={props.name} />
          </div>
          <div>
            <span>
              <strong>{props.name}</strong>
            </span>
            <br />
            <small>{props.manager}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTest;
