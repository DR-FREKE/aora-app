import { account } from '../appwrite';

/** function to create a signin session for a user */
export const signIn = async (email: string, password: string) => {
  try {
    // establish a new user session
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error as any);
  }
};
