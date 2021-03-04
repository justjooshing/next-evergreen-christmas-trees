import Image from "next/image";
import CustomHead from "../../components/Global/CustomHead";
import verifiedImage from "../../components/config/verifiedImage";

import adminStyle from "../../styles/Admin.module.css";

export default function SignIn() {
  const pageName = "admin";

  const image = verifiedImage[Math.floor(Math.random() * verifiedImage.length)];

  return (
    <>
      <CustomHead pageName={pageName} />
      <div className={adminStyle.auth_wrapper}>
        <h3>Verified!</h3>
        <p>Check your inbox</p>
        <p>{image.message}</p>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt="verified image"
        />
      </div>
    </>
  );
}
