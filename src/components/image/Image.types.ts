import { BoxProps, SxProps } from "@mui/material"

export interface ImageProps extends BoxProps {
  src: string
  width: number | string
  height: number | string
  alt: string
  sx?: SxProps
}