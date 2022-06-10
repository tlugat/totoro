const express = require("express");
const { passport, passportAdmin } = require("utils/session");
const controller = require("./controller");
const { path } = require("utils/enum.json");
const { upload } = require("utils/storage");

exports.router = (function () {
	const UsersRouter = express.Router();

	UsersRouter.get("/", [
		passport,
		async function (req, res) {
			controller.getUsers(res, req.query);
		},
	]);

	UsersRouter.get("/:id", [
		passport,
		async function (req, res) {
			const id = req.params.id;
			controller.getUser(res, id);
		},
	]);

	UsersRouter.put("/:id", [
		passport,
		async function (req, res) {
			const id = req.params.id;
			const data = req.body;
			controller.updateUser(res, id, data);
		},
	]);

	UsersRouter.delete("/:id", [
		passportAdmin,
		async function (req, res) {
			const id = req.params.id;
			controller.deleteUser(res, id);
		},
	]);

	UsersRouter.put("/change/password", [
		passport,
		async function (req, res) {
			const data = req.body;
			data.id = req.userData.id;
			controller.resetPassword(res, data);
		},
	]);


	UsersRouter.put("/change/avatar", [passport, upload(path.avatar).single("avatar"), async function (req, res) {
		const id = req.userData.id;
		const data = {};
		if (req.file) {
			data.file = req.file;
			data.path = path.avatar;
		}

		controller.updateAvatar(res, id, data);
	}]);

	UsersRouter.get("/:id/favorites", [
		passport,
		async function (req, res) {
			const id = req.params.id;
			controller.getFavorites(res, id);
		},
	]);

	UsersRouter.post("/:id/favorites", [
		passport,
		async function (req, res) {
			const data = req.body;
			data.user_id = req.params.id;
			controller.createFavorite(res, data);
		},
	]);

	// Jobs
	UsersRouter.get("/:id/jobs", [
		passport,
		async function (req, res) {
			const id = req.params.id;
			controller.getUserJobs(res, id, req.query);
		},
	]);

	// Litigations
	UsersRouter.get("/:id/litigations", [
		passport,
		async function (req, res) {
			const id = req.params.id;
			controller.getUserLitigations(res, id, req.query);
		},
	]);

	return UsersRouter;
})();
