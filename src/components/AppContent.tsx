import { AppHeader } from "@/components";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

const AppContent = (props: Props) => {
  return (
    <Box
      flex={2}
      height="100%"
      maxHeight="100vh"
      overflowY="auto"
      ml={props.isOpen ? 0 : { base: 0, lg: "-270px" }}
      transition="margin-left 0.3s"
      className="content"
      // px="30px"
      width={window.innerWidth < 1024 ? "100%" : "calc(100% - 270px)"}
      // pb="30px"
      // bgColor="gray.200"
    >
      <AppHeader onToggle={props.onToggle} isOpen={props.isOpen} />
      <Outlet />
    </Box>
  );
};

export default AppContent;
