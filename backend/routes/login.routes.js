// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the login controller
const loginControllers = require("../controllers/login.controller");

// Route for normal users
<<<<<<< HEAD
router.post("/api/login/normal", loginControllers.logIn);

// Route for admin users
router.post("/api/login/admin", loginControllers.logIn);

// Route for manager users
router.post("/api/login/manager", async (req, res, next) => {
    try {
        const { user_email, user_password, userType } = req.body;
        const loginResult = await loginControllers.logIn(
            user_email,
            user_password,
            userType
        );
        res.status(loginResult.status === "success" ? 200 : 403).json(
            loginResult
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred during login",
        });
    }
});

// Route for staff users
router.post("/api/login/staff", async (req, res, next) => {
    try {
        const { user_email, user_password, userType } = req.body;
        const loginResult = await loginControllers.logIn(
            user_email,
            user_password,
            userType
        );
        res.status(loginResult.status === "success" ? 200 : 403).json(
            loginResult
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred during login",
        });
    }
});
=======
router.post("/api/login", loginControllers.logIn);
>>>>>>> 699f29c32fbf9e098d946472a8d8e028210e44bf

// Export the router
module.exports = router;
