import "../css/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
