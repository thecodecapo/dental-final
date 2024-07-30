import React from "react";
import Cards from "./swiper-cards";
import '../assets/css/gallery.css';

function Gallery() {
    return (
        <section className="gallery container__fit pb-[1.4em]">
            <div className="gallery__outer-wrapper">
                <div className="top__wrapper h-[72%]  grid grid-cols-1 t:grid-cols-2 ">
                    <div className="wrapper__border">
                        <div className="h-51% t:h-102% wrapper__border flex flex-col justify-between">
                            <div className="t:h-content h-100% flex flex-col justify-between">
                            <div className="p-[1.5em] t:hidden">
                            <label className="sub__heading">Smile Gallery</label>
                            </div>
                            <div className="p-[1.5em]">
                            <label className="">Our cosmetic dental work</label>
                            </div>
                            </div>
                            <div className="p-[1.5em] hide t:visible">
                                <h1 className="fancy__gallerytext">Smile <br />makeover</h1>
                            </div>
                            <div className="p-[1.5em] w-full hide t:visible-flex xs:gallery-col flex justify-between">
                            <label className="resp__text-color base__text weight-500">If you want a gorgeous smile, <br /> call us to ask about a smile makeover.</label>
                            <button className="primary__btn w-fit weight-600">Call Us</button>
                        </div>
                        </div>
                        <div className="h-51% wrapper__border-bottom-0 gallery__wrapper-left-2">
                            <div className="p-[1.5em]">
                                <h1 className="fancy__gallerytext">Smile <br />makeover</h1>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper__border-left gallery__wrapper-right flex items-end">
                        <div className="p-[1.5em] w-full flex justify-between">
                            <label className="text-white base__text weight-500">If you want a gorgeous smile, <br /> call us to ask about a smile makeover.</label>
                            <button className="primary__btn weight-600">Call Us</button>
                        </div>
                    </div>
                </div>
                <div className="bottom__wrapper wrapper__border-nomargin xl:h-28% h-30%">
                    <div className="cards__outer-wrapper p-[1em] pr-0 h-full">
                        <Cards />
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Gallery;