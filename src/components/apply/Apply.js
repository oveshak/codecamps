import React from 'react'
import "./apply.css"
const Apply = () => {
  return (
    <>
        <div className='apply-container'>
            <div className='apply'>
            <h2>Full Stack Developer<span class="modal_border__HuRWX"></span></h2>
            <form>
                <input type="text" id="fullname" name="fullname" placeholder="ENTER FULL NAME" value=""/>
                <input type="email" id="email" name="email" placeholder="ENTER EMAIL ID" value=""/>
                <input type="phone" id="phone" name="phone" placeholder="ENTER PHONE NUMBER" value=""/>
                <button type="submit">Apply Now</button></form>
            </div>
        </div>
    </>
  )
}

export default Apply