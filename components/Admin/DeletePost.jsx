import adminStyle from "../../styles/Admin.module.css";

const deletePost = ({ id }) => {
  const deleteReq = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };

  const deletePost = async () => {
    console.log("deleted");
    const response = await fetch("/api/announcements", deleteReq);
    const body = await response.json();
    return body;
  };

  return (
    <div className={adminStyle.deletePostButton} onClick={deletePost}>
      X
    </div>
  );
};

export default deletePost;
