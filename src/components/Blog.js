import axios from "axios";
import { useState } from "react";
import { url } from "../utils/config";
import AddComment from "./AddComment";
import { useParams } from "react-router-dom";

function Blog() {
  const [data, setData] = useState({
    blog: {
      title: "Title of the blog!",
      body: ["This is body1", "This is body2", "This is body-3"],
    },
    comments: [{ name: "Name", comment: "It's a comment" }],
  });
  const [showAddComment, setShowAddComment] = useState(false);
  const { id } = useParams();

  async function getBlogData() {
    try {
      const reqUrl = url + "/blog/" + id;
      const { data } = await axios.post(reqUrl);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-center">
      <h1>{data.blog.title}</h1>
      <div>
        {data.blog.body.map((body, ind) => (
          <div key={ind}>{body}</div>
        ))}
      </div>
      <div>Comments</div>
      <div>
        {data.comments.map((comment, ind) => (
          <div key={ind}>
            <div>{comment.name}</div>
            <div>{comment.comment}</div>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAddComment(true)}>Add a Comment...</button>
      {showAddComment && <AddComment setShowForm={setShowAddComment} />}
    </div>
  );
}

export default Blog;
