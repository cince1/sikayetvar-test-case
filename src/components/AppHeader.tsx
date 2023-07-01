import { Back, Notification } from "@/assets";
import { Box, HStack, Image } from "@chakra-ui/react";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

const AppHeader = (props: Props) => {
  return (
    <HStack
      className="header"
      height="60px"
      width="100%"
      bgColor="white"
      justifyContent="space-between"
      px="30px"
    >
      <Box
        cursor="pointer"
        onClick={props.onToggle}
        transform={props.isOpen ? "rotate(0deg)" : "rotate(180deg)"}
        transition="transform 1s"
      >
        <Image src={Back} alt="Back" />
      </Box>
      <Box cursor="pointer">
        <Image src={Notification} alt="notification" />
      </Box>
    </HStack>
  );
};

export default AppHeader;
