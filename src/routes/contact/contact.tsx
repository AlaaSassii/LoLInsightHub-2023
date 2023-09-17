import PageContainer from '../../components/common/pageContainer'
import ContactForm from '../../components/specefic/contact/contactForm'
import ContactInfoGuide from '../../components/specefic/contact/contactInfoGuide'
const Contact = () => {
    return (
        <PageContainer>
            <ContactInfoGuide />
            <ContactForm />
        </PageContainer>
    )
}

export default Contact