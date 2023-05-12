const { default: mongoose, mongo } = require("mongoose");
const { Bonafide } = require("../models/bonafide");
const { Character } = require("../models/character");
const { Degree } = require("../models/degree");
const { Reappear } = require("../models/reappear");
const { Request } = require("../models/request");
const { Students } = require("../models/student");
const { RequestTypes } = require("../utils/enum");
const { Dmc } = require("../models/dmc");
const { Migration } = require("../models/migration");
const { Idcard } = require("../models/idcard");
const { Transcript } = require("../models/transcript");

const reappear = async (req, res) => {
  try {
    const { rollno, email, rs, refno, date, choice } = req.body;

    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";

    var course = [];

    for (let i = 1; i <= 8; i++) {
      let name = req.body[`name${i}`];
      let code = req.body[`code${i}`];
      if (name !== "" && code!=="") {
        course.push({ name, code });
      }
    }

    const newReapper = new Reappear({ rollno, email, rs, refno, date, course });
    const result = await newReapper.save();

    const newRequest = new Request({
      requestType: RequestTypes.Reappear,
      studentId: student._id,
      requestId: result._id,
    });

    await newRequest.save();

    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};

const bonafide = async (req, res) => {
  try {
    const { issue, rollno, email, date } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newBonafide = new Bonafide({ rollno, email, issue, date });
    const result = await newBonafide.save();

    const newRequest = new Request({
      requestType: RequestTypes.Bonafide,
      studentId: student._id,
      requestId: result._id,
    });

    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const character = async (req, res) => {
  try {
    const { issue, rollno, email, date } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newCharacter = new Character({ rollno, email, issue, date });
    const result= await newCharacter.save();

    const newRequest = new Request({
      requestType: RequestTypes.Character,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const degree = async (req, res) => {
  try {
    const { rollno, email, date } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newDegree = new Degree({ rollno, email, date });
    const result= await newDegree.save();

    const newRequest = new Request({
      requestType: RequestTypes.Degree,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const dmc = async (req, res) => {
  try {
    const { rollno, email, date } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newDmc = new Dmc({ rollno, email, date });
    const result= await newDmc.save();

    const newRequest = new Request({
      requestType: RequestTypes.DMC,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const migration = async (req, res) => {
  try {
    const { rollno, email, date, issue } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newMigration = new Migration({ rollno, email, issue, date });
    const result = await newMigration.save();

    const newRequest = new Request({
      requestType: RequestTypes.Migration,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const idcard = async (req, res) => {
  try {
    const { rollno, email, date, issue } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newIdcard = new Idcard({ rollno, email, issue, date });
    const result = await newIdcard.save();

    const newRequest = new Request({
      requestType: RequestTypes.IdCard,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};
const transcript = async (req, res) => {
  try {
    const { rollno, email, date, issue } = req.body;
    const student = await Students.findOne({rollno, email});
    if(!student) throw "Incorrect roll no or email.";
    const newTranscript = new Transcript({ rollno, email, issue, date });
    const result = await newTranscript.save();

    const newRequest = new Request({
      requestType: RequestTypes.Transcript,
      studentId: student._id,
      requestId: result._id,
    });
    await newRequest.save();
    res.render("thankyou")
  } catch (err) {
    console.error(err);
    res.json({error: err});
  }
};

module.exports = {
  reappear,
  bonafide,
  character,
  degree,
  dmc,
  migration,
  idcard,
  transcript,
};
