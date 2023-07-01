import { SEdit, STrash } from "@/assets";
import {
  AppButton,
  AppInput,
  AppModal,
  AppPagination,
  AppTable,
} from "@/components";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export type StudentType = {
  id: string;
  image: string;
  name: string;
  email: string;
  phoneNumber: string;
  website: string;
  companyName: string;
};

type ModalType = "delete" | "update" | "create";

const Student = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState<ModalType | null>(null);

  const [studentList, setStudentList] = useState<StudentType[]>([]);
  const [searchResults, setSearchResults] = useState<StudentType[]>([]);
  const [displayList, setDisplayList] = useState<StudentType[]>([]);

  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const [isActionMade, setIsActionMade] = useState(false);

  const [willBeDeletedStd, setWillBeDeletedStd] = useState("");
  const [willBeUpdatedStd, setWillBeUpdatedStd] = useState<StudentType>({
    id: crypto.randomUUID(),
    image: "",
    name: "",
    email: "",
    phoneNumber: "",
    website: "",
    companyName: "",
  });

  const [willBeCreatedStd, setWillBeCreatedStd] = useState<StudentType>({
    id: crypto.randomUUID(),
    image: "",
    name: "",
    email: "",
    phoneNumber: "",
    website: "",
    companyName: "",
  });

  const fetchData = (rowsPerPage: number, currentPage: number) => {
    const skip = (currentPage - 1) * rowsPerPage;
    const url = `https://dummyjson.com/users?limit=${rowsPerPage}&skip=${skip}&select=image,firstName,lastName,email,phone,domain,company`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const tmpStudents: StudentType[] = data.users.map((std: any) => ({
          id: std.id,
          name: std.firstName + " " + std.lastName,
          email: std.email,
          companyName: std.company.name,
          image: std.image,
          phoneNumber: std.phone,
          website: std.domain,
        }));

        setTotalRecords(data.total);
        setStudentList(tmpStudents);
      });
  };

  useEffect(() => {
    fetchData(rowsPerPage, currentPage);
  }, [rowsPerPage, currentPage]);

  const createStudent = () => {
    const tmpStd = {
      id: willBeCreatedStd.id,
      image: willBeCreatedStd.phoneNumber,
      firstName: willBeCreatedStd.name.split(" ")[0],
      lastName: willBeCreatedStd.name.split(" ")[1],
      email: willBeCreatedStd.email,
      phone: willBeCreatedStd.phoneNumber,
      company: {
        name: willBeCreatedStd.companyName,
      },
      domain: willBeCreatedStd.website,
    };

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tmpStd),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsActionMade(true);
        setDisplayList([...displayList, willBeCreatedStd]);
        setOpenModal(null);
        resetStudent();
      });
  };

  const showDeleteModal = (id: string) => {
    setOpenModal("delete");
    const selectedStudent = studentList.find((student) => student.id === id);
    console.log(selectedStudent);
    if (selectedStudent) {
      setWillBeDeletedStd(selectedStudent.id);
    }
  };

  const deleteStudent = () => {
    fetch(`https://dummyjson.com/users/${willBeDeletedStd}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentList((prevList) => {
          return prevList.filter((student) => student.id !== willBeDeletedStd);
        });
        setOpenModal(null);
        setIsActionMade(true);
        setTimeout(() => {
          setIsActionMade(false);
        }, 5000);
      });
  };

  const updateStudent = () => {
    console.log(willBeUpdatedStd);
    fetch(`https://dummyjson.com/users/${willBeUpdatedStd}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(willBeUpdatedStd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplayList((prevList) => {
          return prevList.map((student) =>
            student.id === willBeUpdatedStd.id ? willBeUpdatedStd : student
          );
        });
        setOpenModal(null);
        resetStudent();
        setIsActionMade(true);
        setTimeout(() => {
          setIsActionMade(false);
        }, 5000);
      });
  };

  const handleRowPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    const params: any = {
      page: currentPage.toString(),
      size: rowsPerPage.toString(),
    };

    if (searchTerm.length >= 3) {
      params.search = searchTerm;
    }

    navigate({
      search: createSearchParams(params).toString(),
    });
  }, [currentPage, navigate, rowsPerPage, searchTerm]);

  const nextPage = () => {
    if (currentPage * rowsPerPage < totalRecords) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      setDisplayList(searchResults);
    } else {
      setDisplayList(studentList);
    }
  }, [searchTerm, searchResults, studentList]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      fetch(`https://dummyjson.com/users/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          const newStudents = data.users.map((std: any) => ({
            id: std.id,
            image: std.image,
            name: std.firstName + " " + std.lastName,
            email: std.email,
            phoneNumber: std.phone,
            website: std.domain,
            companyName: std.company.name,
          }));

          setSearchResults(newStudents);
        });
    }
  };

  const handleCreateFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWillBeCreatedStd({
      ...willBeCreatedStd,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWillBeUpdatedStd({
      ...willBeUpdatedStd,
      [e.target.name]: e.target.value,
    });
  };

  const resetStudent = () => {
    setWillBeCreatedStd({
      id: crypto.randomUUID(),
      image: "",
      name: "",
      email: "",
      phoneNumber: "",
      website: "",
      companyName: "",
    });

    setWillBeUpdatedStd({
      id: crypto.randomUUID(),
      image: "",
      name: "",
      email: "",
      phoneNumber: "",
      website: "",
      companyName: "",
    });
  };

  return (
    <Box
      bgColor="gray.200"
      height="calc(100% - 60px)"
      className="st-deneme"
      px="30px"
      pb="30px"
      overflowY="auto"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        pt="12px"
      >
        <Box>
          <Text fontWeight="700" color="black" fontSize="22px">
            Students List
          </Text>
        </Box>
        <Stack
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
          gap={{ base: "12px", sm: "24px" }}
          width={{ base: "100%", md: "auto" }}
        >
          <Box width={{ base: "100%", md: "212px" }} height="37px">
            <AppInput
              isSearchBtnExist
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </Box>
          <Box width={{ base: "100%", md: "199px" }} height="44px">
            <AppButton
              variant="solid"
              title="ADD NEW STUDENT"
              onClick={() => setOpenModal("create")}
            />
          </Box>
        </Stack>
      </Stack>
      <Divider mb="20px" mt="12px" opacity="1" borderColor="gray.300" />

      {isActionMade && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Action is completed successfuly!</AlertTitle>
          <AlertDescription>
            Your sikayetvar.com experience has been improved.
          </AlertDescription>
        </Alert>
      )}

      <AppTable
        head={["Name", "Email", "Phone", "Website", "Company Name", ""]}
        list={displayList}
        body={(student) => [
          <HStack gap="30px">
            <Box width="65px">
              <Image
                height="55px"
                borderRadius="8px"
                objectFit="cover"
                src={student.image}
              />
            </Box>
            <Text color="black" fontSize="14px">
              {student.name}
            </Text>
          </HStack>,
          student.email,
          student.phoneNumber,
          student.website,
          student.companyName,
          <HStack gap="33px" alignItems="center">
            <Box
              onClick={() => {
                setOpenModal("update");
                setWillBeUpdatedStd({ ...student });
              }}
              width="19px"
              height="19px"
              cursor="pointer"
            >
              <Image src={SEdit} alt="EditBtn" />
            </Box>
            <Box
              onClick={() => showDeleteModal(student.id)}
              width="16px"
              height="18px"
              cursor="pointer"
            >
              <Image src={STrash} alt="DeleteBtn" />
            </Box>
          </HStack>,
        ]}
      />
      <AppPagination
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        totalRecords={totalRecords}
        handleRowPerPage={handleRowPerPage}
        nextPage={nextPage}
        prevPage={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
      <AppModal
        isOpen={openModal === "delete"}
        onClose={() => setOpenModal(null)}
        title="Delete Student"
        buttonText="Delete"
        onAction={deleteStudent}
      >
        Are you sure you want to delete?
      </AppModal>
      <AppModal
        isOpen={openModal === "create"}
        onClose={() => {
          resetStudent();
          setOpenModal(null);
        }}
        title="Create Student"
        buttonText="Create"
        onAction={createStudent}
      >
        {Object.keys(willBeCreatedStd).map((key, index) => {
          if (key === "id") return null;
          return (
            <Box key={index} mb="10px">
              <AppInput
                type="text"
                name={key}
                label={key}
                placeholder={`Enter your ${key}`}
                value={willBeCreatedStd[key as keyof StudentType]}
                onChange={handleCreateFormChange}
              />
            </Box>
          );
        })}
      </AppModal>
      <AppModal
        isOpen={openModal === "update"}
        onClose={() => {
          resetStudent();
          setOpenModal(null);
        }}
        title="Update Student"
        buttonText="Update"
        onAction={updateStudent}
      >
        {Object.keys(willBeUpdatedStd).map((key, index) => {
          if (key === "id") return null;
          return (
            <Box key={index} mb="10px">
              <AppInput
                type="text"
                label={key}
                name={key}
                placeholder={`Enter your ${key}`}
                value={willBeUpdatedStd[key as keyof StudentType]}
                onChange={handleUpdateFormChange}
              />
            </Box>
          );
        })}
      </AppModal>
    </Box>
  );
};

export default Student;
