import ContactHero from '@/components/ContactHero';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <ContactHero></ContactHero>
            <ContactSection></ContactSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default ContactPage;