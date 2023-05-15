const { default: mongoose } = require("mongoose");
const { Students } = require("../models/student");

const getStudentHome = async (req, res) => {
  try {
    console.log(req.params.id)
    if (req.cookies.student) {
      const result = await Students.findById(
        new mongoose.Types.ObjectId(req.cookies.student)
      );
      if (!result) {
        req.clearCookie();
        throw "User not found";
      }

      if(req.cookies.student !== req.params.id) {
        return res.redirect(`/helpdesk/${req.cookies.student}`)
      }

      res.render("helpdesk");
    } else res.redirect("/login");
  } catch (err) {
    console.error(err);
  }
};

const getReappear = (req, res) => {
  try {
    res.render("reappear");
  } catch (err) {
    console.error(err);
  }
};
const getBonafide = (req, res) => {
  try {
    res.render("bonafide");
  } catch (err) {
    console.error(err);
  }
};
const getCharacter = (req, res) => {
  try {
    res.render("character");
  } catch (err) {
    console.error(err);
  }
};
const getDegree = (req, res) => {
  try {
    res.render("degree");
  } catch (err) {
    console.error(err);
  }
};
const getDmc = (req, res) => {
  try {
    res.render("DMC");
  } catch (err) {
    console.error(err);
  }
};
const getIdcard = (req, res) => {
  try {
    res.render("idcard");
  } catch (err) {
    console.error(err);
  }
};
const getMigration = (req, res) => {
  try {
    res.render("migration");
  } catch (err) {
    console.error(err);
  }
};
const getTranscript = (req, res) => {
  try {
    res.render("transcript");
  } catch (err) {
    console.error(err);
  }
};
const getFeePaymentVerification = (req, res) => {
  try {
    res.render("fee_payment_verification");
  } catch (err) {
    console.error(err);
  }
};
const getFeeRelatedIssue = (req, res) => {
  try {
    res.render("fee_related_issue");
  } catch (err) {
    console.error(err);
  }
};
const getExamNotifications = (req, res) => {
  try {
    res.render("exam_notifications");
  } catch (err) {
    console.error(err);
  }
};
const getExamCutlist = (req, res) => {
  try {
    res.render("exam_cutlist");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getStudentHome,
  getReappear,
  getBonafide,
  getCharacter,
  getDegree,
  getDmc,
  getIdcard,
  getMigration,
  getTranscript,
  getFeePaymentVerification,
  getFeeRelatedIssue,
  getExamNotifications,
getExamCutlist
};
