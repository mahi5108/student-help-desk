const { Students } = require("../models/student");

const getLogin = async (req, res) => {
  try {
    if (!req.cookies.student && !req.cookies.admin) res.render("login");
        if (req.cookies.student) {
      res.redirect(`/helpdesk/${req.cookies.student}`);
    } else if (req.cookies.admin) {
      res.redirect(`admin/${admin}`);
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

const userLogin = async (req, res) => {
  try {
    const { rollno, password } = req.body;
    const result = await Students.findOne({ rollno });
    if (!result) throw "Student not found.";
    if (result.password != password) throw "Password do not match.";

    res.cookie("student", result._id);

    return res.redirect(`/helpdesk/${result._id}`);
  } catch (err) {
    return res.json({ error: err });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { adminPass, username } = req.body;
    if (username != "1234" || adminPass != "1234")
      throw "Check your credentials";

    res.cookie("admin", username);
    res.redirect(`/admin/${username}`);
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = {
  getLogin,
  userLogin,
  adminLogin,
};
