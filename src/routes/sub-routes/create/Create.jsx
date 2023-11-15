import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Create = () => {
  const [value, setValue] = React.useState('')
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Title'/>
        <ReactQuill theme='snow' value={value} onChange={setValue}/>
        <select id=''>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create