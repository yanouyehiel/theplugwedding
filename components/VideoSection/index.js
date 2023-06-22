import React from 'react'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal';

const VideoSection = (props) => {
    return (
        <section className={`wpo-video-section ${props.vClass} `}>
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="video-wrap">
                    <Image src={props.vimg} alt="" />
                    <VideoModal />
                </div>
            </div>
        </section>
    )
}

export default VideoSection;