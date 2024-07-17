import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  //console.log("Incoming request:", req.method, req.url);
  const authHeader = req?.headers?.authorization;
  //console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    //console.log("Authentication failed: No authorization header or incorrect format");
    return res.status(401).json({ success: "failed", message: "Authentication failed" });
  }

  const token = authHeader.split(" ")[1];
  //console.log("Token received:", token);

  const parts = token.split('.');
  if (parts.length !== 3) {
    //console.log("Malformed token parts:", parts);
    return res.status(401).json({ success: "failed", message: "JWT malformed" });
  }

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);
    //console.log("JWT Secret Key:", process.env.JWT_SECRET_KEY);
    //console.log("Decoded token:", userToken);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(401).json({ success: "failed", message: "Authentication failed" });
  }
};

export default userAuth;
