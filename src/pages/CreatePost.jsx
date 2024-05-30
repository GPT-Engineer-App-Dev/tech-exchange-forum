import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Heading, Textarea, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError("All fields are required.");
      return;
    }
    // Simulate successful post creation
    console.log("Post created:", { title, description });
    navigate("/");
  };

  return (
    <Container maxW="md" centerContent>
      <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
        <Heading as="h2" size="lg" mb={4}>Create New Post</Heading>
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl id="title" mb={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;