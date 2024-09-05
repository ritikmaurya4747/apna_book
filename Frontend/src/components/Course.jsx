import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
           <div className="pt-28 items-center justify-center text-center">
           <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className="text-pink-500">Here! :)</span>
           </h1>
           <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae eos reiciendis modi ut consequuntur non nesciunt, optio voluptatem cum sit maiores quia neque debitis dolorem enim iste accusamus, quasi unde quis architecto? Recusandae adipisci voluptatum nihil nam autem, vero rerum ratione, fugiat aspernatur tenetur minus distinctio fuga minima itaque?
           </p>
            {/* Using Link isase hm home page par jump karenge */}
           <Link to="/">  
           <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer mt-6'>back</button>

           </Link>
           </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
           </div>
        </div>
    </>
  )
}

export default Course