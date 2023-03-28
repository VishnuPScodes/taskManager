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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./addtask.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export const AddTask = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const token = useSelector((state) => state?.auth?.token);
  const [loader, setLoader] = useState(false);
  const toast=useToast();
  const handleSubmit = (e) => {
    
    setLoader(true);
    let data = {
      task_name: name,
      description: des,
      date: date,
    };
    let tosend={
        tasks:data
    }
    axios
      .post("http://localhost:3000/tasks", tosend, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setLoader(false);
        toast({
          title: "Task added",
          description: "Your task has been successfully added.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:'top'
        });
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        toast({
          title: "Error",
          description: "Something went wrong.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
      });
  };
  return (
    <div>
      <div className={styles.cont}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
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
            placeholder="Please describe your task "
            onChange={(e) => setDes(e.target.value)}
            value={des}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Deadline</FormLabel>
          <input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </FormControl>
        <Button onClick={handleSubmit} className={styles.button}>
         {loader==true?<Spinner/>:"Submit"}
        </Button>
      </div>
    </div>
  );
};
