import React, { useState } from 'react';


function Todo(){
     const [activity, setActivity]= useState("");
     const [listData, setlistData]= useState([]);
     function addActivity(){
        // setlistData([...listData, activity])
        // console.log(listData);
         setlistData((listData)=>{
            const updatedList =[...listData, activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
         })
     }
     function removeActivity(i){
         const updatedListData = listData.filter((element,id)=>{
          return i!=id;
         })
         setlistData(updatedListData);
     }
    return(
        <>
        <div className='container'>
          <div className='header'>TO-DO LIST</div>
          <input type='text' placeholder='Add Activity' value={activity} onChange= {(e)=>setActivity(e.target.value)}/>
          <button onClick={addActivity} >Add</button>
       
      
            {listData!=[] && listData.map((data, i)=>{
                  return(
                    <>
                    <p key={i}>
                        <div className='listdata'>{data}</div>
                        <div className='remove-btn'>
                            <button onClick={()=>removeActivity(i)}>Remove</button>
                        </div>

                    </p>
                    </>
                  )
            })}
        </div>
      
            
            
       
        </>
    )
} 

export default Todo;