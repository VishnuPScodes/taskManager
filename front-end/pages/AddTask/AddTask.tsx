
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
import { useState } from "react";
import styles from './addtask.module.css' 
export const AddTask=()=>{
      const [name, setName] = useState('');
      const [des, setDes] = useState('');
      const [date,setDate]=useState('');
      const handleSubmit=()=>{
        let data={
            task_name:name,
            description:des,
            date:date
        }
      }
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
              placeholder="Last name"
              onChange={(e) => setDes(e.target.value)}
              value={des}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Deadline</FormLabel>
            <input type="date" onChange={(e)=>{
                setDate(e.target.value);
            }} />
          </FormControl>
          <Button onSubmit={handleSubmit} className={styles.button}>
            Submit
          </Button>
        </div>
      </div>
    );
}