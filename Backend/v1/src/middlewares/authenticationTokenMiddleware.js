const JWT = require("jsonwebtoken");

const authenticationTokenMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization = req.headers.authorization || '';
    const token = authHeader.split(" ")[1]

    if (token === null || token === undefined) {
        return res.status(401).json({error: 'No token provided'});
    }
    JWT.verify(token, "onetothreeonetothree1", (err, user) => {
        if (err) return res.status(403).json({error: err});

        req.user = user?._doc;
        next();
    })
}

module.exports = authenticationTokenMiddleware;