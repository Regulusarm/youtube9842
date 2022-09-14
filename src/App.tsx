import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import WithSubnavigation from "./components/WithSubnavigation"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <WithSubnavigation />
    </Box>
  </ChakraProvider>
)
