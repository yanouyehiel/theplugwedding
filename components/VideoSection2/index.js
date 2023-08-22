import React from 'react'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal';

const VideoSection2 = (props) => {
    return (
        <section className={`wpo-video-section-s2 ${props.vClass} `}>
            <h2 className="hidden">some</h2>
            <div className="container">
                <div className="video-wrap">
                    <Image src={props.vimg} alt="" />
                    <VideoModal />
                </div>
            </div>
        </section>
    )
}

export default VideoSection2;