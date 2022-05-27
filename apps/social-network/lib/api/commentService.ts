import axios from '@libs/axiosSetUp';
import { CommentModel } from '../types/comment';

class CommentService {
  async get(): Promise<CommentModel[]> {
    const comments = await axios.get(`/comments`);
    return comments.data;
  }

  async getByPostId(url = '', queryParams = ''): Promise<CommentModel[]> {
    const comments = await axios.get(`${url}${queryParams}`);
    return comments.data;
  }

  async add(newComment: CommentModel): Promise<CommentModel> {
    const response = await axios.post<CommentModel>(
      '/comments',
      JSON.stringify(newComment)
    );
    return response.data;
  }
}

export default new CommentService();
