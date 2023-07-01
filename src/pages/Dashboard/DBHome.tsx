import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { DBCourse, DBPayment, DBStudent, DBUser } from "@/assets";

const DBHome = () => {
  const dbCards = [
    {
      id: 0,
      icon: DBStudent,
      title: "Students",
      count: "243",
      color: "gray.500",
      bgColor: "#F0F9FF",
    },
    {
      id: 1,
      icon: DBCourse,
      title: "Course",
      count: "13",
      color: "gray.500",
      bgColor: "#FEF6FB",
    },
    {
      id: 2,
      icon: DBPayment,
      title: "Payments",
      count: "556,000₺",
      color: "gray.500",
      bgColor: "#FEFBEC",
    },
    {
      id: 3,
      icon: DBUser,
      title: "Users",
      count: "3",
      color: "white",
      bgGradient: "linear(to-r, orange.500, orange.400)",
    },
  ];
  return (
    <Box
      bgColor="white"
      className="deneme"
      height="calc(100% - 60px)"
      px="30px"
      pb="30px"
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing="30px">
        {dbCards.map((card) => (
          <Box
            key={card.id}
            width="100%"
            height="157px"
            borderRadius="8px"
            bgColor={card.bgColor ? card.bgColor : "transparent"}
            bgGradient={card.bgGradient ? card.bgGradient : "transparent"}
            p="20px"
            mt="30px"
          >
            <Image src={card.icon} />
            <Text fontWeight="500" fontSize="14px" color={card.color} mt="15px">
              {card.title}
            </Text>
            <Text
              fontWeight="700"
              fontSize="30px"
              color="black"
              textAlign="end"
            >
              {card.count}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DBHome;
