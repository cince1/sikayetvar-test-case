import {
  SBCourse,
  SBHome,
  SBLogout,
  ProfilePhoto,
  SBStudent,
  SBPayment,
  SBSetting,
  SBReport,
} from "@/assets";
import { Box, HStack, Text, Image, VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

const AppSidebar = (props: Props) => {
  const navLinks = [
    {
      id: 0,
      url: "/dashboard",
      title: "Home",
      icon: SBHome,
    },
    {
      id: 1,
      url: "/dashboard/courses",
      title: "Course",
      icon: SBCourse,
    },
    {
      id: 2,
      url: "/dashboard/students",
      title: "Students",
      icon: SBStudent,
    },
    {
      id: 3,
      url: "/dashboard/payments",
      title: "Payment",
      icon: SBPayment,
    },
    {
      id: 4,
      url: "/dashboard/reports",
      title: "Report",
      icon: SBReport,
    },
    {
      id: 5,
      url: "/dashboard/settings",
      title: "Settings",
      icon: SBSetting,
    },
  ];

  return (
    <Box
      width="100%"
      maxWidth={{ base: "100%", sm: "350px", lg: "270px" }}
      height="100vh"
      bgColor="orange.200"
      pt="18px"
      pb="33px"
      className="sidebar"
      display="flex"
      flexDirection="column"
      flex={1}
      zIndex={10}
      position={{ base: "fixed", lg: "static" }}
      left="0"
      top="0"
      transform={!props.isOpen ? "translateX(-100%)" : "translateX(0%)"}
      transition="transform .3s"
    >
      <HStack
        justifyContent="center"
        alignItems="center"
        gap="12px"
        padding={{ base: "0 30px", lg: "0" }}
      >
        <Box height="23px" width="4px" bgColor="orange.400"></Box>
        <Text
          fontWeight="700"
          fontSize={{ base: "20px", md: "20px" }}
          textAlign="center"
          color="black"
        >
          MANAGE COURSES
        </Text>
        <Box
          hideFrom="992px"
          ml="auto"
          onClick={props.onToggle}
          cursor="pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_38)">
              <path
                d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_38">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(0 1 -1 0 18 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </Box>
      </HStack>
      <VStack mt="27px" mb="40px" gap="0">
        <Image borderRadius="full" src={ProfilePhoto} alt="avatar" />
        <Text
          mt="16px"
          mb="10px"
          color="black"
          fontWeight="700"
          fontSize="17px"
        >
          John Doe
        </Text>
        <Text color="orange.500" fontWeight="500" fontSize="14px">
          Admin
        </Text>
      </VStack>
      <VStack px="38px">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            as={NavLink}
            to={navLink.url}
            _activeLink={{ backgroundColor: "orange.500" }}
            end
            width="100%"
            height="41px"
            borderRadius="4px"
            _hover={{ textDecoration: "none" }}
            onClick={window.innerWidth < 1024 ? props.onToggle : () => null}
          >
            <HStack pl="41px" alignItems="center" gap="15px" height="100%">
              <Image src={navLink.icon} alt="home" />
              <Text
                lineHeight="17px"
                color="black"
                fontWeight="500"
                fontSize="14px"
              >
                {navLink.title}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
      <HStack mt="auto" justifyContent="center">
        <NavLink to="/login">
          <HStack
            width="100%"
            cursor="pointer"
            mt="auto"
            justifyContent="center"
          >
            <Text
              lineHeight="17px"
              color="black"
              fontWeight="500"
              fontSize="14px"
            >
              Logout
            </Text>
            <Image src={SBLogout} alt="logout" />
          </HStack>
        </NavLink>
      </HStack>
    </Box>
  );
};

export default AppSidebar;
