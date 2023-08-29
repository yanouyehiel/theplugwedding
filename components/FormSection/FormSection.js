import ContactForm from "../ContactFrom/ContactForm"

function FormSection() {
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="wpo-contact-title">
                    <h2>Have Any Question?</h2>
                    <p>In order to achieve this goal, we will have an initial meeting to get to know each other, after which I will make you an offer tailored to your wishes, suggestions and budget. I appreciate the honor and trust you have in me to immerse yourself in the intimacy of your big day and capture the important and emotional moments of your wedding.</p>
                </div>
                <div className="wpo-contact-form-area">
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default FormSection