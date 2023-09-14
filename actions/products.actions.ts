import { Category, Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}
export const getProducts = async(query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        }
    })
    const res = await fetch(url)
    const data = await res.json()
    console.log({ data })
    return data
}
export const getProduct = async(id: string): Promise<Product> => {

    const res = await fetch(`${URL}/${id}`)
    return await res.json()
}
