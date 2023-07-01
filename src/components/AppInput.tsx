import { SSearch } from "@/assets";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";

type Props = {
  label?: string;
  type: "email" | "password" | "text";
  placeholder: string;
  isSearchBtnExist?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
};

const AppInput = (props: Props) => {
  return (
    <FormControl>
      {props.label && (
        <FormLabel fontWeight="500" fontSize="14px" color="gray.500">
          {props.label}
        </FormLabel>
      )}

      <InputGroup>
        <Input
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          borderRadius="4px"
          borderWidth={1}
          borderColor="gray.300"
          fontSize="12px"
          _hover={{ borderColor: "gray.300" }}
          focusBorderColor="orange.400"
          _placeholder={{ color: "gray.400" }}
          color="black"
          bgColor="white"
        />
        {props.isSearchBtnExist && (
          <InputRightElement cursor="pointer">
            <Image src={SSearch} alt="search" />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default AppInput;
