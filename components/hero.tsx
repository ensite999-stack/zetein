export default function Hero(){


return (

<section

className="
min-h-screen

bg-[#0B0E14]

px-5

pt-32

text-center

"

>



<h1

className="
mx-auto

max-w-4xl

text-5xl

font-bold

leading-tight

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

text-white/60

sm:text-xl

"

>

Search domains and manage your digital assets.

</p>




{/* search */}

<div

className="
mx-auto

mt-12

flex

max-w-2xl

overflow-hidden

rounded-2xl

border

border-white/10

bg-white/[0.04]

"

>


<input

placeholder="Search your domain..."

className="
h-16

flex-1

bg-transparent

px-6

text-lg

text-white

placeholder:text-white/40

outline-none

"

/>


<button

className="
h-16

bg-[#12CFE3]

px-8

font-semibold

text-[#001014]

"

>

Search

</button>



</div>



{/* feature */}

<div

className="
mt-10

flex

justify-center

gap-10

text-white/50

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


</section>

)

}
