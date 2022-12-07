const db = require('../db/dbConnection');
const sessionController = {};


userController.postOAuth = async (req, res, next) => {
    try {
        const { token } = await handleOAuth(args.code, args.oauthType);
        return {token};
    } catch (err) {
        console.log('error at postOAuth')
    }
}


module.exports = sessionController;