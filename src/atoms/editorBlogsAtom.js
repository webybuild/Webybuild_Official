import { atom } from "recoil";

const editorBlog = atom({
    key: 'editorBlogs',
    default: []
})

export default editorBlog;