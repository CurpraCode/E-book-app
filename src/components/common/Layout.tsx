import React, { ReactNode } from "react";
import { Box } from "native-base";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box bg="primary.50" height="full" safeArea>
      {children}
    </Box>
  );
};

export default Layout;