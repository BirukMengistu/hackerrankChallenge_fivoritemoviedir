
import React from 'react'
import Header from './Header'
import './styles.css'
import PopUp from './PopUp'

import Feed from './Feed'
const ForumAPP = () => {
  return (
    <div className='forum_body'>
      <div className='forum'>
         <Header/>
         <Feed/>
         {/* <PopUp/> */}
         
      </div>
      
    </div>
  )
}

export default ForumAPP