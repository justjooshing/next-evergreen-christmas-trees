import adminStyle from "../../styles/Admin.module.css";

const deletePost = ({ postId }) => {
  return <div className={adminStyle.deletePostButton}>X</div>;
};

export default deletePost;
