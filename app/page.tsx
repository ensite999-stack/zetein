"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";


const articles = [
  {
    title: "为什么选择我们",
    content:
      "Zetein 专注于提供快速、准确、无广告的 .xyz 域名查询体验。我们希望让域名发现过程更加简单，让用户专注于找到合适的数字身份。",
  },
  {
    title: "为什么选择 .xyz",
    content:
      ".xyz 是面向下一代互联网的开放域名。它简洁、灵活，适合创业项目、AI、开发者和个人品牌。",
  },
  {
    title: "探索 .xyz 历史",
    content:
      ".xyz 于2014年推出，从新顶级域名发展成为科技、AI和创新项目中的重要选择。",
  },
];


export default function Home() {

  const [open, setOpen] = useState<number | null>(null);


  return (

    <main className="min-h-screen">


      <Navbar />



      {/* Hero */}

      <section
        className="
        flex
        min-h-[650px]
        items-center
        justify-center
        bg-[#06B6D4]
        px-6
        pt-20
        "
      >

        <div className="w-full max-w-5xl text-center">


          <h1
            className="
            text-5xl
            font-light
            tracking-tight
            text-white
            md:text-7xl
            "
          >

            Explore the world of .xyz

          </h1>



          <div
            className="
            mx-auto
            mt-14
            max-w-3xl
            rounded-2xl
            bg-white
            p-2
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            "
          >

            <div
              className="
              flex
              h-16
              items-center
              "
            >

              <input
                placeholder="Search your domain"
                className="
                flex-1
                px-6
                text-lg
                text-black
                outline-none
                placeholder:text-gray-400
                "
              />


              <span
                className="
                hidden
                px-5
                text-gray-400
                md:block
                "
              >
                .xyz
              </span>


              <button
                className="
                h-12
                rounded-xl
                bg-black
                px-8
                text-sm
                font-medium
                text-white
                "
              >

                Search

              </button>


            </div>


          </div>


        </div>


      </section>




      {/* Articles */}

      <section
        className="
        bg-[#F8FAFC]
        px-6
        py-24
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
                border-gray-200
                "
              >

                <button

                  onClick={() =>
                    setOpen(
                      open === index ? null : index
                    )
                  }

                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-8
                  text-left
                  "
                >

                  <span
                    className="
                    text-2xl
                    font-light
                    "
                  >
                    {item.title}
                  </span>


                  <span
                    className="
                    text-3xl
                    font-light
                    text-[#06B6D4]
                    "
                  >

                    {open === index ? "−" : "+"}

                  </span>


                </button>


                {
                  open === index && (

                    <p
                      className="
                      pb-8
                      leading-8
                      text-gray-500
                      "
                    >

                      {item.content}

                    </p>

                  )
                }


              </div>

            ))
          }


        </div>


      </section>





      {/* Footer */}

      <footer
        className="
        bg-black
        px-6
        py-16
        text-white
        "
      >

        <div
          className="
          mx-auto
          max-w-4xl
          "
        >

          <div
            className="
            text-3xl
            font-medium
            "
          >
            Zetein
          </div>



          <div
            className="
            mt-10
            flex
            flex-col
            gap-5
            text-sm
            text-white/70
            "
          >

            <a>
              关于Zetein
            </a>

            <a>
              为什么选择我们
            </a>

            <a>
              .xyz世界
            </a>

            <a>
              隐私政策
            </a>

            <a>
              使用条款
            </a>

            <a>
              联系我们
            </a>


            <a>
              hello@zetein.xyz
            </a>


          </div>



          <div
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

          </div>


        </div>


      </footer>


    </main>

  );

}
