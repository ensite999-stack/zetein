"use client";

import Image from "next/image";


export default function Navbar(){

return (

<header
className="
fixed
top-0
left-0
z-50
w-full

border-b
border-white/10

bg-[#0B0E14]/90

backdrop-blur-xl
"
>


<nav

className="
flex
h-20

items-center
justify-between

px-5
"

>


{/* logo */}

<div>

<Image

src="/zetein-logo.png"

alt="Zetein"

width={48}

height={48}

priority

className="
h-12
w-12
object-contain
"

/>

</div>



{/* menu */}

<button

className="
flex

flex-col

gap-2

p-2

"

aria-label="menu"

>


<span

className="
block

h-[3px]

w-9

rounded-full

bg-white

"

/>


<span

className="
block

h-[3px]

w-9

rounded-full

bg-white

"

/>


<span

className="
block

h-[3px]

w-9

rounded-full

bg-white

"

/>


</button>



</nav>


</header>

)

}
