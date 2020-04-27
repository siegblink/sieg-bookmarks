import React from 'react'

export default function Form(props) {
  const { handleChange, handleSubmit, clearInputTexts } = props
  const { bookmarkTitle, bookmarkUrl, groupName } = props.data

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-field'>
        <label>Input bookmark</label>
        <input
          type='text'
          name='title'
          placeholder='Bookmark title'
          value={bookmarkTitle}
          onChange={handleChange}
        />
      </div>
      <div className='text-field'>
        <label>Input URL</label>
        <input
          type='text'
          name='url'
          placeholder='http://example.com'
          value={bookmarkUrl}
          onChange={handleChange}
        />
      </div>
      <div className='text-field'>
        <label>Input group</label>
        <input
          type='text'
          name='groupName'
          placeholder='Tools'
          value={groupName}
          onChange={handleChange}
        />
      </div>
      <div className='button-group'>
        <button type='submit'>Submit</button>
        <button type='button' onClick={clearInputTexts}>
          Clear
        </button>
      </div>
    </form>
  )
}
