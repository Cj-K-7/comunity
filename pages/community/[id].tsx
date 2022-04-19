import { useRouter } from 'next/router'
import React from 'react'

const postContent = () => {
    const router = useRouter()
    const { id } = router.query
 return (
    <div>id : {id}</div>
  )
}

export default postContent