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
bg-[#0B0E14]/80
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
md:px-8
"
>


{/* Logo */}

<div
className="
flex
items-center
"
>

<Image

src="/zetein-logo.png"

alt="Zetein"

width={42}

height={42}

className="
object-contain
"

/>

</div>



{/* Right */}

<div
className="
flex
items-center
gap-8
"
>


<button
className="
hidden
md:block

text-sm
text-white/80

hover:text-white
"
>
Register
</button>



<button

className="
flex
h-10
w-10
flex-col
justify-center
gap-1.5

"

>


<span
className="
h-[2px]
w-6
bg-white
"
/>

<span
className="
h-[2px]
w-6
bg-white
"
/>

<span
className="
h-[2px]
w-6
bg-white
"
/>


</button>


</div>


</nav>


</header>

)

}
