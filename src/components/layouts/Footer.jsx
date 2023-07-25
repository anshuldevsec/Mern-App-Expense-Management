import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
    <Link to={'/'} className="flex mb-3 justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
    Expense Management
    </Link>
      <span className="text-sm mt-6 text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <Link to={'/'} className="hover:underline">Expense Management™</Link>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer