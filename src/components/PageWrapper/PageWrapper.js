import React, { useEffect, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
const headerConfigDefault = {
  theme: "light",
  variant: "primary",
  align: "left",
  isFluid: false,
  button: "cta",
  buttonText: "Get started",
};

const footerConfigDefault = {
  theme: "dark",
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (gContext.themeDark) {
      gContext.setHeader({
        ...headerConfigDefault,
        ...headerConfig,
        theme: "dark",
      });
      gContext.setFooter({
        ...footerConfigDefault,
        ...footerConfig,
        theme: "dark",
      });
    } else {
      gContext.setHeader({ ...headerConfigDefault, ...headerConfig });
      gContext.setFooter({ ...footerConfigDefault, ...footerConfig });
    }
  }, [gContext.themeDark, headerConfig, footerConfig]);

  return <>{children}</>;
};

export default PageWrapper;
