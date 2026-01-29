import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../store/Store'
import { CheckCircle } from 'lucide-react';
import { RemoveItem } from '../store/CartSlice';

function Cart() {
    const items = useSelector((state: RootState) => state.cart.items)
    console.log(items.length)
    const dispatch = useDispatch<AppDispatch>();
    const RemoveFromCart = (id: number) => {
        dispatch(RemoveItem(id))
    }
    return (
        <div><table className="min-w-full table-auto shadow-md">
            <thead>
                <tr className='border-b'>
                    <th className='py-2 px-2 text-sm font-medium'>Id</th>
                    <th className='py-2 px-2 text-sm font-medium'>Title</th>
                    <th className='py-2 px-2 text-sm font-medium'>Price</th>
                    <th className='py-2 px-2 text-sm font-medium'>Quantity</th>
                    <th className='py-2 px-2 text-sm font-medium'>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((i) => (
                    <tr key={i.id}><td className='py-2 px-2 text-sm font-medium'>{i.id}</td>
                        <td className='py-2 px-2 text-sm font-medium'>{i.title}</td>
                        <td className='py-2 px-2 text-sm font-medium'>{i.price}</td>
                        <td className='py-2 px-2 text-sm font-medium'>{i.quantity}</td>
                        <td className='py-2 px-2 text-sm font-medium'>
                            <CheckCircle onClick={() => RemoveFromCart(i.id)} />
                        </td>

                    </tr>

                ))}
            </tbody>
        </table></div>
    )
}

export default Cart