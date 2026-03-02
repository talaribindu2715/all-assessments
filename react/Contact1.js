import "../Contact1/Contact1.css";
function Contact1() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out anytime.</p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> support@funlandtoys.com
        </p>
        <p>
          <strong>Phone:</strong> +91-1234567890
        </p>
        <p>
          <strong>Address:</strong> 123 Toy Street, Cuddapah, Andhra Pradesh
        </p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact1;

// import './Contact1.css';
// function Contact1() {
//     return (
//         <>
//             <div class="contact">
//                 <h1 class="co">Contact Us</h1>
//                 <p>We are happy to hear from you! If you have any questions about our toys, orders, or services,
//                     feel free to contact us anytime. Our team is always ready to help and ensure you have a joyful shopping experience.<br /><br />
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iwT3pzumAmtvzAHKNTewoQ_xALfu-YHrRg&s" />
//                     <br />
//                     📍 Address: Toys Shop, Main Road, City<br />
//                     📞 Phone: +91 9550017885<br />
//                     📧 Email: toysshop@gmail.com<br /><br />
//                     You can also reach us through our website contact form. We value your feedback and look forward to serving you. Thank you for choosing Toys Shop 🧸✨</p>
//             </div>
//         </>
//     );
// }

// export default Contact1;        