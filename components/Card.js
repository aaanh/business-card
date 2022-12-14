import CardFront from "./CardFront"
import CardBack from "./CardBack"
import { useEffect, useState } from "react"
import { FaExchangeAlt } from "react-icons/fa"

import { BsArrowBarRight } from "react-icons/bs"

export default function Card() {

	const [isFront, setIsFront] = useState(true)
	
	useEffect(() => {
    // set localstorage theme according to global preference
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  })

	return (
		<div className="font-['Be_Vietnam_Pro'] font-light relative m-2 sm:m-0 rounded-md border border-green-500 dark:border-green-300 p-6 flex flex-col flex-wrap sm:w-[512px] w-full min-h-[312px]">
			{ isFront && <CardFront isFront={isFront} /> } 

			{ !isFront && <CardBack isFront={!isFront} /> } 

			<div className="absolute right-4 bottom-4">
				<button onClick={(e) => { e.preventDefault(); setIsFront(!isFront)}} className="text-2xl text-green-500 hover:text-white hover:bg-green-500 rounded-full w-8 h-8 flex items-center justify-center transition-all ease-in-out">
					<BsArrowBarRight></BsArrowBarRight>
				</button>
			</div>

			<button
						className="absolute right-4 top-4 w-8 h-8 text-2xl text-green-500 dark:text-green-500 hover:bg-green-500 hover:text-white hover:dark:text-neutral-900 rounded-full transition-all ease-in-out dark:hover:bg-green-500 flex items-center justify-center"
						onClick={() => {
							if (localStorage.getItem("theme") === "dark") {
								document.documentElement.classList.remove("dark");
								localStorage.setItem("theme", "light");
								
							} else {
								document.documentElement.classList.add("dark");
								localStorage.setItem("theme", "dark");
								
							}
						}}
					>
						<FaExchangeAlt></FaExchangeAlt>
		</button>

		</div>
	)
}

