import "./App.css";
import faker from "faker";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.image()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            ABDUL SAGHEER
          </a>
          <div className="metadata">
            <span className="date">2 hours ago</span>
          </div>
          <div className="text">An Awesome pic dude!!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
