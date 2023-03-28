import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import styles from './login.module.css';
import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../redux/action";
export const Login=()=>{
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSubmit=()=>{
    let data={
      email,
      password
    }
    axios.post('http://localhost:3000/log',data).then((res)=>{
      if(res.data?.token){
          dispatch(addToken(res.data.token));
          navigate("/");
      }
      else{
        alert('login failed')
      }
    }).catch((er)=>{
      console.log(er.response.data.message);
      alert(er.response.data.message)
    })
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"black.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
          <div className={styles.signup}>
            Not registered? <Link onClick={()=>{navigate('/register')}} color={"black.400"}>Sign up</Link>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
}
