import React from "react";
import SectionTitle from "../SectionTitle";
import Image from 'next/image'
import timg1 from '/public/images/team/img-1.jpg'
import timg2 from '/public/images/team/img-2.jpg'
import timg3 from '/public/images/team/img-3.jpg'
import timg4 from '/public/images/team/img-4.jpg'
import timg5 from '/public/images/team/img-5.jpg'
import timg6 from '/public/images/team/img-6.jpg'
import timg7 from '/public/images/team/img-7.jpg'
import timg8 from '/public/images/team/img-8.jpg'

const Brides = [
  {
    id: '1',
    tImg: timg1,
    name: 'Margarate Bennet',
    title: 'Sister',
  },
  {
    id: '2',
    tImg: timg2,
    name: 'Robert William',
    title: 'Best Friend',
  },
  {
    id: '3',
    tImg: timg3,
    name: 'Henry D’suza',
    title: 'Brother',
  },
  {
    id: '4',
    tImg: timg4,
    name: 'Jenefer Abram',
    title: 'Sister',
  },
  {
    id: '5',
    tImg: timg5,
    name: 'Jenefer Abram',
    title: 'Sister',
  },
  {
    id: '6',
    tImg: timg6,
    name: 'Henry D’suza',
    title: 'Best Friend',
  },
  {
    id: '7',
    tImg: timg7,
    name: 'Robert William',
    title: 'Brother',
  },
  {
    id: '8',
    tImg: timg8,
    name: 'Margarate Bennet',
    title: 'Friend',
  }
]

const BrideGrooms = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="bride-groom-section">
      <div className={`wpo-team-section section-padding ${props.tClass}`}>
        <div className="container">
          <SectionTitle subTitle={'Important Persons'} MainTitle={'BRIDESMAIDS & GROOMSMEN'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {Brides.slice(0, 8).map((Bride, tm) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                  <div className="wpo-team-item">
                    <div className="wpo-team-img">
                      <Image src={Bride.tImg} alt="" />
                    </div>
                    <div className="wpo-team-text">
                      <h3>{Bride.name}</h3>
                      <span>{Bride.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrideGrooms;