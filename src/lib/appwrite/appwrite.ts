import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const appWriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1', // hosted version of appwrite...appwrite is complete open source though. you can also do a self hosting of your service.
  platform: 'com.drfreke.aora',
  projectId: '66ecbc310022b003d425',
  databaseId: '66ecc3ca002df7192975',
  userCollectionId: '66ecc460003b20041ef4',
  videoCollectionId: '66ecc4c40007f5b7295b',
  storageId: '66ecc920000c4cc5b037',
};

// initialize the appwrite react native sdk
export const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // set the endpoint of the appwrite service
  .setProject(appWriteConfig.projectId) // set the project id
  .setPlatform(appWriteConfig.platform); // set the platform

export const account = new Account(client);
export const avatar = new Avatars(client); // for users avartar display
export const db = new Databases(client);
