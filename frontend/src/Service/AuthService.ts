import axios from "axios";
import { ICredentialModel } from "../Models/CredentialModel";
import { loginAction, logoutAction } from "../Redux/AuthState";
import store from "../Redux/Store";
import  config  from "../Utils/Config";



class AuthService {

  public async login(Credentials: ICredentialModel): Promise<void> {
    try {
    //   const response = await axios.post<string>(`${config.baseURL}`+"auth/login",Credentials);
    const response = await axios.post<string>(config.loginURL,Credentials);
      const token = response.data;

      store.dispatch(loginAction(token));

    } catch (err: any) {
        alert(err)
      console.log(err);
    }
  }

  public logout(): void {
    store.dispatch(logoutAction());
  }

  public isLoggedIn(): boolean {
    return store.getState().authState.user !== null;
  }
}

const authService = new AuthService();

export default authService;
