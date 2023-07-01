import { SLeft, SRight } from "@/assets";
import { Image, Text, Box, HStack, Select } from "@chakra-ui/react";

type Props = {
  rowsPerPage: number;
  currentPage: number;
  totalRecords: number;
  handleRowPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  nextPage: () => void;
  prevPage: () => void;
};

const AppPagination = ({
  rowsPerPage,
  currentPage,
  totalRecords,
  handleRowPerPage,
  nextPage,
  prevPage,
}: Props) => (
  <HStack justifyContent="flex-end" mt="30px">
    <HStack className="rowsPerPage" gap="8px">
      <Text fontSize="14px" color="gray.700">
        Rows per page:
      </Text>
      <Box cursor="pointer">
        <Select
          defaultValue={rowsPerPage}
          onChange={(e) => handleRowPerPage(e)}
        >
          {Array.from(Array(10)).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
      </Box>
    </HStack>
    <Text color="gray.700" fontSize="14px" ml="50px" mr="24px">
      {`${(currentPage - 1) * rowsPerPage + 1} - ${
        currentPage * rowsPerPage
      } of ${totalRecords}`}
    </Text>
    <HStack gap="21px">
      <Box cursor="pointer" onClick={prevPage}>
        <Image src={SLeft} alt="left" />
      </Box>
      <Box cursor="pointer" onClick={nextPage}>
        <Image src={SRight} alt="right" />
      </Box>
    </HStack>
  </HStack>
);

export default AppPagination;
