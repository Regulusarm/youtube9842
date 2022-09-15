import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react"
import { useEffect } from "react";
import WithSubnavigation from "./components/WithSubnavigation";
import YouTubePlayer from 'youtube-player';

export const App = () => {
  let player: any; 

  function createPlayer() { 
    player = YouTubePlayer('player', {
    height: '360',
    width: '640',
    videoId: '0eIY5b0RKE0',
    playerVars: {
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
    }
    });
    player.mute();
    player.playVideo();
  }

  function play() {
    let video: any
    video = document.getElementById("player")
    video.contentWindow.postMessage( '{"event":"command", "func":"playVideo", "args":""}', '*');
 }

  function pause() {
    let video: any
    video = document.getElementById("player")
    video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
 }

  useEffect(() => {
    createPlayer()
    
  }, [])

   
  return <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <WithSubnavigation />
      <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Flex justifyContent={'center'} alignItems={'start'} flexDirection={'column'}>
          <div id="player"></div>
          <Stack spacing={4} direction='row' mt={2} align='start'>
            <Button colorScheme='teal' size='sm' onClick={() => play()}>
              Play
            </Button>
            <Button colorScheme='teal' size='sm' onClick={() => pause() }>
              Pause
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </ChakraProvider>
}
