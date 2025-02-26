import React from 'react'

const ActivityDot = ({ fill, stroke }: { fill: string; stroke: string }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8.5" r="7" fill={fill} stroke={stroke} strokeWidth="2" />
    </svg>
  )
}

export default ActivityDot
