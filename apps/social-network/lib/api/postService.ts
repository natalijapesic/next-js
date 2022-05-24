import axios from '../../../../libs/axiosSetUp';

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
}

export default new PostService();
