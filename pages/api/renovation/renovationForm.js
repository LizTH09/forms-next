// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import connectDB from "../../../lib/dbConnection";
// import RenovationForm from "../../../models/RenovationForm";

// export default async function handler(req, res) {
//   await connectDB();
//   const { method } = req;
//   switch (method) {
//     case "POST":
//       try {
//         const renovationForm = new RenovationForm.create(req.body);
//         await renovationForm.save();
//         return res.status(200).json({ success: true }, renovationForm);
//       } catch (error) {
//         return res.status(400).json({ success: false, error });
//       }

//     default:
//       return res.status(500).json({ success: false, error: "Método inválido" });
//   }
// }
