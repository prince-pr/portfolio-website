/* By Viswanathan Lakshmanan */
import "../css/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form" aria-labelledby="contact-form-heading">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
