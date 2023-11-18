import { Command } from "commander";
import { addPost, deletePost, getPosts, updatePost } from "./post-manager";

const program = new Command();

program 
    .command("add-post")
    .description("add post to db")
    .requiredOption("-t, --title <title>", "Post title")
    .requiredOption("-b, --body <body>", "Post body" )
    .action((options) => {
        const {title, body} = options;

        addPost(title, body);
    });

program 
    .command("update-post")
    .description("update post in db")
    .requiredOption("-i, --id <id>", "Post id")
    .requiredOption("-t, --title <title>", "Post title")
    .requiredOption("-b, --body <body>", "Post body" )
    .requiredOption("-a, --active <active>", "Post status" )
    .action((options) => {
        const {id,title, body, active} = options;

        updatePost(id, title, body, active)
    });

program 
    .command("delete-post")
    .description("delete post in db")
    .requiredOption("-i, --id <id>", "Post id")
    .action((options) => {
        const {id} = options;

        deletePost(id)
    });

program 
    .command("get-post")
    .description("get post in db")
    .action(() => {

        getPosts()
    });

program.parse(process.argv)