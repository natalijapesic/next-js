import axios from '../../../../libs/axiosSetUp';
import { CommentModel } from '../types/comment';

class CommentService {
  async get() {
    const comments = await axios.get(`/comments`);
    return comments.data;
  }

  async getByPostId(url = '', queryParams = '') {
    const comments = await axios.get(`${url}${queryParams}`);
    return comments.data;
  }

  async add(newComment: CommentModel) {
    const response = await axios.post<CommentModel>(
      '/comments',
      JSON.stringify(newComment)
    );
    return response.status === 201 ? true : false;
  }
}

export default new CommentService();
