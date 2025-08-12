import React from 'react'
import { faBagShopping, faDollar, faSackDollar, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SellerSalesCard from './SellerSalesCard'

const SellerSales = () => {
    return (
        <div className='flex items-center justify-between px-28 py-14 gap-y-2 flex-wrap'>
            <SellerSalesCard icon={<FontAwesomeIcon icon={faShop} />} sales='10.5K' content='Seller active our site' />
            <SellerSalesCard icon={<FontAwesomeIcon icon={faDollar} />} sales='30K' content='Monthly sales product' />
            <SellerSalesCard icon={<FontAwesomeIcon icon={faBagShopping} />} sales='45.5K' content='customer active in our site' />
            <SellerSalesCard icon={<FontAwesomeIcon icon={faSackDollar} />} sales='25K' content='Anual gross sales in our site' />
        </div>
    )
}

export default SellerSales