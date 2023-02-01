import { Schema, model, models } from "mongoose";

const RenovationSchema = new Schema({
  renovation_company_information__company_name: {
    type: String,
    // required: [true, "Error"],
    // trim: true,
  },
  renovation_company_information__tax_id: {
    type: String,
    // required: [true, "Error"],
    // trim: true,
  },
  renovation_company_information__phone: {
    type: String,
    // required: [true, "Error"],
    // trim: true,
  },
  renovation_company_information__email: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_company_information__document_number: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_company_information__type_organization: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_company_information__new_address: {
    type: String,
    // required: false,
  },
  renovation_company_information__new_city: {
    type: String,
    // required: false,
  },
  renovation_company_information__new_state: {
    type: String,
    // required: false,
  },
  renovation_company_information__new_zip_code: {
    type: String,
    // required: false,
  },
  renovation_company_information__reference_address: {
    type: String,
    // required: false,
  },
  renovation_company_information__reference_city: {
    type: String,
    // required: false,
  },
  renovation_company_information__reference_state: {
    type: String,
    // required: false,
  },
  renovation_company_information__reference_zip_code: {
    type: String,
    // required: false,
  },
  officers_update__complete_name_officer1: {
    type: String,
    // required: false,
  },
  officers_update__phone_officer1: {
    type: String,
    // required: false,
  },
  officers_update__position_officer1: {
    type: String,
    // required: false,
  },
  officers_update__action_officer1: {
    type: String,
    // required: false,
  },
  officers_update__photo_officer1: {
    type: String,
    // required: false,
  },
  officers_update__signature_officer1: {
    type: String,
    // required: false,
  },
  officers_update__complete_name_officer2: {
    type: String,
    // required: false,
  },
  officers_update__phone_officer2: {
    type: String,
    // required: false,
  },
  officers_update__position_officer2: {
    type: String,
    // required: false,
  },
  officers_update__action_officer2: {
    type: String,
    // required: false,
  },
  officers_update__photo_officer2: {
    type: String,
    // required: false,
  },
  officers_update__signature_officer2: {
    type: String,
    // required: false,
  },
  officers_update__complete_name_officer3: {
    type: String,
    // required: false,
  },
  officers_update__phone_officer3: {
    type: String,
    // required: false,
  },
  officers_update__position_officer3: {
    type: String,
    // required: false,
  },
  officers_update__action_officer3: {
    type: String,
    // required: false,
  },
  officers_update__photo_officer3: {
    type: String,
    // required: false,
  },
  officers_update__signature_officer3: {
    type: String,
    // required: false,
  },
  officers_update__complete_name_officer4: {
    type: String,
    // required: false,
  },
  officers_update__phone_officer4: {
    type: String,
    // required: false,
  },
  officers_update__position_officer4: {
    type: String,
    // required: false,
  },
  officers_update__action_officer4: {
    type: String,
    // required: false,
  },
  officers_update__photo_officer4: {
    type: String,
    // required: false,
  },
  officers_update__signature_officer4: {
    type: String,
    // required: false,
  },
  officers_update__complete_name_officer5: {
    type: String,
    // required: false,
  },
  officers_update__phone_officer5: {
    type: String,
    // required: false,
  },
  officers_update__position_officer5: {
    type: String,
    // required: false,
  },
  officers_update__action_officer5: {
    type: String,
    // required: false,
  },
  officers_update__photo_officer5: {
    type: String,
    // required: false,
  },
  officers_update__signature_officer5: {
    type: String,
    // required: false,
  },
  renovation_agent_register__complete_name: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_agent_register__address: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_authorization__complete_name_1: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_authorization__position_1: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_authorization__signature_1: {
    type: String,
    // required: [true, "Error"],
  },
  renovation_authorization__complete_name_2: {
    type: String,
    // required: false,
  },
  renovation_authorization__position_2: {
    type: String,
    // required: false,
  },
  renovation_authorization__signature_2: {
    type: String,
    // required: false,
  },
  renovation_authorization__complete_name_3: {
    type: String,
    // required: false,
  },
  renovation_authorization__position_3: {
    type: String,
    // required: false,
  },
  renovation_authorization__signature_3: {
    type: String,
    // required: false,
  },
});

export default models.Renovation || model("Renovation", RenovationSchema);
