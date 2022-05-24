import axios from '../../../../libs/axiosSetUp';

class PostService {

  async get(url='', queryParams='') {
    const posts=  await axios.get(`${url}${queryParams}`);
    return posts.data;
  }
}

export default new PostService();
