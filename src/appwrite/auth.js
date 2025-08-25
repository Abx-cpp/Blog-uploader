import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            // Use ID.unique() to generate a valid userId
            const userAccount = await this.account.create(ID.unique(), email, password, name); 
            if (userAccount) {
                const session = await this.login({email, password});
                return session;
            } else {
                return null;
            }
        } catch (error) {
            throw new Error(`AuthService :: createAccount :: ${error.message}`);
        }
    }

    async login({email, password}) {
        try {
            // Ensure correct method and return session
            const session = await this.account.createSession(email, password);
            return session;
        } catch (error) {
            throw new Error(`AuthService :: login :: ${error.message}`);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService

