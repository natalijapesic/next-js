import Image from 'next/image';

interface IProps {
  id: number;
  title: string;
  image: string;
  date: string;
}

const Post: React.FC<IProps> = (post: IProps) => {
  return (
    <div className="flex-col  bg-gray-800 my-5">
      <div className="flex-col m-5">
        <Image src={post.image} alt="Post image" width={300} height={300} />
        <p className="text-2xl text-white font-mono">{post.title}</p>
        <p className="text-sm text-slate-200 font-mono">{post.date}</p>
      </div>
    </div>
  );
};

export default Post;
