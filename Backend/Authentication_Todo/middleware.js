
function authMiddleware(req, res, next) {
   
const token = req.headers.token;

  if (!token) {
    res.status(403).send({
      message: "You are not logged in",
    }); 
    window.location.href = "/login";
  }

  const decoded = jwt.verify(token, "sejal123");
  const username = decoded.username;

  if (!username) {
    res.status(403).json({
      message: "malformed token",
    });
    return;
  }

  req.username = username

  next();
}



module.exports = {
    authMiddleware
}