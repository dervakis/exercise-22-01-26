import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductById } from '../query/productQuery';
import Loader from '../common/Loader';

function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const nid = id ? parseInt(id, 0) : 0

  const { data: item, isLoading, error } = useProductById(nid)
  if (isLoading)
    <Loader />
  if (error)
    window.alert(error);

  return (
    <div>
      <div className="p-6 flex gap-6">
        <img
          className="mx-auto"
          src={item?.images[0]}
          alt={item?.title}
        />
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">{item?.title}</h1>
          <p className="text-gray-600">{item?.description}</p>
          <p className="text-gray-800 font-bold">Price: ${item?.price}</p>
          <p className="text-gray-600">Stock: {item?.stock}</p>
          <p className="text-gray-600">Brand: {item?.brand}</p>
          <p className='text-gray-600 font-bold'> Review :</p>
          {
            item?.reviews.map((r, index) =>
              <div key={index}>
                <p className="text-gray-600">rating: {r?.rating}</p>
                <p className="text-gray-600">comment: {r?.comment}</p>
                <p className="text-gray-600">date: {new Date(r?.date).toLocaleDateString('en-GB')}</p>
                <p className="text-gray-600">reviewerName: {r?.reviewerName}</p>
                <p className="text-gray-600">reviewerEmail: {r?.reviewerEmail}</p>
              </div>
            )

          }

          {/* rating: number,
  comment: string,
  date: Date,
  reviewerName: string,
  reviewerEmail: string */}
        </div>
      </div>
    </div>
  )
}

export default ItemDetails