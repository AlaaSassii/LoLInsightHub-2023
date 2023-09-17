import PageContainer from '../../components/common/pageContainer'
import WelcomeSection from '../../components/specefic/home/welcomeSection'
import AboutSection from '../../components/specefic/home/aboutSection'
import ServicesSection from '../../components/specefic/home/servicesSection'
import ContactSection from '../../components/specefic/home/contactSection'
const home = () => {
    return (
        <PageContainer>
            <WelcomeSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </PageContainer>
    )
}

export default home