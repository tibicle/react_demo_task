import React from 'react'

const EditPenIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.9761 6.03465C18.9768 5.92498 18.9557 5.81626 18.9143 5.71473C18.8728 5.6132 18.8117 5.52085 18.7345 5.44298L15.2011 1.90965C15.1233 1.83241 15.0309 1.77131 14.9294 1.72984C14.8279 1.68837 14.7191 1.66735 14.6095 1.66798C14.4998 1.66735 14.3911 1.68837 14.2895 1.72984C14.188 1.77131 14.0957 1.83241 14.0178 1.90965L11.6595 4.26798L2.55113 13.3763C2.47389 13.4542 2.41279 13.5465 2.37132 13.6481C2.32985 13.7496 2.30883 13.8583 2.30946 13.968V17.5013C2.30946 17.7223 2.39726 17.9343 2.55354 18.0906C2.70982 18.2469 2.92178 18.3347 3.1428 18.3347H6.67613C6.79274 18.341 6.90937 18.3228 7.01848 18.2811C7.12758 18.2395 7.22672 18.1754 7.30946 18.093L16.3678 8.98465L18.7345 6.66798C18.8105 6.58722 18.8725 6.49426 18.9178 6.39298C18.9258 6.32656 18.9258 6.25941 18.9178 6.19298C18.9217 6.15419 18.9217 6.11511 18.9178 6.07632L18.9761 6.03465ZM6.33446 16.668H3.97613V14.3097L12.2511 6.03465L14.6095 8.39298L6.33446 16.668ZM15.7845 7.21798L13.4261 4.85965L14.6095 3.68465L16.9595 6.03465L15.7845 7.21798Z"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        fill={props.className ?? '#494A4C'}
      />
    </svg>
  )
}

export default EditPenIcon
