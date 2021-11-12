import Image from "next/image";

import PageWrapper from "../../components/utils/PageWrapper";
import { verifiedImages } from "../../constants";

export default function SignIn() {
  const pageName = "admin";

  const image =
    verifiedImages[Math.floor(Math.random() * verifiedImages.length)];

  return (
    <PageWrapper pageName={pageName}>
      <h3>Verified!</h3>
      <p>Check your inbox</p>
      <p>{image.message}</p>
      <Image
        height={image.height}
        width={image.width}
        src={image.src}
        alt="verified image"
      />
    </PageWrapper>
  );
}
