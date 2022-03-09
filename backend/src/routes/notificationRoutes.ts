import { Router } from "express";
import notificationController from "../controller/notificationController";
import { isAuthenticated } from "../middlewares/authMiddleware";

const router = Router();

router
  .route("/create")
  .post([isAuthenticated], notificationController.createNewNotification);

router.route("/").get(notificationController.getAllNotifications);

router
  .route("/:id")
  .put([isAuthenticated], notificationController.updateNotification)
  .delete([isAuthenticated], notificationController.deleteNotification)
  .get(notificationController.getSingleNotification);

export { router as notificationRouter };
