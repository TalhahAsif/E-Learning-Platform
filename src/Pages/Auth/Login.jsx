import { Image } from "@nextui-org/react";
import React from "react";

const Login = () => {
  return (
    <>
      <section className="h-screen">
        <div className="h-screen">
          <Image
            isBlurred
            width={440}
            src="https://s3-alpha-sig.figma.com/img/3d22/12c2/6d48440cd871897408ac64c61604bb17?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RIVNi3h3KWiybnVu5A9Bgs8vru2~Ne0NVhzsUAcNYkc9OrKX~Y2wQ56jMIPVQdoUDdo71qa3jIQ8RhAhjyg5DLYid-1O-r~Z8XsJJD0x405jQylf5L2ffkOn-hOL5C1NJB0mOiYSGCsacsC-GLnU~Dl50Wxw6F7TlbkZFwUJNkK4d63IlZzksVK~EJnH3YW8X4pcCMN~z--ktIdJfx-8~Ao3RSb0NgrOkbWi7U64srvVHPqUv0jkYrBhWLb7-mgJqRcwCGNL2c8nFaX~iBVqoGoVlNyoRg1sLpjJTb5quyVjco6iilvK47QhUC6r9qWMPil8cA3BW3QTjLlGLEpkQg__"
            alt="NextUI Album Cover"
            className="m-5"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
