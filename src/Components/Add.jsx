import React, { useState } from 'react';

const Add = ({addmovie}) => {
    const [show, setShow]= useState(false);
    const[movie,setmovie]= useState({
        title:"",
        description:"",
        posterurl:"",
        rate:"",
    })
  return (
    <div className='addmovie'>
        <button className='addbtnn' onClick={()=>setShow(!show)}>Add new movie</button>
     {
         show? (
     <div className='modalbg'>
        <div className='modalcontent'>
             <button className='closebtn' onClick={()=>setShow(!show)}>x</button>
             <div className='inputs'>
             <input type="text"placeholder='enter title' onChange={(e)=>setmovie({...movie,title:e.target.value})} />
             <input type="text"  placeholder='enter description'onChange={(e)=>setmovie({...movie,description:e.target.value})}/>
             <input type="text"  placeholder='enter image'onChange={(e)=>setmovie({...movie,posterurl:e.target.value})}/>
             <input type="number" placeholder='enter rate'onChange={(e)=>setmovie({...movie,rate:e.target.value})}/>
         </div>
             <button className='addbtn' onClick={()=>{addmovie(movie);setShow(!show)}}>Add movie</button>
    </div>
    </div>):null
}
    </div>
 ) ;
};

export default Add;
