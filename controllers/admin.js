const { Bonafide } = require("../models/bonafide");
const { Character } = require("../models/character");
const { Degree } = require("../models/degree");
const { Dmc } = require("../models/dmc");
const { Idcard } = require("../models/idcard");
const { Migration } = require("../models/migration");
const { Reappear } = require("../models/reappear");
const { Request } = require("../models/request");
const { Transcript } = require("../models/transcript");
const { RequestTypes } = require("../utils/enum");
const {Fee_Related_Issue} = require("../models/fee_related_issue");
const {Fee_Payment_Verification} = require("../models/fee_payment_verification");

function getCollection(type) {
  switch (type) {
    case RequestTypes.Reappear:
      return Reappear;
    case RequestTypes.Character:
      return Character;
    case RequestTypes.Bonafide:
      return Bonafide;
    case RequestTypes.Degree:
      return Degree;
    case RequestTypes.DMC:
      return Dmc;
    case RequestTypes.IdCard:
      return Idcard;
    case RequestTypes.Migration:
      return Migration;
    case RequestTypes.Transcript:
      return Transcript;
      case RequestTypes.Fee_Related_Issue:
        return Fee_Related_Issue;
        case RequestTypes.Fee_Payment_Verification:
        return Fee_Payment_Verification; 
  }
}

const getHistory = async (req, res) => {
  const { type } = req.query;
  console.log(type);

  if (!req.cookies.admin) res.redirect("/login");
  if (type == null) {
    res.render("requesthistory", { data: null });
  } else {
    const Collection = getCollection(type);

    let result = await Request.find({ requestType: type });

    let requests = [];
    for (var i in result) {
      let request = await Collection.findById(result[i].requestId);
      requests.push(request);
    }
    res.render("requesthistory", {
      data: JSON.stringify({ type, data: requests }),
    });
  }
};

module.exports = {
  getHistory,
};
