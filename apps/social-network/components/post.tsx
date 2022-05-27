import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: number;
  title: string;
  image: string;
  date: string;
}

const Post: React.FC<IProps> = (post: IProps) => {
  const title =
    post.title.length > 10 ? `${post.title.substring(0, 10)}..` : post.title;
  return (
    <Link key={post.id} href={`/posts/${post.id}`} passHref>
      <div className="place-items-center">
        <div className="bg-gray-800">
          <Image src={post.image} alt="Post image" width={300} height={300} />
          <p className="text-2xl text-white font-mono">{title}</p>
          <p className="text-sm text-slate-200 font-mono">{post.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
