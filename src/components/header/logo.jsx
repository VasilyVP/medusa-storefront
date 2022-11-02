import React from 'react'
import CartPopover from "./cart-popover"

export default () => {
    return (
        <div className="flex items-center justify-center h-[65px] bg-ui-light"> {/* border-solid border-2 border-green-500 */}
            <div className='flex items-center justify-center w-9/12'>
                <div className='w-1/12' />
                <div className='grow flex items-center justify-center'>
                    <img width='125px' src='https://assets-global.website-files.com/61e8ddf1172709663d19c3b4/61f4e6f4200a00771bd2a316_barneybed_logo.png'></img>
                </div>
                <div className='w-1/12 flex items-center justify-center'>
                    <CartPopover /* cart={mockData.cart} */ />
                </div>
            </div>
        </div>
    )
}
