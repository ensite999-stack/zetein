"use client";

import { Search } from "lucide-react";


export default function Hero() {


return (

<section

className="
min-h-screen

bg-[#0B0E14]

px-5

pt-32

"

>


<div

className="
mx-auto

max-w-5xl

text-center

"

>


<h1

className="
text-5xl

font-bold

tracking-tight

text-white

sm:text-7xl

"

>

Find your domain.

</h1>



<p

className="
mx-auto

mt-6

max-w-xl

text-lg

leading-relaxed

text-white/50

sm:text-xl

"

>

Search domains and manage your digital assets.

</p>



{/* Search */}

<div

className="
mx-auto

mt-12

flex

w-full

max-w-3xl

overflow-hidden

rounded-2xl

border

border-white/[0.08]

bg-white/[0.04]

shadow-xl

backdrop-blur-xl

"

>


<input


type="text"

placeholder="Search your domain..."

className="

h-16

min-w-0

flex-1

bg-transparent

px-6

text-base

text-white

placeholder:text-white/40

outline-none

sm:text-lg

"

/>



<button

className="
flex

h-16

items-center

gap-2

bg-[#12CFE3]

px-6

font-semibold

text-[#001014]

transition

hover:bg-[#10B8CA]

sm:px-10

"

>


<Search

size={22}

/>


<span>

Search

</span>


</button>


</div>




<div

className="
mt-10

flex

justify-center

gap-8

text-sm

text-white/40

sm:text-base

"

>

<span>
Fast
</span>


<span>
Simple
</span>


<span>
Private
</span>


</div>



</div>


</section>


)

}
