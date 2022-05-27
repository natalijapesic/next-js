interface CommentProps {
  date: string;
  authorName?: string;
  description: string;
}

const Comment: React.FC<CommentProps> = (comment: CommentProps) => {
  return (
    <article className="flex flex-col border-l-4 m-6">
      <span>{comment.date}</span>
      <div>
        <p>
          <span>{comment.authorName}:</span>
          {comment.description}
        </p>
      </div>
    </article>
  );
};

export default Comment;
