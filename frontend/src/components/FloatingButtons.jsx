import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../styles/floatingButtons.css";

function FloatingButtons() {
  return (
    <div className="floating-buttons">

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919876543210"
        className="call-btn"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
}

export default FloatingButtons;