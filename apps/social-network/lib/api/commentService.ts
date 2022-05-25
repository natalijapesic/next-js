import axios from '../../../../libs/axiosSetUp';

class CommentService {
  async get() {
    const comments = await axios.get(`/comments`);
    return comments.data;
  }

  async getByPostId(url = '', queryParams = '') {
    const comments = await axios.get(`${url}${queryParams}`);
    return comments.data;
  }
}

export default new CommentService();
