//import { Link } from "gatsby"
import React/* , { useState } */ from "react"
import Logo from "./logo"
import Navigation from './navigation'
//import AccountPopover from "./account-popover"
import Banner from "./banner"
/* import CartPopover from "./cart-popover"
import HeaderLink from "./header-link"
import MobileMenu from "./mobile-menu"
import RegionPopover from "./region-popover" */

const mockData = {
  customer: {
    first_name: "Kasper",
    last_name: "F. Kristensen",
  },
  cart: {
    currency_code: "DKK",
    items: [
      {
        title: "Medusa Tote",
        amount: 12500,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Cover",
        amount: 9000,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Sweatshirt",
        amount: 28000,
        quantity: 2,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
    ],
  },
  regions: [
    {
      id: "1",
      name: "Denmark",
      currency_code: "DKK",
      countries: [
        {
          display_name: "Denmark",
        },
      ],
    },
    {
      id: "2",
      name: "Norway",
      currency_code: "NOK",
      countries: [
        {
          display_name: "Norway",
        },
      ],
    },
    {
      id: "3",
      name: "Europe",
      currency_code: "EUR",
      countries: [
        {
          display_name: "Germany",
        },
        {
          display_name: "France",
        },
        {
          display_name: "Italy",
        },
        {
          display_name: "Spain",
        },
      ],
    },
  ],
}

const Header = () => {
  //const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-20">
      <header className="relative bg-ui-light">
        <Banner />
        {/* <MobileMenu open={open} setOpen={setOpen} /> */}
        <Logo />
        <Navigation />
        <hr className='mt-2 border-solid border-1 border-[#d4d4d4]' />
      </header>
    </div>
  )
}

export default Header
