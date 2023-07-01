import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  onClick: () => void;
  variant: "outline" | "solid";
};

const AppButton = (props: Props) => {
  return (
    <Button
      variant={props.variant}
      width="100%"
      borderRadius="4px"
      bgColor={props.variant === "solid" ? "orange.500" : "transparent"}
      color={props.variant === "solid" ? "white" : "black"}
      borderWidth={1}
      borderColor={props.variant === "solid" ? "transparent" : "orange.500"}
      fontWeight="500"
      fontSize="14px"
      height="44px"
      _hover={{ bg: props.variant === "solid" ? "orange.500" : "transparent" }}
      _active={{
        bg: props.variant === "solid" ? "orange.500" : "transparent",
        transform: "scale(0.98)",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

export default AppButton;
