const express = require("express");
const router = new express.Router();

const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postHomeController = require("../controllers/postHome");
const adminController = require("../controllers/admin");

router.route("/login").get(authController.getLogin).post(authController.userLogin);
router.route('/adminLogin').post(authController.adminLogin);

router.route("/helpdesk/:id").get(homeController.getStudentHome)
router.route("/helpdesk/:id/reappear").get(homeController.getReappear).post(postHomeController.reappear)
router.route("/helpdesk/:id/bonafide").get(homeController.getBonafide).post(postHomeController.bonafide)
router.route("/helpdesk/:id/character").get(homeController.getCharacter).post(postHomeController.character)
router.route("/helpdesk/:id/degree").get(homeController.getDegree).post(postHomeController.degree)
router.route("/helpdesk/:id/dmc").get(homeController.getDmc).post(postHomeController.dmc)
router.route("/helpdesk/:id/idcard").get(homeController.getIdcard).post(postHomeController.idcard)
router.route("/helpdesk/:id/migration").get(homeController.getMigration).post(postHomeController.migration)
router.route("/helpdesk/:id/transcript").get(homeController.getTranscript).post(postHomeController.transcript)
router.route("/helpdesk/:id/fee_payment_verification").get(homeController.getFeePaymentVerification)
router.route("/helpdesk/:id/fee_related_issue").get(homeController.getFeeRelatedIssue)
router.route("/helpdesk/:id/exam_notifications").get(homeController.getExamNotifications)
router.route("/helpdesk/:id/exam_cutlist").get(homeController.getExamCutlist)

router.route("/admin/:id").get(adminController.getHistory);


module.exports = router;
