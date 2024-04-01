import "./Background.css";
import Typewriter from "./Typewriter";

const Background = () => {
  return (
    <div class="word">
      <h1>
        <pre>
          {" "}
          <Typewriter
            text={"Hello!\nMy Name is\nWaqar Ul-Hassan"}
            delay={110}
            infinite
          />{" "} // meow
        </pre>
      </h1>
    </div>
  );
};

export default Background;
