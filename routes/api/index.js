const router = require("express").Router();
const blogRoutes = require("./blogroutes");
const projectRoutes = require("./projectsroute");
const techKnownRoutes = require("./techknownroutes");

// Resource routes
router.use("/blog", blogRoutes);
router.use("/projects", projectRoutes);
router.use("/technologies", techKnownRoutes);

module.exports = router;