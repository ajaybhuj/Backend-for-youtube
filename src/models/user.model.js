import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    fullname: {
      type: string,
      required: true,
      index: true,
      trim: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: string,
      required: true,
    },
    coverImage: {
      type: string,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    password: {
      type: string,
      required: true,
    },
    refreshToken: {
      type: [string, "password is required!!"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
