"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";


export default function Home() {

const [open,setOpen]=useState<number|null>(null);


const faq=[
{
q:"为什么选择Zetein?",
a:"Zetein提供快速、准确、无广告的.xyz域名搜索体验，让用户更简单地找到适合自己的数字身份。"
},
{
q:"为什么选择.xyz?",
a:".xyz是面向未来互联网的新一代域名，适合AI、科技、创业项目以及个人品牌。"
},
{
q:"如何注册.xyz域名?",
a:"输入你的目标域名，查询可用状态，然后通过支持的注册商完成注册。"
}
];


return (

<main>


<Navbar/>


{/* HERO */}

<section
className="
min-h-screen
bg-[#06B6D4]
flex
items-center
px-6
pt-20
"
>

<div
className="
mx-auto
max-w-6xl
w-full
"
>


<h1
className="
text-white
text-6xl
md:text-8xl
font-bold
tracking-tight
max-w-4xl
"
>

Explore
<br/>
the world of
<span>
.xyz
</span>

</h1>


<p
className="
mt-8
text-white/90
text-xl
max-w-xl
"
>

Discover and register your next
digital identity.

</p>



<div
className="
mt-12
max-w-4xl
bg-white
rounded-2xl
p-3
shadow-xl
flex
"
>

<input

placeholder="Search your domain"

className="
flex-1
px-6
text-lg
outline-none
"

/>


<div
className="
px-5
flex
items-center
text-gray-400
"
>
.xyz
</div>


<button
className="
bg-black
text-white
rounded-xl
px-8
"
>
Search
</button>


</div>


</div>

</section>





{/* WHY */}

<section
className="
bg-[#F8FAFC]
px-6
py-24
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<h2
className="
text-5xl
font-bold
"
>
Why Zetein?
</h2>


<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>


<Card
title="Fast"
text="Instant domain search experience."
/>


<Card
title="Accurate"
text="Reliable domain availability information."
/>


<Card
title="No Ads"
text="A clean search experience without distractions."
/>


</div>


</div>


</section>






{/* XYZ */}

<section
className="
bg-white
px-6
py-24
"
>

<div
className="
max-w-6xl
mx-auto
"
>

<h2
className="
text-5xl
font-bold
"
>
Why .xyz?
</h2>


<p
className="
mt-8
max-w-3xl
text-xl
leading-8
text-gray-600
"
>

.xyz is a modern top-level domain
built for the next generation of
internet users. It provides more
freedom for brands, developers
and creators.

</p>


</div>


</section>






{/* HISTORY */}

<section
className="
bg-[#F8FAFC]
px-6
py-24
"
>

<div
className="
max-w-6xl
mx-auto
"
>

<h2
className="
text-5xl
font-bold
"
>
Explore .xyz History
</h2>


<p
className="
mt-8
max-w-4xl
text-gray-600
leading-8
"
>

.xyz launched in 2014 as one of
the new generation domains.

It gained attention from startups,
technology companies, AI projects
and developers.

Advantages:
more available names,
flexible branding,
modern identity.

Challenges:
lower recognition compared
with .com and requires more
brand education.

</p>


</div>

</section>





{/* FAQ */}

<section
className="
bg-white
px-6
py-24
"
>

<div
className="
max-w-4xl
mx-auto
"
>


<h2
className="
text-5xl
font-bold
"
>
Questions answered
</h2>


{
faq.map((item,i)=>(

<div
key={item.q}
className="
border-b
py-6
"
>


<button

onClick={()=>setOpen(open===i?null:i)}

className="
flex
justify-between
w-full
text-xl
"

>

{item.q}

<span>
+
</span>


</button>


{
open===i&&
<p
className="
mt-5
text-gray-500
"
>
{item.a}
</p>
}


</div>


))
}


</div>

</section>






<footer
className="
bg-black
text-white
px-6
py-16
"
>

<div
className="
max-w-6xl
mx-auto
"
>

<h2
className="
text-3xl
font-bold
"
>
Zetein_
</h2>


<div
className="
mt-8
flex
flex-col
gap-4
text-white/70
"
>

<span>关于Zetein</span>

<span>为什么选择我们</span>

<span>.xyz世界</span>

<span>隐私政策</span>

<span>使用条款</span>

<span>联系我们</span>

<span>
hello@zetein.xyz
</span>


</div>


<p
className="
mt-12
text-sm
text-white/40
"
>
© {new Date().getFullYear()} Zetein All Rights Reserved.
</p>


</div>


</footer>


</main>

)

}



function Card({
title,
text
}:{
title:string,
text:string
}){

return(

<div
className="
bg-white
rounded-2xl
p-8
shadow-sm
"
>

<h3
className="
text-2xl
font-bold
"
>
{title}
</h3>

<p
className="
mt-4
text-gray-500
"
>
{text}
</p>


</div>

)

}
