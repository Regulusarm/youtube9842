import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react"

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return <chakra.img src={'https://www.svgrepo.com/show/308977/youtube-play-button-play-video-youtube-logo.svg'} ref={ref} {...props} />
})
