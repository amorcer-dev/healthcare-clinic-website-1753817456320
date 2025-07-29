import React from 'react';
import { WidgetBookConsultation } from '../components/WidgetBookConsultation'
import { WidgetMessageDoctor } from '../components/WidgetMessageDoctor'
import { WidgetInsurances } from '../components/WidgetInsurances'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <WidgetBookConsultation
        title="Book Consultation"
        zoomText="zoom"
        subheading="Ready to take the next step in your health journey?"
        description="Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you."
        features={[
        "Convenient virtual or in-person visits",
        "All questions welcome, no referral needed",
        "Easy, secure online booking"
]}
        imageSrc="/Storefront/Doctor Widget/Book Consultation/AbstractGradient.png"
        className=""
      />
      <WidgetMessageDoctor

      />
      <WidgetInsurances

      />
    </main>
  );
}