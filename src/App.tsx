import {
  ChakraProvider,
  Box,
  theme,
  chakra,
  Flex,
} from "@chakra-ui/react"
import WithSubnavigation from "./components/WithSubnavigation"
import logo from "./ayau.jpg"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <WithSubnavigation />
      <Flex justifyContent={'center'} alignItems={'center'}>
       <chakra.img src={logo} />
      </Flex>
    </Box>
  </ChakraProvider>
)
