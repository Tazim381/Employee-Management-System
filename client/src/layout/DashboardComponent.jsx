import React from 'react'

const DashboardComponent = (props) => {
  return (
    <div className='flex  border-4 border-orange-600  w-full h-[20vh]  items-center justify-around p-5  shadow-orange-500 rounded-md' >
          <div>
          <p className='text-6xl'>{props.icon}</p>
          </div>
          <div>
          <p className='text-2xl font-bold'>{props.content}</p>
          <p>{props.title}</p>
          </div>

         
    </div>
  )
}

export default DashboardComponent