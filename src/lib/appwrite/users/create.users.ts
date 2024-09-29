import { ID } from 'react-native-appwrite';
import { account, appWriteConfig, avatar, db } from '../appwrite';
import { signIn } from './signin.users';

/** function to register a user */
export const createUser = async (email: string, password: string, username: string) => {
  try {
    const new_account = await account.create(ID.unique(), email, password, username);

    if (!new_account) throw Error;

    /** if successfully created a new account in the auth section in appwrite, sign the user in or create a session */
    const avatar_url = avatar.getInitials(username);
    await signIn(email, password); //signin the user

    /** when signin/session creation is done, add the user to the user DB table by creating a document
     * to create a document, you need the databaseId, collectionId, documentId (usually unique) and finally the data we need to add to the user table
     */
    const new_user_data = { accountId: new_account.$id, email: new_account.email, username: new_account.name, avatar: avatar_url };
    const new_db_user = await db.createDocument(appWriteConfig.databaseId, appWriteConfig.userCollectionId, ID.unique(), new_user_data);

    return new_db_user;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
};
