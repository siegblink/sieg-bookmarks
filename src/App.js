import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Bookmark from './components/Bookmark'
import Footer from './components/Footer'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [bookmarkTitle, setBookmarkTitle] = useState('')
  const [bookmarkUrl, setBookmarkUrl] = useState('')
  const [groupName, setGroupName] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'title') {
      setBookmarkTitle(value)
    } else if (name === 'url') {
      setBookmarkUrl(value)
    } else {
      setGroupName(value)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!bookmarkTitle && !bookmarkUrl) return

    setBookmarks(function (previousBookmarks) {
      const newBookmark = { title: bookmarkTitle, url: bookmarkUrl }
      return [...previousBookmarks, newBookmark]
    })
  }

  function clearInputTexts() {
    setBookmarkTitle('')
    setBookmarkUrl('')
  }

  return (
    <div className='container'>
      <header>
        <img src={logo} className='app-logo' alt='logo' />
        Sieg's Bookmarks
      </header>
      <aside>
        <Sidebar />
      </aside>
      <article>
        <Form
          data={{ bookmarkTitle, bookmarkUrl, groupName }}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          clearInputTexts={clearInputTexts}
        />
        <ul>
          {bookmarks.map(function (bookmark) {
            return (
              <Bookmark
                key={bookmark.title}
                title={bookmark.title}
                url={bookmark.url}
              />
            )
          })}
        </ul>
      </article>
      <Footer />
    </div>
  )
}

export default App
