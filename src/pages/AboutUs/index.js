import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main/main";

function AboutUs() {
    return (
        <>
            <Header/>

            <Main>
                <div
                    className="hero h-full py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
                    <img src="https://picsum.photos/1920/850" alt=""
                         className="absolute top-0 left-0 h-full w-full object-cover"/>
                    <div className="relative z-30 mx-auto max-w-screen-xl flex gap-20">
                        <div className="w-1/2 m-auto">
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
                    </div>
                </div>
            </Main>

            <Footer/>
        </>
    )
}

export default AboutUs