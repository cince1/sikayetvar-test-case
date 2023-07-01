import { AppContent, AppSidebar } from "@/components";
import { HStack, useDisclosure } from "@chakra-ui/react";

const Dashboard = () => {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: window.innerWidth >= 1024,
  });
  return (
    <HStack height="100%" color="black" gap="0">
      <AppSidebar isOpen={isOpen} onToggle={onToggle} />
      <AppContent onToggle={onToggle} isOpen={isOpen} />
    </HStack>
  );
};

export default Dashboard;
