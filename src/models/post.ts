import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {type: Date, default: Date.now()},
    active: {type: Boolean, default: true}
})

export const Post = mongoose.model("Post", postSchema, "posts")