// Libraries
import faker from "faker";

const Comment = ({ author, time, comment }) => {
  console.log(author, time, comment);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.image()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{time} ago</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
