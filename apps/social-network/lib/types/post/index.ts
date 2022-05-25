import { PostModel } from './post';

export type PostState = {
  posts: PostModel[];
  status: string;
  error: string | undefined;
  searchParam: string;
};

export type LikeModel = {
  likedPost: PostModel;
  userId: number;
};
