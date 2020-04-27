import React from 'react'

export default function Sidebar() {
  return (
    <ul>
      <li>
        <a href='/important'>
          <i className='fas fa-star'></i> Important
        </a>
      </li>
      <li>
        <a href='github'>
          <i className='fab fa-github'></i> Github
        </a>
      </li>
      <li>
        <a href='/tools'>
          <i className='fas fa-tools'></i> Tools
        </a>
      </li>
    </ul>
  )
}
