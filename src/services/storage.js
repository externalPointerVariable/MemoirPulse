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
            return true;
        } catch (error) {
           throw error;
           return false; 
        }
    }

    async deleteFile(fileId){
        try {
           return await this.storage.deleteFile(
            config.appwriteBucketId,
            fileId
           );
           return true; 
        } catch (error) {
            throw error;
            return falss;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            throw error;
            return false; 
        }
    }
}
const storageService = new StorageService();
export default storageService;