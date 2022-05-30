import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  title: string;
  image: string;
  date: string;
  authorName: string;
}

const Post = (post: IProps) => {
  const title =
    post.title.length > 12 ? `${post.title.substring(0, 12)}..` : post.title;
  return (
    <Link key={post.id} href={`/posts/${post.id}`} passHref>
      <div className="rounded-lg bg-gray-800">
        <Image
          className="rounded-t-lg"
          src={`https://picsum.photos/seed/${post.id}/200/300`}
          alt="Post image"
          width={300}
          height={200}
        />
        <p className="ml-2 text-xl text-white font-mono">{title}</p>
        <div className="flex justify-between">
          <p className="m-3 text-sm text-slate-300 font-mono">{post.date}</p>
          <p className="m-3 text-sm text-slate-300 font-mono">
            {post.authorName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
