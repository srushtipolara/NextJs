"use client"
import React from 'react'
import { useRouter } from 'next/router'

const SlugIndex = async () => {
  const router = useRouter()
  return (
    <div>SlugIndex: {router.query.slug}</div>
  )
}

export default SlugIndex