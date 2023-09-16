import React from 'react'
import PageContainer from '../../components/common/pageContainer'
import WelcomeSection from '../../components/specefic/home/welcomeSection'
import AboutSection from '../../components/specefic/home/aboutSection'
const home = () => {
    return (<PageContainer>
        <WelcomeSection />
        <AboutSection />
    </PageContainer>
    )
}

export default home