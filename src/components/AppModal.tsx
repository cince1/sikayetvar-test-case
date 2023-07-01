import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import { AppButton } from ".";
import { PropsWithChildren } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText: string;
  onAction: () => void;
};

const AppModal = ({
  isOpen,
  onClose,
  title,
  buttonText,
  onAction,
  children,
}: PropsWithChildren<Props>) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Box>
          <AppButton variant="outline" title="Cancel" onClick={onClose} />
        </Box>
        <Box ml="20px">
          <AppButton variant="solid" title={buttonText} onClick={onAction} />
        </Box>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default AppModal;
