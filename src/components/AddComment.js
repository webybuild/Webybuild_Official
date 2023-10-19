import { useState } from "react";
import Modal from "../reusable_components/Modal";
// import postData from "../custom_functions/postData";
// import { url } from "../utils/config";

function AddComment(props) {
  function Form() {
    const [formData, setFormData] = useState({});

    function updateFormData(e) {
      const { name, value } = e.target;
      const data = { ...formData };
      data[name] = value;
      setFormData(data);
    }

    function addComment() {
      console.log(formData);
      // postData(`${url}/comment`, formData, console.log, (d) => {console.log(d); props.setShowForm(false)})
    }

    return (
      <div className="bg-white w-full px-8 pt-8 pb-4">
        <div className="text-center font-family-lato text-lg font-semibold">
          Add Comment
        </div>
        <div>
          <label className="col-span-1 h-8 flex text-lg font-family-lato">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            className="col-span-2 h-8 w-full outline-none border border-gray-400 rounded-lg text-gray-500 text-lg px-3 font-family-lato-light"
            placeholder="Enter Your Name"
            onChange={(e) => updateFormData(e)}
          />
          <label className="col-span-1 h-8 flex text-lg font-family-lato">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            className="col-span-2 h-8 w-full outline-none border border-gray-400 rounded-lg text-gray-500 text-lg px-3 font-family-lato-light"
            placeholder="Please Enter Your Email"
            onChange={(e) => updateFormData(e)}
          />
          <label className="col-span-1 h-8 flex text-lg font-family-lato">
            Comment
          </label>
          <textarea
            name="comment"
            type="text"
            value={formData.comment}
            className="col-span-2 h-24 w-full outline-none border border-gray-400 rounded-lg text-gray-500 text-lg px-3 font-family-lato-light"
            placeholder="Enter Your Comment.."
            onChange={(e) => updateFormData(e)}
          />
          <div className="text-center py-2">
            <button
              className="px-8 py-2 font-semibold rounded-md bg-blue-500 cursor-pointer"
              onClick={() => addComment()}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Modal setShowModal={props.setShowForm} component={Form} />;
}

export default AddComment;
