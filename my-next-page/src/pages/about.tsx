"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { NextResponse } from 'next/server';

async function GetData() {
  try {
    const res = await axios.get("http://localhost:5000/category")
    return res.data;
  } catch (error) {
    throw new Error(error)
  }
}

const About = () => {


  let id = Math.floor(Math.random() * (20 - 10) + 10)
  const [data, setData] = useState([])

  useEffect(() => {

    let response = NextResponse.next()
    response.cookies.set('show-banner', 'false')

    const fetchData = async () => {
      const getData = await GetData()
      setData(getData)
    }
    fetchData()
  }, [])

  console.log("data ==>", data);

  if (!data) return <div>Loading...</div>

  return (
    <main>
      <div>About</div>
      <Link href={`/Blog/${id}`}>Blog</Link>
      {/* <button onClick={() => router.push(`/Blog/${id}`)}>Blog</button> */}
    </main>
  )
}

export default About