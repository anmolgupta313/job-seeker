const { SavedJobs } = require("../../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const postSavedJobs = await SavedJobs.create({
      title: req.body.title,
      img: req.body.img,
      employerName: req.body.employerName,
      location: req.body.location,
      jobId: req.body.jobId,
    });

    res.status(200).json(postSavedJobs);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const getSavedJobs = await SavedJobs.find();

    res.status(200).json(getSavedJobs);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
