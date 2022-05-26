import { UserModel } from '../../../lib/types/user';
import axios from '../../../../../libs/axiosSetUp';
import { SignInRequest, SignUpRequest, UserResponse } from '../types';

class AuthService {
  async signIn(request: SignInRequest) {
    const response = await axios.post<UserResponse>(
      '/login',
      JSON.stringify(request)
    );
    return response;
  }

  async signUp(request: SignUpRequest) {
    const newUser = new UserModel(
      request.username,
      request.email,
      request.password
    );
    const response = await axios.post<UserResponse>(
      '/register',
      JSON.stringify(newUser)
    );
    return response;
  }
}

export default new AuthService();
