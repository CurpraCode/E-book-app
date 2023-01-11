import React from "react";
import { Box, Heading, Text, HStack } from "native-base";
import Layout from "./common/Layout";
import { Image } from "react-native";
// import { Notify } from "./icon/svg";
import Notify from "../../assets/notify.png";

const Home = () => {
  return (
    <Layout>
      <Box p="8" maxW="590">
        <HStack justifyContent="space-between">
          <Heading>Hello Olamilekan</Heading>
        
          <Image source={Notify} />
        </HStack>

        <Box mt="8">
          <Heading fontSize="20" mb="2">
            Recommended for you
          </Heading>
          <HStack>
            <Box>
              <Box mb="2" height="200px" bg="amber.400"></Box>
              <Box>
                <Heading fontSize="20">A poderosa chefona</Heading>
                <Text fontSize="20">Tina Fey</Text>
              </Box>
            </Box>
            <Box>
              <Box mb="2" height="200px" bg="amber.400"></Box>
              <Box>
                <Heading fontSize="20">A poderosa chefona</Heading>
                <Text fontSize="20">Tina Fey</Text>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
