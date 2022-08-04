import Cardstyle from "./card.module.css";

function BlogCard(props) {
  return (
    <>
      <div>
        <div className={` ${props.className} ${Cardstyle.width}`}>
          <img src={props.img} alt={props.title} />
        </div>
        <h4 className={`${Cardstyle.title}`}>
          {props.title}
          <date className={`${Cardstyle.date}`}>{props.date}</date>
        </h4>
        <p className={`${Cardstyle.text}`}>{props.text}</p>
        <div className="flex marL">
          <img
            className={`  ${Cardstyle.managerwidth}`}
            src={props.imgManager}
            alt={props.managername}
          />
          <span className={`${Cardstyle.center}`}>{props.name}</span>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
