import Header from "../../components/Header";
import Main from "../../components/Main/main";
import Footer from "../../components/Footer";

function Contact() {
    return (
        <>
            <Header/>

            <Main>
                <div
                    className="hero h-full py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
                    <img src="https://picsum.photos/1920/850" alt=""
                         className="absolute top-0 left-0 h-full w-full object-cover"/>
                    <div className="relative z-30 mx-auto max-w-screen-xl flex gap-20">
                        {/*<div className="w-2/3">*/}
                        {/*    <span*/}
                        {/*        className="text-orange-600 uppercase font-medium mb-4 block">EXPLORE. DISCOVER. TRAVEL</span>*/}
                        {/*    <h1 className="text-7xl text-white font-extrabold my-6">JOURNEY TO EXPLORE NATURE</h1>*/}
                        {/*    <p className="text-slate-200">*/}
                        {/*        Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque*/}
                        {/*        donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit.*/}
                        {/*        Minus exercitationem wisi. Optio ullamco nullam purus volutpat optio ullamco nullam*/}
                        {/*        purus volutpat.*/}
                        {/*    </p>*/}
                        {/*    <div className="flex gap-8 mt-10">*/}
                        {/*        <button className="text-white h-12 bg-orange-700 w-44">*/}
                        {/*            Read More*/}
                        {/*        </button>*/}
                        {/*        <button className="text-white h-12 bg-blue-500 w-44">*/}
                        {/*            See all offert*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="w-1/3 m-auto">
                            <form action="" className="bg-blue-500 p-10">
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="" className="text-white text-sm mb-2">Search Destination*</label>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-400"
                                           placeholder="no fo people"/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="" className="text-white text-sm mb-2">Pax number*</label>
                                    <input type="text"
                                           className="h-12 bg-white px-4 placeholder:text-sm placeholder:text-slate-400"
                                           placeholder="Votre destination"/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label htmlFor="" className="text-white text-sm mb-2">Chacking date*</label>
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
                                    <label htmlFor="" className="text-white text-sm mb-2">Checkout date*</label>
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
            </Main>

            <Footer/>
        </>
    )
}

export default Contact