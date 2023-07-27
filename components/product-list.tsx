import { FC } from 'react'

import { Product } from '@/types';

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: FC<ProductListProps> = ({ title, items }) => {

    return (
        <div className='space-y-4'>
            <h3>{title}</h3>
        </div>
    )
}

export default ProductList