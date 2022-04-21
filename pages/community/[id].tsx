import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const PostContent:NextPage = () => {
    const router = useRouter()
    const { id } = router.query
 return (
    <div>id : {id}</div>
  )
}

export default PostContent