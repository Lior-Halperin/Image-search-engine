import jwtDecode from "jwt-decode"; // Allows decoding of the token
import { ICredentialModel } from "../Models/CredentialModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

//1. Vacations State - The global state relate to vacations
export class AuthState {
  public token: string = null;
  public user: ICredentialModel = null;
}



// 2. Action Type
export enum AuthActionType {
  Login = "Login",
  Logout = "Logout",
}

// 3. Action
export interface AuthAction {
  type: AuthActionType;
  payload?: string;
}

// 4. Action Creators
export function loginAction(token: string): AuthAction {
  const action: AuthAction = { type: AuthActionType.Login, payload: token };
  return action;
}

export function logoutAction(): AuthAction {
  const action: AuthAction = { type: AuthActionType.Logout };
  return action;
}

// 5. Reducer
export function authReducer(currentState = new AuthState(),action: AuthAction): AuthState {
  const newState = { ...currentState };

  switch (action.type) {
    case AuthActionType.Login:
      const token = action.payload; // Get token form the backend
      newState.token = token; // Converts the current token to the new token we received from backend.
      newState.user = (jwtDecode(token) as any).user; // Deciphering the token we received, and converting the current user to the user sitting inside the token we received.
      const saveToken = async ()=> await AsyncStorage.setItem('token', token); // Save token in storage!
      saveToken()
      break;
    case AuthActionType.Logout:
      newState.token = null;
      newState.user = null;
      const clearToken = async ()=> await AsyncStorage.removeItem("token"); // Clear token from storage.
      clearToken()
      break;
  }

  return newState;
}
