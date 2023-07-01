import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { AppButton, AppInput } from "@/components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <VStack
      width="100%"
      height="100%"
      bgGradient="linear(to-r, orange.500, orange.400)"
      justifyContent="center"
      alignItems="center"
      gap="0"
      px="30px"
    >
      <VStack
        className="card"
        gap="0"
        bgColor="white"
        borderRadius="20px"
        boxShadow="2px 5px 10px rgba(0,0,0,0.1)"
        pt="44px"
        pb="41px"
        width={{ base: "100%", sm: "400px", md: "475px" }}
        px="30px"
      >
        <HStack justifyContent="center" alignItems="center" gap="12px">
          <Box height="39px" width="6px" bgColor="orange.400"></Box>
          <Text
            fontWeight="700"
            fontSize={{ base: "20px", md: "32px" }}
            textAlign="center"
            color="black"
          >
            MANAGE COURSES
          </Text>
        </HStack>

        <VStack gap="9px" mt="43px" mb="50px">
          <Text
            fontWeight="600"
            fontSize={{ base: "18px", md: "22px" }}
            color="black"
          >
            SIGN IN
          </Text>
          <Text color="gray.500" fontSize="14px" textAlign="center">
            Enter your credentials to access your account
          </Text>
        </VStack>

        <VStack width="100%">
          <Box mb="20px" width="100%">
            <AppInput
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
          </Box>
          <Box mb="20px" width="100%">
            <AppInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </Box>

          <Box mt="30px" width="100%">
            <AppButton
              variant="solid"
              title="SIGN IN"
              onClick={() => navigate("/dashboard")}
            />
          </Box>
        </VStack>

        <HStack mt="30px">
          <Text fontSize={{ base: "12px", md: "14px" }} color="gray.500">
            Forgot your password?
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: "12px", md: "14px" }}
            color="orange.500"
            textDecoration="underline"
            cursor="pointer"
          >
            Reset password
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Login;
