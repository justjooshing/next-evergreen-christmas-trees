import Image from "next/image";
import { verifiedImages } from "../../constants";

import adminStyle from "../../styles/Admin.module.scss";
import PageWrapper from "../../components/utils/PageWrapper";

export default function SignIn() {
  const pageName = "admin";

  const image =
    verifiedImages[Math.floor(Math.random() * verifiedImages.length)];

  return (
    <PageWrapper pageName={pageName}>
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
    </PageWrapper>
  );
}
