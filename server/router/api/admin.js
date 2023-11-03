const express = require("express");
const Admin = require("../../models/Admin");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employee = require("../../models/Employee");
const authenticateToken = require("../../middleware/auth");

adminRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json("please provide username,email and password");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  const hashedPassword = hash;
  const adminObj = {
    username: username,
    email: email,
    password: hashedPassword,
  };
  try {
    const admin = new Admin(adminObj);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    console.log("Admin Not created");
    res.status(401).json(error);
  }
});

adminRouter.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });

  if (!admin) {
    return res.status(401).json("User not found");
  }
  const isValidPassword = await bcrypt.compare(password, admin.password);

  if (!isValidPassword) {
    return res.status(401).json("Wrong Password");
  }

  try {
    const accessToken = await jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1000000d" }
    );
    const refreshToken = await jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1000000d" }
    );
    adminObj = admin.toJSON(admin);
    adminObj["accessToken"] = accessToken;
    adminObj["refreshToken"] = refreshToken;
    res.status(201).json(adminObj.accessToken);
  } catch (error) {
    console.log(error);
    res.status(400).json("User khuje paoa jaccche na");
  }
});

adminRouter.get("/profile", authenticateToken, async (req, res) => {
  try {
    const id = req.user.id
    const admin = await Admin.findById(id);
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong to get admin" });
  }
});

module.exports = adminRouter;
