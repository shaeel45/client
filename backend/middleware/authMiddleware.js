import jwt from 'jsonwebtoken';
import User from '../models/Users';
import dotenv from 'dotenv';

dotenv.config();

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized", error: err.message });
    }
  } else {
    res.status(401).json({ message: "No token found" });
  }
};

export { protect };