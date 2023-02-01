// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../../lib/dbConnection";
import modelRenovation from "../../../models/Renovation";

export default async function handler(req, res) {
  await connectDB();
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const renovation = await modelRenovation.create(body);
        // await renovation.save();
        return res.status(200).json({ success: true }, renovation);
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, error: "Error, falla de servidor" });
      }

    default:
      return res.status(500).json({ success: false, error: "Método inválido" });
  }
}
