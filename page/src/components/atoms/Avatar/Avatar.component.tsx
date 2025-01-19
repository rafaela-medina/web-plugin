import React from 'react'
import { StyledAvatar } from './Avatar.styles'

interface AvatarProps {
  src: string
  alt: string
  size?: 'small' | 'medium' | 'large'
  round?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium', round = true }) => {
  return <StyledAvatar src={src} alt={alt} size={size} round={round} />
}

export default Avatar
