import config from "../config/config";
import {Client, ID, Storage, Databases} from 'appwrite';

export class StorageService{
    client = new Client();
    databases;
    storage;

    constructor(){
        try {
            this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

            this.databases = new Databases(this.client);
            this.storage = new Storage(this.client);
        } catch (error) {
          console.log("StorageService :: constructor :: error", error);
          throw error;  
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
           console.log("StorageService :: uploadFile :: error", error);
           throw error;
        }
    }

    async deleteFile(fileId){
        try {
           return await this.storage.deleteFile(
            config.appwriteBucketId,
            fileId
           );
        } catch (error) {
            console.log("StorageService :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("StorageService :: getFilePreview :: error", error);
            return false; 
        }
    }
}
const storageService = new StorageService();
export default storageService;