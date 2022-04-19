import { NextPage } from "next"

const CommunityHome:NextPage =()=>{
  return (
    <div>
      <label>
      <input type='text' list='list'/>
      <datalist id='list'></datalist>
      </label>
    </div>
  )
}

export default CommunityHome