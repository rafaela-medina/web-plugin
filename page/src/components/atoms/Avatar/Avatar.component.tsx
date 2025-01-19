import React from 'react'
import { StyledAvatar } from './Avatar.styles'

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 100 }) => {
  return <StyledAvatar src={src} alt={alt} size={size} />
}
