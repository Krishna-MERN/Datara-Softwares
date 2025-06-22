
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/applicantsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema for applicant data
const applicantSchema = new mongoose.Schema({
  regNo: String,
  fullName: String,
  email: String,
  phone:  String,
  gender: String,
  dob: String,
  degree: String,
  branch: String,
  passingYear: String,
  grade: String,
  internshipDomain: String,
  resume: String, // File path (assuming local storage for now)
});

const Applicant = mongoose.model("Applicant", applicantSchema);

// Generate registration number
const generateRegNo = async () => {
  const lastApplicant = await Applicant.findOne().sort({ _id: -1 });
  let nextNumber = 1;
  if (lastApplicant) {
    nextNumber = parseInt(lastApplicant.regNo.slice(6)) + 1;
  }
  return `D2402${String(nextNumber).padStart(3, "0")}`;
};

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle form submission
app.post("/submit", upload.single("resume"), async (req, res) => {
  try {
    const regNo = await generateRegNo();
    const newApplicant = new Applicant({
      regNo,
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      dob: req.body.dob,
      degree: req.body.degree,
      branch: req.body.branch,
      passingYear: req.body.passingYear,
      grade: req.body.grade,
      internshipDomain: req.body.internshipDomain,
      resume: req.file.path,
    });

    await newApplicant.save();
    res.json({ success: true, regNo });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));







