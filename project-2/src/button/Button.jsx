import './button.css'
function Button() {
  return (
<>
<div className="btn">
    <button className='btn-1'>
    <img src="/images/message.png" alt="massege" />
    <p>VIA SUPPORT CHAT</p>
   </button>
   <button className='btn-2'>
    <img src="/images/phone.png" alt="phone" />
    <p>VIA CALL</p>
   </button>
</div>
<button className='btn-3'>
<img src="/images/message.png" alt="massege" />
    <p>VIA EMAIL FROM</p>
</button>

<form >
  <div className="contatent">
  <div className='name'>
  <label htmlFor="name"> Name:</label>
    <input type="text" />
    </div>
    <div className='email'>
    <label htmlFor="email">Email :</label>
    <input type="email" />
    </div>
    <div className='text'>
    <label htmlFor="text">Text :</label>
  <textarea name="text" id="text" cols="30" rows="10"></textarea>
    </div>
    <button className='submit'>Submit</button>

  </div>

  <div className="women">
    <img className='controlimage' src="./images/women.svg" alt="women" />
  </div>
</form>
 </>

  )
}

export default Button