import React from 'react'

const DoubleCheckIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_10140_38745)">
        <path d="M11.5625 6.5625L4.6875 13.4375L1.25 10.0002" stroke="#494A4C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.7498 6.5625L11.8748 13.4375L10.0488 11.6116" stroke="#494A4C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_10140_38745">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DoubleCheckIcon
