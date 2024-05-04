import { Container, Heading, Text, VStack, Box, Button, Image, Link } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaLink } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={10} align="stretch">
        <Box bg="purple.700" color="yellow.300" p={5} borderRadius="lg">
          <Heading mb={4}>Welcome to Blockchain Insights</Heading>
          <Text fontSize="xl">Dive into the world of blockchain technology and discover its potential to revolutionize various industries.</Text>
        </Box>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-around" alignItems="center">
          <VStack spacing={5}>
            <Button leftIcon={<FaBitcoin />} colorScheme="yellow" variant="solid">
              Bitcoin
            </Button>
            <Button leftIcon={<FaEthereum />} colorScheme="yellow" variant="outline">
              Ethereum
            </Button>
          </VStack>
          <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTQ4NDMyNDB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="300px" objectFit="cover" alt="Blockchain Technology" />
        </Box>
        <Box bg="yellow.300" color="purple.700" p={5} borderRadius="lg">
          <Heading mb={4}>Learn More</Heading>
          <Text fontSize="lg">Explore how blockchain is being applied beyond cryptocurrencies like Bitcoin and Ethereum.</Text>
          <Link href="https://www.blockchain.com" isExternal>
            <Button rightIcon={<FaLink />} colorScheme="purple" mt={4}>
              Visit Blockchain.com
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
