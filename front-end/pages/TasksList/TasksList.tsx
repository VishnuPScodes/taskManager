import axios from "axios";
import React,{ useEffect ,useState} from "react";
import { Div } from "../../components/StylesComponents/Div";
import styles from "./tasklist.module.css";
import {useDisclosure} from '@chakra-ui/react'
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


export const TasksList = () => {
    const [modalValue,setModalValue]=useState([]);
      const [isOpen, setIsOpen] = useState(false);
      const initialRef = React.useRef(null);
      const finalRef = React.useRef(null);

      const handleOpen = (value) => {
        setIsOpen(true);
        setModalValue(value)
      };

      const handleClose = () => {
        setIsOpen(false);
      };

    useEffect(()=>{
        axios.get()
    },[])
    //modal function
    
function InitialFocus() {
  const [name,setName]=useState(modalValue?.name);
  const [des,setDes]=useState(modalValue?.description)
  
  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>

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
              <input type="date" value={'2023-03-23'}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

  const data = [
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
    {
      name: "Learn vue js",
      description:
        "Learn vue js and build some nice applications on top of vue js so that",
      date: "21/4/2023",
    },
  ];
  return (
    <div>
      <div className={styles.card_container}>
        {data.map((e) => {
          return (
            <>
              <Div className={styles.card}>
                <div className={styles.name_head}>{e.name}</div>
                <div className={styles.description}>{e.description}</div>
                <div className={styles.deadline_cont}>
                  <span className={styles.deadline}>Deadline:</span>
                  <span className={styles.date}>{e.date}</span>
                </div>
                <div className={styles.button_wrapp}>
                  <div className={styles.btn_cont}>
                    <div onClick={()=>{
                        handleOpen(e)
                    }} className={styles.edit}>Edit</div>
                    <div className={styles.delete}>Delete</div>
                  </div>
                </div>
              </Div>
            </>
          );
        })}
      </div>
      <InitialFocus/>
    </div>
  );
};
