import React from 'react'

const HeaderFourm = () => {
  return (
    <header>
            <div className='header-info-container'>
                    <div className='user-info-container'>
                        <h3>username</h3>
                        <p>Forum <span className='forum-info'>
                            HabeshaIT.com</span></p>
                        
                    </div>
                    <div className='img-conatiner'>
                    <img src='' alt='profile-avater'/>
                    </div>
            </div>
            <p>bio</p>
            <div className='sub-info-conatiner'>
                <p className='sub-text'>
                     x folwers</p>
            </div>
            <button className='primary'
            onClick={()=>navigator.clipboard.writeText('I am click')}>share profie</button>
     
                <div className='button-container'>
                        <button className='current' >forum</button>
                        <button className='current'>replies</button>
                </div>
    </header>
  )
}

export default HeaderFourm
