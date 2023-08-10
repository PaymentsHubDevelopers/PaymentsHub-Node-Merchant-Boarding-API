const axios = require('axios');
const {authHelper} = require('./helper');
const { v4: uuidv4 } = require('uuid');

const API_SANDBOX_URL = "https://enrollment-api-sandbox.paymentshub.com"; // The Sandbox Enrollment API URL

class applicationController{

    constructor(){

    }

    /*
    * Create a new application
    */
    static async createApplication(request, response, next) {
            const accessToken = await authHelper.getAuthToken(); // Get Access Token
            const applicationKey = uuidv4(); // Generate Application Key

            let requestBody = {
                "agent": parseInt(request.body.agentId),
                "applicationName": request.body.appName,
                "externalKey": applicationKey,
                "plan": {
                  "planId": parseInt(request.body.planId)
                },
                "principals": [
                    {
                        "istreet": request.body.principals.istreet,
                        "city": request.body.principals.city,
                        "state": request.body.principals.state,
                        "zipCode": request.body.principals.zipCode,
                        "firstName": request.body.principals.firstName,
                        "lastName": request.body.principals.lastName,
                        "socialSecurityNumber": request.body.principals.socialSecurityNumber,
                        "driverLicenseNumber": request.body.principals.driverLicenseNumber,
                        "driverLicenseIssuedState": request.body.principals.driverLicenseIssuedState,
                        "dateOfBirth": request.body.principals.dateOfBirth,
                        "phoneNumber": request.body.principals.phoneNumber,
                        "email": request.body.principals.email,
                        "equityOwnershipPercentage": parseInt(request.body.principals.equityOwnershipPercentage),
                        "title": request.body.principals.title,
                        "isPersonalGuarantor": Boolean(request.body.principals.isPersonalGuarantor)
                    }
                ]
            };

            

            // Authorization Header
            let config = {
                headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
            };

            // HTTP Request
            axios.post(API_SANDBOX_URL + '/enroll/application', requestBody, config)
            .then((result) => {
                response.json(result.data.data);
            }).catch((error) => {
                response.json(error.response.data);
            });
    }

    /*
    * Send application to merchant
    */
    static async sendApplication(request, response, next) {
            const accessToken = await authHelper.getAuthToken(); // Get Access Token
            
            // Authorization Header
            let config = {
                headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
            };
            
            
            // HTTP Request
            axios.put(API_SANDBOX_URL + '/enroll/application/merchant/send/key/' + request.body.externalKey, {}, config)
            .then((result) => {
                response.json(result.data.data);
            })
            .catch((error) => {
                response.json(error.response.data);
            });
    }

    /*
    * Submit application
    */
    static async submitApplication(request, response, next) {
            const accessToken = await authHelper.getAuthToken(); // Get Access Token
            
            // Authorization Header
            let config = {
                headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
            };
            
            // HTTP Request
            axios.put(API_SANDBOX_URL + '/enroll/application/submit/' + request.body.externalKey, {}, config)
            .then((result) => {
                response.json(result.data.data);
            })
            .catch((error) => {
                response.json(error.response.data);
            });
    }



    /*
    * Update an existing application
    */
    static async updateApplication(request, response, next) {
            const accessToken = await authHelper.getAuthToken(); // Get Access Token

            let requestBody = {
                "agent": parseInt(request.body.agentId),
                "applicationName": request.body.appName,
                "plan": {
                  "planId": parseInt(request.body.planId)
                },
                "principals": [
                    {
                        "istreet": request.body.principals.istreet,
                        "city": request.body.principals.city,
                        "state": request.body.principals.state,
                        "zipCode": request.body.principals.zipCode,
                        "firstName": request.body.principals.firstName,
                        "lastName": request.body.principals.lastName,
                        "socialSecurityNumber": request.body.principals.socialSecurityNumber,
                        "driverLicenseNumber": request.body.principals.driverLicenseNumber,
                        "driverLicenseIssuedState": request.body.principals.driverLicenseIssuedState,
                        "dateOfBirth": request.body.principals.dateOfBirth,
                        "phoneNumber": request.body.principals.phoneNumber,
                        "email": request.body.principals.email,
                        "equityOwnershipPercentage": parseInt(request.body.principals.equityOwnershipPercentage),
                        "title": request.body.principals.title,
                        "isPersonalGuarantor": Boolean(request.body.principals.isPersonalGuarantor)
                    }
                ]
            };

            

            // Authorization Header
            let config = {
                headers: { Authorization: `Bearer ${accessToken.data.access_token}` }
            };

            // HTTP Request
            axios.patch(API_SANDBOX_URL + '/enroll/application/key/' + request.body.externalKey, requestBody, config)
            .then((result) => {
                response.json(result.data.data);
            }).catch((error) => {
                response.json(error.response.data);
            });
    }

    
} 

module.exports = applicationController;
