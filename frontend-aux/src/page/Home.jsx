import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div class="min-h-dvh  flex items-center bg-no-repeat bg-cover bg-center bg-my-b relative" Home >
      <div className='p-8 flex-col justify-between max-w-[60rem] ' >
      <h3 className='text-8xl text-slate-100 font-bold uppercase'>Recepies from around the globe</h3>
      <p className='text-xl leading-relaxed text-slate-100 '>Maybe you want to try somenthing new or something old, you've come to the right place
        We have just what you want, but if that's not the case, no problem, you can add a recepit yourself.
        <button className='mt-4 inline-block font-bold text-amber-950 text-3xl py-3 px-12 bg-amber-100'>
        <Link to='/login' >Login here </Link>
          </button>

      </p>
      </div>
    </div>
  )
}
