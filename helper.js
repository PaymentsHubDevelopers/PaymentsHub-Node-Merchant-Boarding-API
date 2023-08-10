const axios = require('axios');

const CLIENT_ID = <client-id>;
const CLIENT_SECRET = <client-secret>;
const API_AUTH_URL = "https://enrollment-api-auth.paymentshub.com"; // The Sandbox Authentication URL
const API_SANDBOX_URL = "https://enrollment-api-sandbox.paymentshub.com"; // The Sandbox Enrollment API URL


class authHelper{
    
    constructor(){

    }

    /*
    * Get Auth Token
    */
    static async getAuthToken(){

        try{
            return await axios.post(API_AUTH_URL + '/oauth/token', {
                grant_type: "client_credentials",
                scope: "all",
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            });
            
        } 
        catch (error) {
            console.error("Error");
            throw error;
        }
    }



}

exports.authHelper = authHelper;
