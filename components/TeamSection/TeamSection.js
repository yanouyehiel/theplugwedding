import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <SectionTitle MainTitle={'Awesome Team Member'} subTitle={'Our Organizers'}/>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={titem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                    <Image src={team.tImg} alt="" />
                                    </div>
                                    <div className="wpo-team-text">
                                        <h3><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;