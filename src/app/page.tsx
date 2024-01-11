"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <main
      className="bg-white w-[1425px] h-[1072px] mix-blend-normal [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-left text-sm-2 text-black font-inter"
      data-animate-on-scroll
    >
      <div className="absolute top-[-0.4px] left-[-0.2px] w-[1425px] h-[1072px]">
        <div className="absolute top-[0px] left-[0px] w-[1425px] h-[1072px] overflow-hidden mix-blend-normal">
          <div className="absolute top-[0px] left-[0px] bg-white w-[1425px] h-[1072px] mix-blend-normal" />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1425px] h-[1072px] flex flex-col items-start justify-start mix-blend-normal">
          <div className="relative w-[1425px] h-[832px] mix-blend-normal text-mid">
            <div className="absolute top-[-126px] left-[0px] w-[1425px] mix-blend-normal">
              <div className="absolute top-[0px] left-[0px] w-[571.5px] h-[952px] overflow-hidden mix-blend-normal">
                <div className="absolute top-[150px] left-[0px] bg-thistle w-[571px] h-[802px] mix-blend-normal" />
              </div>
              <div className="absolute top-[191px] left-[0px] w-[1425px] h-[634px] mix-blend-normal">
                <div className="absolute top-[443px] left-[670.5px] w-[369px] h-[171px] mix-blend-normal font-questrial">
                  <div className="absolute top-[149.3px] left-[0px] leading-[25.5px]">
                    meet customers' needs.
                  </div>
                  <div className="absolute top-[123.8px] left-[0px] leading-[25.5px]">{`clear coordination to define requirements and `}</div>
                  <div className="absolute top-[98.3px] left-[0px] leading-[25.5px]">{`and ensuring code quality. I focus on smooth and `}</div>
                  <div className="absolute top-[72.8px] left-[0px] leading-[25.5px]">{`industry standards, paying attention to detail, `}</div>
                  <div className="absolute top-[47.3px] left-[0px] leading-[25.5px]">{`applications by following best practices and `}</div>
                  <div className="absolute top-[21.8px] left-[0px] leading-[25.5px]">{`intuitive user interfaces. I deliver efficient web `}</div>
                  <div className="absolute top-[-3.7px] left-[0px] leading-[25.5px]">{`​As a Frontend Developer I care for building `}</div>
                </div>
                <div className="absolute top-[353px] left-[837.5px] rounded-81xl bg-gray box-border w-[130px] h-[35px] mix-blend-normal text-sm-9 border-[1px] border-solid border-black">
                  <div className="absolute top-[7.7px] left-[18.7px] w-[92.6px] h-[19.6px] flex flex-col items-center justify-center mix-blend-normal">
                    <div className="relative leading-[19.6px]">CONTACT ME</div>
                  </div>
                </div>
                <div className="absolute top-[353px] left-[670.5px] rounded-81xl bg-firebrick w-[130px] h-[35px] mix-blend-normal text-sm-9 text-white">
                  <div className="absolute top-[7.7px] left-[25.3px] w-[79.3px] h-[19.6px] mix-blend-normal">
                    <div className="absolute top-[-0.3px] left-[0px] leading-[19.6px]">
                      PORTFOLIO
                    </div>
                  </div>
                </div>
                <div className="absolute top-[170px] left-[670.5px] w-[485px] h-[131px] flex flex-col items-start justify-start pt-0 pb-[365px] pr-2.5 pl-0 box-border mix-blend-normal text-6xl font-syne">
                  <div className="w-[475px] h-[120px] flex flex-col items-start justify-start pt-0 px-0 pb-[347px] box-border mix-blend-normal">
                    <b className="relative leading-[30px]">{`I am a Software Developer `}</b>
                    <b className="relative leading-[30px]">{`specialising in front-end, and I care `}</b>
                    <b className="relative leading-[30px]">{`for creating efficient and clean `}</b>
                    <b className="relative leading-[30px]">
                      solutions for customers.
                    </b>
                  </div>
                </div>
                <div className="absolute top-[72px] left-[670.5px] w-[485px] h-[98px] mix-blend-normal text-[76.2px]">
                  <b className="absolute top-[-0.3px] left-[0px] leading-[75.6px]">
                    HELLO
                  </b>
                </div>
                <div className="absolute top-[72px] left-[261.5px] w-[375px] h-[562px] flex flex-row items-start justify-start mix-blend-normal font-questrial">
                  <div className="relative bg-linen shadow-[-11.3px_11.3px_17px_rgba(138,_131,_124,_0.23)] w-[375px] h-[562px] overflow-hidden shrink-0 mix-blend-normal" />
                  <div className="relative w-[375px] h-[562px] mix-blend-normal ml-[-375px]">
                    <div className="absolute top-[509px] left-[0px] w-[375px] h-[53px] mix-blend-normal">
                      <div className="absolute top-[0px] left-[0px] bg-white shadow-[-11.3px_11.3px_25px_rgba(138,_131,_124,_0.23)] w-[375px] h-[53px] overflow-hidden mix-blend-normal" />
                      <div className="absolute top-[14px] left-[142px] w-[68px] h-[25px] flex flex-row items-start justify-start py-0 pr-[378.5px] pl-0 box-border gap-[18px] mix-blend-normal">
                        <img
                          className="relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover mix-blend-normal"
                          alt=""
                          src="/image@2x.png"
                        />
                        <img
                          className="relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover mix-blend-normal"
                          alt=""
                          src="/image@2x.png"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[434.2px] left-[49px] w-[277px] h-[23.8px] mix-blend-normal">
                      <div className="absolute top-[-0.9px] left-[25.3px] tracking-[4.25px] leading-[23.8px]">
                        Software Developer
                      </div>
                    </div>
                    <div className="absolute top-[404.2px] left-[160px] box-border w-[50px] h-[5px] mix-blend-normal border-t-[2px] border-solid border-firebrick" />
                    <div className="absolute top-[282px] left-[115.6px] w-36 h-[97px] mix-blend-normal text-8xl font-syne">
                      <b className="absolute top-[64.6px] left-[0px] leading-[32.4px]">
                        {" "}
                        Chaviano
                      </b>
                      <b className="absolute top-[32.2px] left-[30px] leading-[32.4px]">
                        Peña 
                      </b>
                      <b className="absolute top-[-0.2px] left-[7px] leading-[32.4px]">{`Lisandra `}</b>
                    </div>
                    <img
                      className="absolute top-[43px] left-[81px] rounded-[50px] w-[205px] h-[205px] overflow-hidden object-cover mix-blend-normal"
                      alt=""
                      src="/div-mgogm2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1425px] flex flex-row items-center justify-center py-8 px-[78px] box-border gap-[230px] mix-blend-normal text-sm font-questrial">
            <div className="relative w-[250px] h-[39px]">
              <div className="absolute top-[25px] left-[0px] w-[250px] h-3.5 mix-blend-normal">
                <div className="absolute top-[-1.4px] left-[74.3px] leading-[16.8px]">
                  +31 684 101 962
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[250px] h-3.5 mix-blend-normal">
                <div className="absolute top-[-1.4px] left-[66.6px] leading-[16.8px]">
                  Telephone number
                </div>
              </div>
            </div>
            <div className="relative w-[310px] h-[41px] text-sm-2 font-inter">
              <div className="absolute top-[24px] left-[0px] w-[310px] h-[17px] mix-blend-normal">
                <div className="absolute top-[-1.4px] left-[72.3px] leading-[16.8px]">
                  lisichaviano98@gmail.com
                </div>
              </div>
              <div className="absolute top-[0px] left-[30px] w-[250px] h-3.5 mix-blend-normal text-sm font-questrial">
                <div className="absolute top-[-1.4px] left-[107.7px] leading-[16.8px]">
                  Email
                </div>
              </div>
            </div>
            <div className="relative w-[168px] h-[41px]">
              <div className="absolute top-[0px] left-[0px] w-[168px] h-3.5 mix-blend-normal">
                <div className="absolute top-[-1.4px] left-[52.5px] leading-[16.8px]">
                  Follow me
                </div>
              </div>
              <div className="absolute top-[22px] left-[59px] w-[49px] h-[19px] flex flex-row items-center justify-start py-0 pr-[1219px] pl-0 box-border gap-[11px] mix-blend-normal">
                <img
                  className="relative w-[19px] h-[19px] overflow-hidden shrink-0 object-cover mix-blend-normal"
                  alt=""
                  src="/image@2x.png"
                />
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover mix-blend-normal"
                  alt=""
                  src="/image@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
