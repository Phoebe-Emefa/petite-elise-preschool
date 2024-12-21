import * as Yup from "yup";

export const contactSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      phoneNumber: Yup.string().required("Phone is required"),
  });