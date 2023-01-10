import React from "react";
import { Box, Heading, Text, Flex, Image, HStack } from "native-base";
import Layout from "./common/Layout";
import { Notify } from "./icon/svg";
// import Notify from "../../assets/notify.svg"

const Home = () => {
  return (
    <Layout>
      <Box p="8" maxW="590">
        <Flex>
          <Heading>Hello Olamilekan</Heading>
          <Notify />
          {/* <Image src={Notify} alt="notify pic" /> */}
        </Flex>

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
