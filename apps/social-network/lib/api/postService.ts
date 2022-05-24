import axios from '../../../../libs/axiosSetUp';

class PostService {
  async get() {
    const posts=  await axios.get('/posts');
    return posts.data;
  }
}

export default new PostService();
