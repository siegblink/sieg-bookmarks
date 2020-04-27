import React from 'react'

export default function BookmarkItem(props) {
  const { title, url } = props

  return (
    <li>
      <a href={url}>
        <p>{title}</p>
        <p>{url}</p>
      </a>
    </li>
  )
}
