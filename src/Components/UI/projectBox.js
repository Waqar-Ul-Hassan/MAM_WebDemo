import "./projectBox.css";

const ProjectBox = (props) => {
  return (
    <div className="flexBox-container1">
      <div className="project">
        {props.title}
        <a href={props.download} target="_blank">
          <div className="right"></div>
        </a>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default ProjectBox;
