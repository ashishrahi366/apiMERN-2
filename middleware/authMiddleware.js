const jwt = require("jsonwebtoken")

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startWith('Bearer')) {
        next("Auth Failed")
    }
    const token = authHeader.split("")[1];
    console.log("jiuxbiwq")
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