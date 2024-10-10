import { Query } from 'react-native-appwrite';
import { account, appWriteConfig, db } from '../appwrite';

// function to get the current signed in user
export const getCurrentUser = async () => {
  try {
    //get user account from appwrite
    const current_account = await account.get();

    if (!current_account) throw Error; // if account is not found, throw error

    // if account exists, get the user from the user table or document
    const current_user = await db.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      [Query.equal('accountId', current_account.$id) as any] // specify the query i.e how you want to get it
    );

    if (!current_user) throw Error; // if this user does not exist

    return current_user.documents[0];
  } catch (error) {
    console.log(error);
  }
};
