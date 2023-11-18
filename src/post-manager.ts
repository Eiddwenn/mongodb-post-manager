import { config } from "dotenv";
import mongoose from "mongoose";
import { Post} from "./models/post"

config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
    console.error("Connection not found");
    process.exit(1);
}

export const addPost = async (title: string, body: string) => {
    try {
        await mongoose.connect(connectionString, {dbName: "blog"})
        let p = new Post();
        p.title = title;
        p.body = body;
        let result = await p.save();
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const updatePost =  async (id: string, title: string, body: string, active: boolean) => {
    try {
        await mongoose.connect(connectionString, {dbName: "blog"})
        let p = await Post.findById(id)
        if(p) {
            p.title = title;
            p.body = body;
            p.active = active;
            let result = await p.save();
        }
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const deletePost = async (id: string) => {
    try {
        await mongoose.connect(connectionString, {dbName: "blog"})
        let result = await Post.deleteOne({_id: id})
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const getPosts = async () => {
    try {
        await mongoose.connect(connectionString, {dbName: "blog"})
        let result = await Post.find()
        console.log(result);
        
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}