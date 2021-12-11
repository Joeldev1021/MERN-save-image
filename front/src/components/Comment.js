const Comment = ({ comment }) => {
  console.log(comment);
  return (
        <div className="card-body border-top py-4">
        <p className="card-text">
          {comment.comment}
        </p>
      </div>
  );
};

export default Comment;
