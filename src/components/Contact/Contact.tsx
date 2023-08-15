import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="container contact">
      <h1>Solicite um orçamento</h1>
      <div className="contact-detail">
        <ContactForm />
        <div className="contact-text">
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi at dolore,
            architecto molestiae eius? Officiis dolore minima eveniet maiores, omnis saepe voluptatum facere, eius ut,
            assumenda quod nostrum doloremque!
          </p>
          <img src="letter.png" alt="Carta" />
        </div>
      </div>
    </div>
  )
}