import axios from "axios";
import React, { useEffect, useState } from "react";
import { Div } from "../../components/StylesComponents/Div";
import styles from "./tasklist.module.css";
import { useDisclosure, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const TasksList = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const toast = useToast();
  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response?.data?.tasks);
        console.log("stss", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);
  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3000/tasks/${e._id}`)
      .then((res) => {
        toast({
          title: "Task deleted",
          description: "Your task has been successfully deleted.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setUpdate(!update);
        setIsOpen(false);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const [modalValue, setModalValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleOpen = (value) => {
    setIsOpen(true);
    setModalValue(value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //sort functionality
  const handleSort = () => {
    let newdata=[...data];
    console.log('before',newdata)
    newdata=newdata.sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(newdata);
    console.log("after", newdata);
  };

  //modal function

  function InitialFocus() {
    const [name, setName] = useState(modalValue?.task_name);
    const [des, setDes] = useState(modalValue?.description);
    const [date, setDate] = useState(modalValue?.date);
    const toast = useToast();

    const handleSave = () => {
      console.log(",modal", modalValue);
      let mydata = {
        task_name: name,
        description: des,
        date,
        _id: modalValue._id,
      };
      axios
        .post(`http://localhost:3000/tasks/${modalValue._id}`, mydata)
        .then((res) => {
          toast({
            title: "Task updated",
            description: "Your task has been successfully updated.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setUpdate(!update);
          setIsOpen(false);
        })
        .catch((er) => {
          console.log(er);
        });
    };

    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={handleClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Please give your task's title"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Please tell more about your task"
                  onChange={(e) => setDes(e.target.value)}
                  value={des}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Deadline</FormLabel>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSave} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <div>
      <div onClick={handleSort} className={styles.sort}>
        Sort Tasks by Date
      </div>
      {data?.length == 0 ? (
        <div>You do not have any tasks to do</div>
      ) : (
        <div className={styles.card_container}>
          {data?.map((e) => {
            return (
              <div key={e?._id}>
                <Div className={styles.card}>
                  <div className={styles.name_head}>{e.task_name}</div>
                  <div className={styles.description}>{e.description}</div>
                  <div className={styles.deadline_cont}>
                    <span className={styles.deadline}>Deadline:</span>
                    <span className={styles.date}>{e.date}</span>
                  </div>
                  <div className={styles.button_wrapp}>
                    <div className={styles.btn_cont}>
                      <div
                        onClick={() => {
                          handleOpen(e);
                        }}
                        className={styles.edit}
                      >
                        Edit
                      </div>
                      <div
                        onClick={() => {
                          handleDelete(e);
                        }}
                        className={styles.delete}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </Div>
              </div>
            );
          })}
        </div>
      )}

      <InitialFocus />
    </div>
  );
};
