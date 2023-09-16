import React from 'react'
import './welcomeSection.scss'
import { logoName } from '../../../../assets/logoName';
import jinxImage from '../../../../assets/images/transparentChampions/jinx.png'
const WelcomeSection = () => {
    return (
        <section className='welcome__section__home'>
            <div className='welcome__section__text'>
                <div className='big__text'>Welcome to</div>
                <div className='big__text'><span className='logo__name'>{logoName}</span>,</div>
                <p>where we analyze League of Legends like it's our job... because it kinda is! Join us on this wild ride through the Rift, where we promise the only toxicity you'll find is in our jokes, not our community. Let's dive in and have some fun!</p>
            </div>
            <img src={jinxImage} alt="welcome image" />
        </section>
    )
}

export default WelcomeSection