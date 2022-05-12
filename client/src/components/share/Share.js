import './share.css'
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from '@material-ui/icons'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useRef, useState } from 'react'
import axios from 'axios'

export default function Share() {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef()
  const [image, setImage] = useState(null)

  console.log(image)
  const handleImageUpload = async (e) => {
    e.preventDefault()
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'social-media')

    const res = await axios.post(
      'https://api.Cloudinary.com/v1_1/dahxl1611/image/upload',
      formData
    )
    setImage({
      url: res.data.url,
      filename: res.data.public_id,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: image,
    }
    try {
      const post = await axios.post('/posts', newPost)
      console.log(post)
    } catch (err) {
      console.log(err)
    }
    window.location.reload()
  }
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          {user.profilePicture ? (
            <img
              className='shareProfileImg'
              src={user.profilePicture.url}
              alt=''
            />
          ) : (
            <img
              className='shareProfileImg'
              src={PF + '/person/noAvatar.png'}
              alt=''
            />
          )}
          <input
            placeholder={"What's in your mind " + user.username + '?'}
            className='shareInput'
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        {image && (
          <div className='shareImgContainer'>
            <img className='shareImg' src={image.url} alt='' />
            <Cancel className='shareCancelImg' onClick={() => setImage(null)} />
          </div>
        )}
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                accept='.png,.jpeg,.jpg'
                onChange={handleImageUpload}
              />
            </label>
            <div className='shareOption'>
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </form>
      </div>
    </div>
  )
}
