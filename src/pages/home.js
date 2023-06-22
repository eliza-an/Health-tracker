import Button from "../components/button/button";
import "./home.css";
import "../button.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h2>Nothing changes if nothing changes.</h2>
          <h1>Take the next step.</h1>
          <h3>
            The most effective way to change your habits is to focus not on what
            you wish to achieve, but who you wish to become. Your identity
            emerges out of your habits. Every action is a vote for the type of
            person you wish to become
            <br></br>~ James Clear
          </h3>
          <Button
            className="FirstButton"
            text="Start Tacking your habits today"
          ></Button>
        </div>
        <div className="image">
          <img
            className="firstImage"
            src="first.jpg"
            alt=" a person at a computer. Only hands with a mug and some notebooks"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
