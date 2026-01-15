import { Router } from "express";
import userRouter from "./modules/users/routes";
import vehicaleRouter from "./modules/vehicales/routes";
import bookingRouter from "./modules/bookings/routes";
import authRouter from "./modules/auth/routes";

const router = Router();

router.get("/health", (_, res) => {
    res.json({ status: "ok" });
});

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/vehicles", vehicaleRouter);
router.use("/bookings", bookingRouter);


export default router;  