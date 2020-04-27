import React from 'react'

export default function Form(props) {
  const { handleChange, handleSubmit, clearInputTexts } = props
  const { bookmarkTitle, bookmarkUrl, groupName } = props.data

  return (
    <form onSubmit={handleSubmit}>
      <div className='text-field'>
        <label>
          Input bookmark <i className='fas fa-bookmark'></i>
        </label>
        <input
          type='text'
          name='title'
          placeholder='Bookmark title'
          value={bookmarkTitle}
          onChange={handleChange}
        />
      </div>
      <div className='text-field'>
        <label>
          Input URL <i className='fas fa-link'></i>
        </label>
        <input
          type='text'
          name='url'
          placeholder='http://example.com'
          value={bookmarkUrl}
          onChange={handleChange}
        />
      </div>
      <div className='text-field'>
        <label>
          Input group <i className='fas fa-layer-group'></i>
        </label>
        <input
          type='text'
          name='groupName'
          placeholder='Tools'
          value={groupName}
          onChange={handleChange}
        />
      </div>
      <div className='button-group'>
        <button type='submit'>
          <i className='fas fa-arrow-up'></i> Submit
        </button>
        <button type='button' onClick={clearInputTexts}>
          <i className='fas fa-backspace'></i> Clear
        </button>
      </div>
    </form>
  )
}
