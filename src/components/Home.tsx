import React from "react";
import { Box, Heading, Text, Flex, HStack } from "native-base";
import Layout from "./common/Layout";

const Home = () => {
  return (
    <Layout>
      <Box p="8" maxW="590">
        <Flex>
          <Heading>Hello Olamilekan</Heading>
        </Flex>

        <Box mt="8">
          <Heading fontSize="20" mb="2">Recommended for you</Heading>
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
