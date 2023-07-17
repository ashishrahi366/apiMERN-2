const jwt = require("jsonwebtoken")

const userAuth = async (req, res, next) => {
    const AuthHeader = req.headers.authorization
    if (!AuthHeader || !AuthHeader.startWith('Bearer')) {
        next("Auth Failed")
    }
    const token = AuthHeader.split(' ')[1]
    try {
        const payload = await jwt.verify(token, process.env.SECRET_KEY)
        req.user = { userId: payload.userId }
        next();
    } catch (err) {
        console.log(err)
        next("Authentication failed")
    }
}

module.exports = userAuth;