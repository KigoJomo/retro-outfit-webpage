import React from 'react'

const LightArrow: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <path
        d="M24.7071 13.2929C24.3166 12.9024 23.6834 12.9024 23.2929 13.2929L16.9289 19.6569C16.5384 20.0474 16.5384 20.6805 16.9289 21.0711C17.3195 21.4616 17.9526 21.4616 18.3431 21.0711L24 15.4142L29.6569 21.0711C30.0474 21.4616 30.6805 21.4616 31.0711 21.0711C31.4616 20.6805 31.4616 20.0474 31.0711 19.6569L24.7071 13.2929ZM25 34V14H23V34H25Z"
        fill="#242424"
      />
    </svg>
  )
}

export default LightArrow;
