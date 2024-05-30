import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Badge } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaTags, FaInfoCircle, FaUserPlus, FaPlus } from "react-icons/fa";

const threads = [
  {
    title: "How to learn React?",
    description: "Share your resources and tips for learning React.",
    replies: 12,
    lastReply: "2023-10-01",
  },
  {
    title: "Best practices for Node.js",
    description: "Discuss the best practices for developing with Node.js.",
    replies: 8,
    lastReply: "2023-09-28",
  },
  // Add more threads as needed
];

const categories = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link as={RouterLink} to="/categories" display="flex" alignItems="center">
            <FaTags />
            <Text ml={2}>Categories</Text>
          </Link>
          <Link as={RouterLink} to="/about" display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={2}>About</Text>
          </Link>
          <Link as={RouterLink} to="/register" display="flex" alignItems="center">
            <FaUserPlus />
            <Text ml={2}>Register</Text>
          </Link>
          <Link as={RouterLink} to="/create-post" display="flex" alignItems="center">
            <FaPlus />
            <Text ml={2}>Create Post</Text>
          </Link>
        </HStack>
      </Flex>

      <Flex mt={4}>
        <Box flex="3" mr={4}>
          <Heading as="h2" size="lg" mb={4}>Discussion Threads</Heading>
          <VStack spacing={4} align="stretch">
            {threads.map((thread, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{thread.title}</Heading>
                <Text>{thread.description}</Text>
                <HStack justifyContent="space-between" mt={2}>
                  <Text>{thread.replies} replies</Text>
                  <Text>Last reply: {thread.lastReply}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={2} align="stretch">
            {categories.map((category, index) => (
              <Badge key={index} colorScheme="blue" p={2} borderRadius="md">{category}</Badge>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;