import express from "express";
import { TasksList } from "../models/tasks.model";
import { authenticate } from "../middlewares/authentication";
import { CustomRequest } from "../middlewares/authentication";
const router = express.Router();

//get
router.get("/", authenticate, async (req: CustomRequest, res) => {
  let userId = req.user?.userData._id;
  try {
    const data = await TasksList.findOne({ _id: userId }).lean().exec();
    console.log("my user", req.user?.userData._id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//posting datas of task
router.post("/", authenticate, async (req: CustomRequest, res) => {
  let userId = req.user?.userData._id;
  let postData = {
    userId: userId,
    tasks: req.body.tasks,
  };
  try {
    let userTask = await TasksList.findOne({ userId: userId });
    if (!userTask) {
      const data = await TasksList.create(postData);
      console.log("my user", req.user?.userData._id);
      res.status(200).send(data);
    } else {
      const taskDoc = await TasksList.findOneAndUpdate(
        { userId },
        { $push: { tasks: req.body.tasks } },
        { new: true, upsert: true }
      );
      res.status(200).send({ message: "task added ", data: taskDoc });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
