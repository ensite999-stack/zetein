export default function Hero(){


return (

<section

className="
min-h-screen

flex
flex-col
items-center
justify-center

px-5

pt-20

text-center
"

>



<h1

className="
max-w-4xl

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




<div

className="
mt-12

flex

w-full

max-w-2xl

overflow-hidden

rounded-2xl

border

border-white/10

bg-white/[0.04]

backdrop-blur-xl

"

>


<input

placeholder="Search your domain..."

className="
h-16

flex-1

bg-transparent

px-6

text-white

placeholder:text-white/40

outline-none

"

/>



<button

className="
h-16

px-8

bg-[#12CFE3]

font-semibold

text-[#001014]

hover:opacity-90

"

>

Search

</button>



</div>



<div

className="
mt-10

flex

gap-10

text-sm

text-white/40
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
