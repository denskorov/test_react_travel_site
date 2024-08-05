import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main/main";

function Index() {


    return (<>
            <Header/>

            <Main>

                <div
                    className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
                    <img src="https://picsum.photos/1920/850" alt=""
                         className="absolute top-0 left-0 h-full w-full object-cover"/>
                    <div className="relative z-30 mx-auto max-w-screen-xl flex gap-20">
                        <div className="w-2/3">
                            <span
                                className="text-orange-600 uppercase font-medium mb-4 block">EXPLORE. DISCOVER. TRAVEL</span>
                            <h1 className="text-7xl text-white font-extrabold my-6">JOURNEY TO EXPLORE NATURE</h1>
                            <p className="text-slate-200">
                                Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque
                                donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit.
                                Minus exercitationem wisi. Optio ullamco nullam purus volutpat optio ullamco nullam
                                purus volutpat.
                            </p>
                            <div className="flex gap-8 mt-10">
                                <button className="text-white h-12 bg-orange-700 w-44">
                                    Read More
                                </button>
                                <button className="text-white h-12 bg-blue-500 w-44">
                                    See all offert
                                </button>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <form action="" className="bg-blue-500 p-10">
                                <div className="flex flex-col mb-4">
                                    <label for="" className="text-white text-sm mb-2">Search Destination*</label>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-400"
                                           placeholder="no fo people"/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label for="" className="text-white text-sm mb-2">Pax number*</label>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-400"
                                           placeholder="Votre destination"/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label for="" className="text-white text-sm mb-2">Chacking date*</label>
                                    <div className="h-full relative">
                                        <button className="absolute flex items-center h-full top-6 right-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-800"
                                           placeholder="jj/mm/yyy"/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label for="" className="text-white text-sm mb-2">Checkout date*</label>
                                    <div className="h-full relative">
                                        <button className="absolute flex items-center h-full top-6 right-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-800"
                                           placeholder="jj/mm/yyy"/>
                                </div>

                                <button className="text-white h-12 bg-orange-500 w-full mt-5">
                                    Reserver
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="main max-w-screen-xl mx-auto py-24 bg-white">
                        <div className="popular">
                            <header className="flex flex-col items-center mb-24">
                                <span className="block text-orange-500 font-medium mb-2">POPULAR DESTINATION</span>
                                <h2 className="font-extrabold text-5xl">TOP NOTCH DESTINATION</h2>
                            </header>
                            <div className="list grid grid-cols-4 gap-4">


                                <div className="shadow-md hover:shadow-lg transition-all relative">
                                    <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="bg-white min-h-80 p-2">
                                        <div className="overflow-hidden h-80">
                                            <div
                                                className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                                                <img src="https://picsum.photos/450/450" alt=""
                                                     className="absolute top-0 h-full w-full object-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                                        <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                                        <span className="text-sky-700">NEW ZEALAND</span>
                                    </div>
                                </div>

                                <div className="shadow-md hover:shadow-lg transition-all relative">
                                    <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="bg-white min-h-80 p-2">
                                        <div className="overflow-hidden h-80">
                                            <div
                                                className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                                                <img src="https://picsum.photos/450/450" alt=""
                                                     className="absolute top-0 h-full w-full object-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                                        <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                                        <span className="text-sky-700">NEW ZEALAND</span>
                                    </div>
                                </div>

                                <div className="shadow-md hover:shadow-lg transition-all relative">
                                    <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="bg-white min-h-80 p-2">
                                        <div className="overflow-hidden h-80">
                                            <div
                                                className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                                                <img src="https://picsum.photos/450/450" alt=""
                                                     className="absolute top-0 h-full w-full object-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                                        <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                                        <span className="text-sky-700">NEW ZEALAND</span>
                                    </div>
                                </div>

                                <div className="shadow-md hover:shadow-lg transition-all relative">
                                    <div className="rate flex gap-1 absolute z-40 m-4 right-0">
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                        <a href="" className="text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="bg-white min-h-80 p-2">
                                        <div className="overflow-hidden h-80">
                                            <div
                                                className="block h-full relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-20 before:opacity-45">
                                                <img src="https://picsum.photos/450/450" alt=""
                                                     className="absolute top-0 h-full w-full object-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col justify-center pb-5 pt-2 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full cursor-pointer"></a>
                                        <h3 className="text-2xl font-bold text-slate-600 mb-1">Marina Ridge</h3>
                                        <span className="text-sky-700">NEW ZEALAND</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="text-white h-12 bg-orange-500 w-60 mx-auto block mt-14 hover:bg-sky-600 transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-50">
                    <div className="main max-w-screen-xl mx-auto py-24">
                        <div className="popular">
                            <header className="flex flex-col items-center mb-24">
                                <span className="block text-orange-500 font-medium mb-2">POPULAR DESTINATION</span>
                                <h2 className="font-extrabold text-5xl">POPULAR PACKAGES</h2>
                            </header>
                            <div className="grid grid-cols-2 gap-10">


                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white">
                                            <span className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span>
                                        </div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6">
                                            <span className="text-xs text-slate-400">(17 reviews)</span>
                                            <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-slate-500 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
            </span>
                                        </p>
                                        <p className="text-slate-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
                                            elit tellus, luctus nec ullam.
                                        </p>
                                    </div>
                                </div>

                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white">
                                            <span className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span>
                                        </div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6">
                                            <span className="text-xs text-slate-400">(17 reviews)</span>
                                            <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-slate-500 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
            </span>
                                        </p>
                                        <p className="text-slate-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
                                            elit tellus, luctus nec ullam.
                                        </p>
                                    </div>
                                </div>

                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white">
                                            <span className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span>
                                        </div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6">
                                            <span className="text-xs text-slate-400">(17 reviews)</span>
                                            <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-slate-500 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
            </span>
                                        </p>
                                        <p className="text-slate-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
                                            elit tellus, luctus nec ullam.
                                        </p>
                                    </div>
                                </div>
                                <div className="group shadow-md hover:shadow-lg bg-white grid grid-cols-2">
                                    <div className="relative h-80">
                                        <div className="absolute bg-rose-500 py-2 pr-3 pl-6 mt-6 text-white">
                                            <span className="font-bold text-xl">$1.230</span> <span
                                            className="text-xs text-stone-200">/ persone</span>
                                        </div>
                                        <img
                                            src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                                            alt="" className="h-full object-cover"/>
                                        <div className="bg-sky-500 py-3 px-6 absolute w-full bottom-0">
                                            <div className="flex justify-between">
              <span className="flex items-center gap-1 text-xs text-white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>
                                                <span
                                                    className="flex items-center gap-1 text-xs text-white relative -- before:block before:absolute before:h-full before:w-px before:top-0 before:bg-white before:-left-[26px]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </span>
                <span>7D/6N</span>
              </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 relative">
                                        <a href="" className="absolute top-0 left-0 h-full w-full">&nbsp;</a>
                                        <h2 className="font-bold text-2xl text-slate-800 mb-6 group-hover:text-rose-600">Sunset
                                            view of beautiful lakeside</h2>
                                        <p className="flex justify-between mb-6">
                                            <span className="text-xs text-slate-400">(17 reviews)</span>
                                            <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-orange-600 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="text-slate-500 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                </svg>
            </span>
                                        </p>
                                        <p className="text-slate-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut
                                            elit tellus, luctus nec ullam.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="text-white h-12 bg-orange-500 w-60 mx-auto block mt-14 hover:bg-sky-600 transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="min-h-96 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-80">
                    <img
                        src="https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
                        alt="" className="h-full object-cover absolute top-0 left-0 w-full "/>
                    <div className="mx-auto max-w-screen-xl relative z-20 text-white py-20">
                        <header className="flex flex-col items-center mb-10">
                            <span className="block text-rose-600 font-medium mb-4">CHOOSE OUR ACTIVITIES</span>
                            <h2 className="font-extrabold text-5xl mb-8">TYPE OF PACKAGES</h2>
                        </header>
                        <div className="flex items-center justify-center gap-20">
                            <div className="group flex flex-col items-center text-sm relative">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                            <div
                                className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                            <div
                                className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                            <div
                                className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                            <div
                                className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                            <div
                                className="group flex flex-col items-center text-sm relative before:absolute before:bg-white before:opacity-25 before:h-full before:w-px before:-left-10">
                                <div
                                    className="absolute h-2/3 w-2/3 -z-10 top-6 left-4 bg-stone-100 hidden opacity-0 group-hover:block group-hover:opacity-10 animate-ping"></div>
                                <div className="mb-2 group-hover:scale-105 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/>
                                    </svg>
                                </div>
                                <b className="font-bold text-xl block mb-2">Adventure</b>
                                15 Destination
                            </div>
                        </div>
                    </div>
                </div>

            </Main>

            <Footer/>
        </>
    )
}

export default Index