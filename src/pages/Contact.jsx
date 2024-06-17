function Contact() {
  return(
      <div className="flex items-center justify-center flex-col ">
        <h1 className="text-4xl font-bold w-[540px] text-center mb-10">Sevimli restoranlaringizdan <span className="text-4xl font-bold text-violet-700">tez ovqat yetkazib berish</span></h1>
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>     
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
      <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://lh3.googleusercontent.com/a/ACg8ocJLgdSckEcZrtgNDqZxjJfXzzgNHsnamY8YRPf8Sb6EIa8j9bQ=s96-c" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full ">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
  <div className="modal-action">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     <button className="btn"><a href="https://uzumtezkor.uz/ru?utm_source=google&utm_medium=cpc&utm_campaign=TEZKOR_ALWN_B2C_TASH_WEB_DM_GOOGLE_SRCH_BRND_TRAFFIC&utm_content=664713444151&utm_term=uzum%20tezkor&gad_source=1&gclid=CjwKCAjwuJ2xBhA3EiwAMVjkVBxhRokPqGNaK2T42fDNW_SigkmkM7lnSaYBWEvQiQRNdx-8mx4FCRoCNTQQAvD_BwE">close</a></button>
   </form>
  </div>
  </div>
  </dialog>
  </div>
  )
}

export default Contact