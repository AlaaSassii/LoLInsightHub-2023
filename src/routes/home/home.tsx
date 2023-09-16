import React from 'react'
import PageContainer from '../../components/common/pageContainer'
import WelcomeSection from '../../components/specefic/home/welcomeSection'
import AboutSection from '../../components/specefic/home/aboutSection'
import ServicesSection from '../../components/specefic/home/servicesSection'
const home = () => {
    return (<PageContainer>
        <WelcomeSection />
        <AboutSection />
        <ServicesSection />
    </PageContainer>
    )
}

export default home