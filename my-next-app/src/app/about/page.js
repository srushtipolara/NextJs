import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import Image from 'next/image';
import Button from '@/view/button';
import done from '../../../assets/done_all_24px.jpg'

export const metadata = {
  title: 'About'
}


async function getData() {
  try {
    const res = await axios.get("http://localhost:5000/category")
    return res.data;
  } catch (error) {
    throw new Error(error)
  }
}

const Page = async () => {

  const data = await getData()

  return (
    <main style={{ height: "500px" }}>
      <p>About Page</p>
      <Image src={done} alt='done' />
      <br />
      {
        data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Link href={`/blog/${item._id}`}>{item.title}</Link>
              <Button item={item}/>
              <br />
            </React.Fragment>
          )
        })
      }
    </main>
  )
}

export default Page