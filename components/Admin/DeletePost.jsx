import adminStyle from "../../styles/Admin.module.css";

const deletePost = ({ postId }) => {
  return <span className={adminStyle.deletePostButton}>X</span>;
};

export default deletePost;
