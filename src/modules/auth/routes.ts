import Router from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
    res.json({ message: "Signup" });
});

authRouter.post("/login", (req, res) => {
    res.json({ message: "Login" });
});

export default authRouter;