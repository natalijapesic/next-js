import axios from '../../../../libs/axiosSetUp';
import { PostModel } from '../types/post/post';

class PostService {
  async get() {
    const posts = await axios.get(`/posts`);
    return posts.data;
  }
  async getPage(url = '', queryParams = '') {
    const posts = await axios.get(`${url}${queryParams}`);
    return posts.data;
  }

  async getOne(postId) {
    const posts = await axios.get(`/posts/${postId}`);
    return posts.data;
  }

  async add(newPost: PostModel) {
    const response = await axios.post<PostModel>(
      '/posts',
      JSON.stringify(newPost)
    );
    return response.status === 201 ? true : false;
  }
}

export default new PostService();
