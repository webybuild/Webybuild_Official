import { atom } from "recoil";

const hotBlog = atom({
    key: 'hotBlogs',
    default: []
})

export default hotBlog;