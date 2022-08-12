import "./App.css";
// Libraries
import { v4 as uuid } from "uuid";
// Reusable components
import Comment from "./components/comments/comment";
import ApprovalCard from "./components/ApprovalCard/ApprovalCard";

// Comment Data for mapping
const comments = [
  {
    author: "ABDUL SAGHEER",
    time: "1 day",
    comment: "Stupendous Pic dude😍!!!",
  },
  {
    author: "MUSKAN UNNISA",
    time: "2 weeks",
    comment: "Awesome Pic bro😊!!!",
  },
  {
    author: "MOHAMMED SAQIB AHMED",
    time: "1 week",
    comment: "Kya lag rahe ho bhai😍!!!",
  },
  {
    author: "Umme Sadaf",
    time: "3 hours",
    comment: "Slaying it🔥!!!",
  },
  {
    author: "Aman Kumar Verma",
    time: "36 sec",
    comment: "Bawal bhenchod 😏!!!",
  },
];

function App() {
  return (
    <div className="ui container comments">
      {comments.map((comment) => (
        <ApprovalCard>
          <Comment
            key={uuid()}
            author={comment.author}
            time={comment.time}
            comment={comment.comment}
          />
        </ApprovalCard>
      ))}
    </div>
  );
}

export default App;
