import React from 'react'

// [...slug] => we can add nested page route like /blog/id/text/...
// [[...slug]] => we can get data on blog path

const SlugPage = ({params :{slug}}) => {
  return (
    <div>Slug : {slug}</div>
  )
}

export default SlugPage