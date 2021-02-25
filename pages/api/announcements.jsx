import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { id, value } = req.body;
  switch (req.method) {
    case "DELETE": {
      await db.collection("message").deleteOne({ id });
      const announcements = await db.collection("message").find({}).toArray();
      res.status(200).send(announcements);
      break;
    }
    case "POST": {
      await db.collection("message").insertOne({ value, id, date: new Date() });
      const announcements = await db.collection("message").find({}).toArray();
      res.status(200).send(announcements);
      break;
    }
    default: {
      const getAnnouncements = await db
        .collection("message")
        .find({})
        .toArray();
      const announcements = JSON.parse(JSON.stringify(getAnnouncements));
      res.json(announcements);
    }
  }
};

export default handler;

//   const { score, name } = req.body;
//   const newHighScore = new HighScore({
//     name,
//     score,
//   });
//   newHighScore.save((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       sendHighScores(res);
//     }
//   });
// });
