import { Schema, model, models } from "mongoose";

const RenovationFormSchema = new Schema({
  renovation_company_information__company_name: {
    type: String,
    required: [true, "Error"],
    // trim: true,
  },
  renovation_company_information__tax_id: {
    type: String,
    required: [true, "Error"],
    // trim: true,
  },
  renovation_company_information__phone: {
    type: String,
    required: [true, "Error"],
    // trim: true,
  },
});

export default models.RenovationForm ||
  model("RenovationForm", RenovationFormSchema);
