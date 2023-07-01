import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

type Props<T> = {
  head: React.ReactNode[];
  body: (item: T) => React.ReactNode[];
  list: T[];
};

const AppTable = <T,>({ head, body, list }: Props<T>) => {
  return (
    <TableContainer>
      <Table
        style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
        variant="unstyled"
        rounded="lg"
      >
        <Thead>
          <Tr>
            {head.map((item, index) => (
              <Th
                fontWeight="600"
                fontSize="12px"
                color="gray.600"
                textTransform="capitalize"
                key={index}
                textAlign={item === "Name" ? "center" : "left"}
              >
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {list.map((item, index) => (
            <Tr key={index}>
              {body(item).map((cell, j) => (
                <Td bgColor="white" borderRadius="8px" key={j}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
