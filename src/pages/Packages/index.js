import Header from "../../components/Header";
import Main from "../../components/Main/main";
import Footer from "../../components/Footer";

function Collection() {
    return (
        <>
            <Header/>

            <Main>

                <div className="bg-stone-50">
                    <div className="main max-w-screen-xl mx-auto py-24">
                        <div className="popular">
                            <header className="flex flex-col items-center mb-24"><span
                                className="block text-orange-500 font-medium mb-2">POPULAR DESTINATION</span><h2
                                className="font-extrabold text-5xl">PACKAGES</h2></header>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white"><span
                                            className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span></div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between"><span
                                                className="flex items-center gap-1 text-xs text-white"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative"><a href=""
                                                                      className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6"><span
                                            className="text-xs text-slate-400">(17 reviews)</span><span
                                            className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                  viewBox="0 0 24 24" stroke-width="1.5"
                                                                  stroke="currentColor"
                                                                  className="text-orange-600 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="text-slate-500 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg></span>
                                        </p>
                                        <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit luctus nec ullam. Ut elit tellus, luctus nec ullam.</p></div>
                                </div>
                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white"><span
                                            className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span></div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between"><span
                                                className="flex items-center gap-1 text-xs text-white"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative"><a href=""
                                                                      className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6"><span
                                            className="text-xs text-slate-400">(17 reviews)</span><span
                                            className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                  viewBox="0 0 24 24" stroke-width="1.5"
                                                                  stroke="currentColor"
                                                                  className="text-orange-600 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="text-slate-500 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg></span>
                                        </p>
                                        <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit luctus nec ullam. Ut elit tellus, luctus nec ullam.</p></div>
                                </div>
                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white"><span
                                            className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span></div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between"><span
                                                className="flex items-center gap-1 text-xs text-white"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative"><a href=""
                                                                      className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6"><span
                                            className="text-xs text-slate-400">(17 reviews)</span><span
                                            className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                  viewBox="0 0 24 24" stroke-width="1.5"
                                                                  stroke="currentColor"
                                                                  className="text-orange-600 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="text-slate-500 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg></span>
                                        </p>
                                        <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit luctus nec ullam. Ut elit tellus, luctus nec ullam.</p></div>
                                </div>
                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white"><span
                                            className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span></div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between"><span
                                                className="flex items-center gap-1 text-xs text-white"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span><span
                                                className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]"><span><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path
                                                stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></span><span>7D/6N</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative"><a href=""
                                                                      className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6"><span
                                            className="text-xs text-slate-400">(17 reviews)</span><span
                                            className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                  viewBox="0 0 24 24" stroke-width="1.5"
                                                                  stroke="currentColor"
                                                                  className="text-orange-600 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            className="text-orange-600 w-4 h-4"><path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="text-slate-500 w-4 h-4"><path
                                            stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg></span>
                                        </p>
                                        <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit luctus nec ullam. Ut elit tellus, luctus nec ullam.</p></div>
                                </div>
                            </div>
                            <button
                                className="text-white h-12 bg-orange-500 w-60 mx-auto block mt-14 hover:bg-sky-600 transition-all">Read
                                More
                            </button>
                        </div>
                    </div>
                </div>

            </Main>

            <Footer/>
        </>
    )
}

export default Collection