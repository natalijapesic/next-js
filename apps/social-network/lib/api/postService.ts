import { ParsedUrlQuery } from 'querystring';
import axios from '../../../../libs/axiosSetUp';

class PostService {
  async getPage(url = '', queryParams = '') {
    const posts = await axios.get(`${url}${queryParams}`);
    return posts.data;
  }

  async getOne(postId: ParsedUrlQuery) {
    const posts = await axios.get(`/posts/${postId}`);
    return posts.data;
  }
}

export default new PostService();
