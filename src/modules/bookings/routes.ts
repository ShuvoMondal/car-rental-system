import Router from "express";

const bookingRouter = Router();

bookingRouter.get("/", (req, res) => {
    res.json({ message: "Booking module" });
});

bookingRouter.post("/", (req, res) => {
    res.json({ message: "Booking module" });
});

bookingRouter.get("/:id", (req, res) => {
    res.json({ message: "Booking module" });
});

bookingRouter.put("/:id", (req, res) => {
    res.json({ message: "Booking module" });
});

bookingRouter.delete("/:id", (req, res) => {
    res.json({ message: "Booking module" });
});

bookingRouter.get("/user/:userId", (req, res) => {
    res.json({ message: "Booking module" });
});

export default bookingRouter;

