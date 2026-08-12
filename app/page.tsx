"use client";


import { useState } from "react";
import Navbar from "@/components/navbar";



const articles = [

  {
    title:"为什么选择我们",
    content:
    "Zetein 专注于提供快速、准确、无广告的 .xyz 域名搜索体验。我们希望让寻找域名变得简单，让用户专注于建立自己的数字身份。"
  },


  {
    title:"为什么选择 .xyz",
    content:
    ".xyz 是新一代通用顶级域名，为创业者、开发者、AI 项目和个人品牌提供更加自由的命名空间。相比传统域名，.xyz 拥有更多可选择的名称。"
  },


  {
    title:"探索 .xyz 历史",
    content:
    ".xyz 于 2014 年推出，是新顶级域名的重要代表之一。随着科技、AI、Web3 和创新项目的发展，越来越多品牌开始使用 .xyz。它的优势是开放、灵活、现代，但相比 .com 仍需要更多用户认知。"
  }

];



export default function Home(){


const [open,setOpen]=useState<number|null>(null);



return (

<main
className="
min-h-screen
bg-[#050505]
text-white
"
>


<Navbar />



{/* HERO */}

<section
className="
px-6
pt-36
pb-24
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
text-7xl
font-black
tracking-[-0.07em]
md:text-9xl
"
>

Zetein
<span className="cursor-blink">
_
</span>

</h1>



<p
className="
mt-8
text-xl
font-light
text-white/60
md:text-3xl
"
>

Explore the world of .xyz

</p>




<div
className="
mx-auto
mt-12
flex
max-w-3xl
rounded-full
bg-white
p-2
shadow-2xl
"
>


<input

placeholder="Search your domain .xyz"

className="
min-w-0
flex-1
rounded-full
px-6
text-base
text-black
outline-none
md:text-lg
"

/>



<button

className="
shrink-0
rounded-full
bg-black
px-8
py-4
text-white
"

>

Search

</button>


</div>


</div>

</section>





{/* ARTICLES */}

<section
className="
border-t
border-white/10
px-6
"
>


<div
className="
mx-auto
max-w-4xl
"
>


{

articles.map((item,index)=>(


<div
key={item.title}
className="
border-b
border-white/10
"
>


<button

onClick={()=>
setOpen(
open===index
?
null
:
index
)
}

className="
flex
w-full
items-center
justify-between
py-10
text-left
"

>


<h2
className="
text-2xl
font-light
md:text-3xl
"
>

{item.title}

</h2>



<span

className="
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-white/20
text-2xl
text-white/70
"

>

{
open===index
?
"−"
:
"+"
}

</span>


</button>




{

open===index &&

<div
className="
pb-10
text-base
leading-8
text-white/60
"
>

{item.content}

</div>

}



</div>


))

}


</div>


</section>






{/* FOOTER */}

<footer
className="
mt-20
bg-black
px-6
py-16
"
>


<div
className="
mx-auto
max-w-4xl
"
>


<h2
className="
text-3xl
font-black
"
>

Zetein
<span className="cursor-blink">
_
</span>

</h2>



<div
className="
mt-10
flex
flex-col
gap-5
text-sm
text-white/60
"
>

<span>
关于Zetein
</span>


<span>
为什么选择我们
</span>


<span>
.xyz世界
</span>


<span>
隐私政策
</span>


<span>
使用条款
</span>


<span>
联系我们
</span>


<a href="mailto:hello@zetein.xyz">
hello@zetein.xyz
</a>


</div>




<p
className="
mt-12
border-t
border-white/10
pt-6
text-xs
text-white/40
"
>

© {new Date().getFullYear()} Zetein All Rights Reserved.

</p>


</div>


</footer>



</main>

);

}
