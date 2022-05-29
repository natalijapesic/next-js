interface CommentProps {
  date: string;
  authorName?: string;
  description: string;
}

const Comment = (comment: CommentProps) => {
  return (
    <article className="w-80">
      <span>{comment.date}</span>
      <div>
        <p>
          <span className="font-bold mx-5 text-white">{comment.authorName.charAt(0).toUpperCase() + comment.authorName.slice(1)}:</span>
          {comment.description}
        </p>
      </div>
    </article>
  );
};

export default Comment;
