import React, { useEffect, useState } from "react"
import { classNames } from "../../utils/class-names"

const Banner = () => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (localStorage) {
      setIsHidden(localStorage.getItem("hideBannerMsg") === "true")
    }
  }, [])

  const hideBanner = () => {
    localStorage.setItem("hideBannerMsg", "true")
    setIsHidden(true)
  }

  return (
    <>
      <div
        className={classNames(
          //isHidden ? "hidden" : "",
          "bg-[#636363]  flex items-center justify-between px-4 sm:px-6 lg:pt-[6px] lg:pr-[7px] lg:pb-[6px] lg:pl-4" // bg-ui-medium h-7
        )}
      >
        <p className="text-[#e1e0de] text-[13px] leading-[20px] font-light">BARNEY BED</p> {/* #e5d2d6 */}
        {/* <button onClick={() => hideBanner()}>&times;</button> */}
      </div>
      <div className="bg-[#e9eae5] text-[14px] leading-[20px] h-[30px]  flex items-center justify-center">
        <p className="text-[#515151]">FREE DELIVERY & FAST SHIPPING IN THE USA</p>
      </div>
    </>
  )
}

export default Banner
