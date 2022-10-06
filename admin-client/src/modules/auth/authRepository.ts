import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Observable } from "rxjs";
import { fireabseAuthentication } from "../../config/firebaseConfig";

export interface AuthRepository {
  loggedInUserId: Observable<string | undefined>;
  login(email: string, password: string): Promise<string>;
  logout(): Promise<boolean>;
  sendForgotPasswordEmail(email: string): Promise<void>;
}

export class AuthRepositoryImpl implements AuthRepository {

  loggedInUserId: Observable<string | undefined> = new Observable((subscriber) => {
    fireabseAuthentication.onAuthStateChanged((user) => subscriber.next(user?.uid))
  });

  async login(email: string, password: string): Promise<string> {
    try {
      const credential = await signInWithEmailAndPassword(
        fireabseAuthentication,
        email,
        password
      );
      return credential.user.uid;
    } catch (error) {
      if (error instanceof FirebaseError) {
        const code = error.code;
        if (code === 'auth/user-not-found') {
          throw 'User not found';
        } else if (code === 'auth/wrong-password') {
          throw 'Password is incorrect';
        } else {
          throw error.message;
        }
      }
      throw 'Unknown error occurred';
    }
  }

  async logout(): Promise<boolean> {
    try {
      await signOut(fireabseAuthentication);
      return true;
    } catch (error) {
      return false;
    }
  }

  async sendForgotPasswordEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(fireabseAuthentication, email);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const code = error.code;
        if (code === 'auth/user-not-found') {
          throw 'User not found';
        } else {
          throw error.message;
        }
      }
      throw 'Unknown error occurred';
    }
  }

}