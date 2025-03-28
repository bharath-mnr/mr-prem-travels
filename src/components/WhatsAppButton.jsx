import React from 'react';

const WhatsAppButton = ({ 
  phoneNumber = '8270057500', 
  buttonText = 'Chat with Us',
  pulse = true
}) => {
  return (
    <div className="whatsapp-contact-wrapper">
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        className={`whatsapp-contact-button ${pulse ? 'pulse-animation' : ''}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
      >
        <div className="whatsapp-icon-container">
          <div className="icon-ring"></div>
          <WhatsAppIcon />
        </div>
        <span className="whatsapp-contact-text">
          {buttonText}
          <span className="hover-arrow">→</span>
        </span>
      </a>
    </div>
  );
};

const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="whatsapp-icon"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Updated CSS for perfect centering
const styles = `
.whatsapp-contact-wrapper {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
}

.whatsapp-contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: linear-gradient(145deg, #25D366, #128C7E);
  color: white;
  border-radius: 50px;
  padding: 12px;
  box-shadow: 0 6px 20px rgba(37,211,102,0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  width: 60px;
  height: 60px;
  position: relative;
}

.whatsapp-contact-button:hover {
  width: auto;
  max-width: 220px;
  padding: 12px 24px;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(37,211,102,0.4);
}

.whatsapp-contact-button:active {
  transform: translateY(1px);
  box-shadow: 0 4px 15px rgba(37,211,102,0.3);
}

.whatsapp-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  position: relative;
}

.icon-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: ringPulse 2s infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.whatsapp-contact-button:hover .icon-ring {
  opacity: 1;
}

.whatsapp-icon {
  width: 28px;
  height: 28px;
  fill: white;
  transition: transform 0.3s ease;
  margin: 0 auto;
}

.whatsapp-contact-button:hover .whatsapp-icon {
  transform: scale(1.1);
}

.whatsapp-contact-text {
  margin-left: 12px;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.4s ease;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  white-space: nowrap;
}

.hover-arrow {
  margin-left: 8px;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.whatsapp-contact-button:hover .whatsapp-contact-text {
  opacity: 1;
  transform: translateX(0);
}

.whatsapp-contact-button:hover .hover-arrow {
  opacity: 1;
  transform: translateX(0);
}

@keyframes ringPulse {
  0% { transform: scale(0.95); opacity: 0; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(0.95); opacity: 0; }
}

.pulse-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Add styles to document */
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default WhatsAppButton;