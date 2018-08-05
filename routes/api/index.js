const router = require("express").Router();
const blogRoutes = require("./blogroutes");
const projectRoutes = require("./projectsroute");
const techKnownRoutes = require("./techknownroutes");
const contactRoutes = require("./contactroutes")

// Resource routes
// router.use("/blog", blogRoutes);
// router.use("/projects", projectRoutes);
// router.use("/technologies", techKnownRoutes);
router.use("/send", contactRoutes )

module.exports = router;