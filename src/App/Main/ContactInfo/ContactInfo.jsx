import { useForm } from "react-hook-form";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ContactInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    const response = await axios.post(
      "https://versalinkapi.huludelala.com/api/v1/login"
    );

    console.log(response);
  };

  return (
    <div className=" sm:mx-8 md:mx-40">
      <p className="font-bold text-2xl py-11 text-gray-600">
        Leave Us Your Info
      </p>

      <form
        className="p-6 space-y-6 bg-gray-200 shadow-md mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name" className="block text-[#C2B067]">
          Your Full Name (Required)
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-gray-50 px-2 py-4 focus:outline-none border"
          {...register("name", {
            minLength: { value: 6, message: "Min length is 6" },
            required: { value: true, message: "Name is required" },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <label htmlFor="email" className="block text-[#C2B067]">
          Your Email (Required)
        </label>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full  bg-gray-50 px-2 py-4 focus:outline-none  border "
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <label htmlFor="subject" className="block text-[#C2B067]">
          Subject
        </label>
        <input
          type="text"
          className="w-full bg-gray-50 py-4 focus:outline-none border px-2"
        />

        <label htmlFor="message" className="block text-[#C2B067]">
          Your Message
        </label>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="I am front end developer who is..."
          fullWidth
          sx={{ border: "white" }}
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className=" bg-[#EFBF04] focus:outline-none focus:shadow rounded shadow px-3 py-2"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
