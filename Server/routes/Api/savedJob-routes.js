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
      user: req.body.user,
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

router.get("/jobs", async (req, res) => {
  try {
    console.log(req.query, "queryy");
    const getSaveJobById = await SavedJobs.find({
      $where: function () {
        return this.user == parseInt(req.query.userId);
      },
    });
    res.status(200).json(getSaveJobById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/save/:id", async (req, res) => {
  try {
    const id = await SavedJobs.findById({ _id: req.params.id });

    res.status(200).json(id);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:delId", async (req, res) => {
  try {
    const delSavedJob = await SavedJobs.findByIdAndDelete({
      _id: req.params.delId,
    });

    if (!delSavedJob) {
      res.status(404).json({ message: "invalidId" });
    } else {
      res.status(200).json(delSavedJob);
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
