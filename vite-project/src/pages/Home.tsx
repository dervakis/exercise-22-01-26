import React, { useEffect, useState, type ChangeEvent } from 'react'
import { useCategory, useProductByCategory, useProductBySearch, useProducts } from '../query/productQuery'
import Loader from '../common/Loader';
import Card from '../common/Card';
import { EyeIcon, Search, Siren, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/Store.tsx';
import { AddItem } from '../store/CartSlice';
import type { Item } from '../common/Item.ts';

export default function Home() {
    const { data: products, isLoading, error } = useProducts();
    const { data: category, isLoading: isLoading2, error: error2 } = useCategory();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [catname, setCatname] = useState<string>();
    const [searchText, setSearchText] = useState<string>();
    const [delaySearchText, setDelaySearchText] = useState<string>();
    const { data: category_prodeuct, isLoading: isLoading3, error: error3 } = useProductByCategory(catname!)
    const { data: searched_product, isLoading: isLoading4, error: error4 } = useProductBySearch(delaySearchText!)

    // const [items, setItems] = useState<Item[]>();
    useEffect(()=>{
        const pause = setTimeout(()=>{
            setDelaySearchText(searchText);
        },500)
        return () => {
            clearInterval(pause);
        }
    }, [searchText])

    if (isLoading || isLoading2 || isLoading3 || isLoading4)
        return <Loader />
    if (error || error2 || error3)
        window.alert(error)

    const handleDetail = (id: number) => {
        // console.log()
        navigate(`/shop/product/${id}`)
    }
    const addToCart = (id: number, price: number, title: string) => {
        dispatch(AddItem({ id, price, title, quantity: 1 }));
        alert("added in cart")
    }
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value == 'all')
            setCatname(undefined);
        else
            setCatname(e.target.value);
    }

    let items: Item[] = []

    if (catname) {
        items = category_prodeuct || []
        // setItems(category_prodeuct);
    } else if (searchText) {
        items = searched_product || []
    }
    else {
        items = products || []
        // setItems(product)
    }

    return (
        <div className="w-full container justify-between p-4 ">
            <div className="flex text-4xl justify-center font-bold mb-6 text-gray-800">
                Items •
                <div className='mx-4'>
                    <select value={catname} onChange={handleSelect} className="px-3 py-2.5 bg-neutral-secondary-medium border text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                        <option key="All" value="all"> All</option>
                        {category && category.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                •
                <div className='flex mx-4'>
                    <input className="bg-gray-200 border-2 font-normal text-sm border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="text" value={searchText} onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearchText(e.target.value)} />
                </div>
            </div>
            <div className='flex justify-between p-4'>
                <div className="grid grid-cols-3 gap-4">
                    {items && items.length > 0 ? items.map(i =>
                        <Card key={i.id} images={i.images} price={i.price} title={i.title} description={i.description} stock={i.stock} category={i.category}>
                            <div className='absolute top-0 left-0 text-red-500'>
                                {i.price > 30000 && (
                                    <div className='flex item-center font-bold'>
                                        <Tag /> Premium
                                    </div>
                                )}

                                {i.stock < 6 && (
                                    <div className='flex item-center font-bold'>
                                        <Siren /> Limited Deal
                                    </div>
                                )}
                            </div>
                            <div className='bottom-0 right-0 fond-bold'>
                                <EyeIcon onClick={() => handleDetail(i.id)} />
                            </div>
                            <div className='mb-10'></div>
                            <div className='absolute inset-x-0 bottom-0'>
                                <div onClick={() => addToCart(i.id, i.price, i.title)} className='bg-blue-400 w-1/3 text-center place-self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                    Add to Cart
                                </div>
                            </div>
                        </Card>
                    ) : 'no Content found'
                    }
                </div>
            </div>
        </div>
    )
}
