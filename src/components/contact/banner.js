// import React, { useState } from "react";
// import "./banner.css";
// import { User, Activity, Briefcase, Award, Users, Target, Clock } from "lucide-react";
// import bgBanner from "../assets/contact/cantactbanner.png";
// import StateSection from "./statesection";
// import SuccessStories from "./successstories";
// import { useLocation } from "react-router-dom";

// const ContactSection = () => {
//     // const [selectedOption, setSelectedOption] = useState("learn");
//   const location = useLocation();

//   const [selectedOption, setSelectedOption] = useState(
//     location.state?.mode || "learn"
//   );

  
//   const content = {
//         learn: {
//             title: "Why Choose Us for Your Learning Journey",
//             highlight: "Journey",
//             benefits: [
//                 {
//                     icon: User,
//                     title: "Expert-Led Courses",
//                     desc: "Learn from industry professionals with real-world experience."
//                 },
//                 {
//                     icon: Activity,
//                     title: "Comprehensive Learning Paths",
//                     desc: "Structured and detailed courses tailored to your skill goals."
//                 },
//                 {
//                     icon: Briefcase,
//                     title: "Hands-On Projects",
//                     desc: "Apply your knowledge through real projects and gain practical skills."
//                 },
//                 {
//                     icon: Award,
//                     title: "Certification Upon Completion",
//                     desc: "Receive a recognized certificate to boost your career."
//                 }
//             ],
//             formTitle: "What you Preferred to connect",
//             button1: "I Need to Work",
//             button2: "I Want to Learn",
//             interestLabel: "What you Interest to learn",
//             interestPlaceholder: "Enter your Interest Eg: Full Stack Development,",
//             submitText: "I'm Ready to Start Happy Learning!"
//         },
//         work: {
//             title: "Why Choose Us for Your Career Growth",
//             highlight: "Growth",
//             benefits: [
//                 {
//                     icon: Briefcase,
//                     title: "Job-Ready Training",
//                     desc: "Get trained on the latest tools and technologies used in top companies."
//                 },
//                 {
//                     icon: Users,
//                     title: "Industry Connections",
//                     desc: "Connect with hiring managers and industry experts directly."
//                 },
//                 {
//                     icon: Target,
//                     title: "Career Coaching",
//                     desc: "Personalized guidance to help you land your dream job."
//                 },
//                 {
//                     icon: Clock,
//                     title: "Flexible Schedules",
//                     desc: "Learn at your own pace while balancing work and life."
//                 }
//             ],
//             formTitle: "What you're looking for",
//             button1: "I Want to Learn",
//             button2: "I Need to Work",
//             interestLabel: "What role are you interested in?",
//             interestPlaceholder: "Enter your role Eg: Frontend Developer,",
//             submitText: "Get Started with Career Support!"
//         }
//     };

//     const current = content[selectedOption];

//     return (
//         <div className="contact-wrapper">
//             <div>
//                 <img src={bgBanner} alt="Contact Banner" className="banner-image" />
//             </div>
//             <div className="contact-container">
//                 {/* LEFT CONTENT - Benefits Section */}
//                 <div className="left-section">
//                     <h2 className="title">
//                         Why Choose Us for <br />
//                         Your Learning <span className="highlight">{current.highlight}</span>
//                     </h2>


//                     {current.benefits.map((benefit, idx) => {
//                         const Icon = benefit.icon;
//                         return (
//                             <div className="benefit-card" key={idx}>
//                                 <div className="icon-box">
//                                     <Icon className="icon" />
//                                 </div>
//                                 <div>
//                                     <h4>{benefit.title}</h4>
//                                     <p>{benefit.desc}</p>
//                                 </div>
//                             </div>

//                         );
//                     })}
//                 </div>

//                 {/* RIGHT CONTENT - Form Section */}
//                 <div className="right-section">
//                     <h2 className="connect-title">Connect With Us</h2>
//                     <p className="form-label">{current.formTitle}</p>

//                     <div className="toggle-wrapper">
//                         <button
//                             className={`toggle-btn ${selectedOption === "work" ? "active" : ""}`}
//                             onClick={() => setSelectedOption("work")}
//                         >
//                             <span className="dot"></span> I Need to Work
//                         </button>

//                         <button
//                             className={`toggle-btn ${selectedOption === "learn" ? "active" : ""}`}
//                             onClick={() => setSelectedOption("learn")}
//                         >
//                             <span className="dot"></span> I Want to Learn
//                         </button>
//                     </div>

//                     <label className="input-title">Name</label>
//                     <input
//                         type="text"
//                         className="form-input"
//                         placeholder="Enter your Full Name  Eg: Raj Kumar"
//                     />

//                     <label className="input-title">Email*</label>
//                     <input
//                         type="email"
//                         className="form-input"
//                         placeholder="Enter your Email  Eg: rjkumar55@gmail.com"
//                     />

//                     <label className="input-title">Phone*</label>
//                     <div className="phone-input-row">
//                         <select className="phone-select">
//                             <option>India +91</option>
//                         </select>
//                         <input
//                             type="text"
//                             className="phone-number"
//                             placeholder="Enter your Mobile Number"
//                         />
//                     </div>

//                     <label className="input-title">{current.interestLabel}</label>
//                     <input
//                         type="text"
//                         className="form-input"
//                         placeholder={current.interestPlaceholder}
//                     />

//                     <button className="submit-btn">
//                         {current.submitText}
//                     </button>

//                     <p className="footer-note">
//                         Once Submit form Our Team will connect with you
//                     </p>
//                 </div>
//             </div>

//             {/* StateSection மற்றும் SuccessStories காம்போனெண்ட்டுகளுக்கு selectedOption prop அனுப்புகிறேன் */}
//             <StateSection selectedOption={selectedOption} />
//             <SuccessStories selectedOption={selectedOption} />
//         </div>
//     );
// };

// export default ContactSection;


// import React, { useState } from "react";
// import "./banner.css";
// import { User, Activity, Briefcase, Award, Users, Target, Clock } from "lucide-react";
// import bgBanner from "../assets/contact/cantactbanner.png";
// import StateSection from "./statesection";
// import SuccessStories from "./successstories";
// import { useLocation } from "react-router-dom";

// const API_URL = "https://pcstech.in/mail/mail.php";

// const ContactSection = () => {
//   const location = useLocation();
// const [showPopup, setShowPopup] = useState(false);

//   const [selectedOption, setSelectedOption] = useState(location.state?.mode || "learn");

//   // ✅ form state
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [interest, setInterest] = useState("");

//   // ✅ UI state
//   const [sending, setSending] = useState(false);
//   const [status, setStatus] = useState({ type: "", msg: "" }); // type: "success" | "error" | ""

//   const content = {
//     learn: {
//       title: "Why Choose Us for Your Learning Journey",
//       highlight: "Journey",
//       benefits: [
//         { icon: User, title: "Expert-Led Courses", desc: "Learn from industry professionals with real-world experience." },
//         { icon: Activity, title: "Comprehensive Learning Paths", desc: "Structured and detailed courses tailored to your skill goals." },
//         { icon: Briefcase, title: "Hands-On Projects", desc: "Apply your knowledge through real projects and gain practical skills." },
//         { icon: Award, title: "Certification Upon Completion", desc: "Receive a recognized certificate to boost your career." }
//       ],
//       formTitle: "What you Preferred to connect",
//       button1: "I Need to Work",
//       button2: "I Want to Learn",
//       interestLabel: "What you Interest to learn",
//       interestPlaceholder: "Enter your Interest Eg: Full Stack Development,",
//       submitText: "I'm Ready to Start Happy Learning!"
//     },
//     work: {
//       title: "Why Choose Us for Your Career Growth",
//       highlight: "Growth",
//       benefits: [
//         { icon: Briefcase, title: "Job-Ready Training", desc: "Get trained on the latest tools and technologies used in top companies." },
//         { icon: Users, title: "Industry Connections", desc: "Connect with hiring managers and industry experts directly." },
//         { icon: Target, title: "Career Coaching", desc: "Personalized guidance to help you land your dream job." },
//         { icon: Clock, title: "Flexible Schedules", desc: "Learn at your own pace while balancing work and life." }
//       ],
//       formTitle: "What you're looking for",
//       button1: "I Want to Learn",
//       button2: "I Need to Work",
//       interestLabel: "What role are you interested in?",
//       interestPlaceholder: "Enter your role Eg: Frontend Developer,",
//       submitText: "Get Started with Career Support!"
//     }
//   };

//   const current = content[selectedOption];

//   const resetForm = () => {
//     setFullName("");
//     setEmail("");
//     setPhone("");
//     setInterest("");
//   };

//   const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ type: "", msg: "" });

//     // ✅ basic validation
//     const nameV = fullName.trim();
//     const emailV = email.trim();
//     const phoneV = phone.trim();
//     const interestV = interest.trim();

//     if (!nameV) return setStatus({ type: "error", msg: "Please enter your name." });
//     if (!emailV || !isValidEmail(emailV)) return setStatus({ type: "error", msg: "Please enter a valid email." });
//     if (!phoneV || phoneV.replace(/\D/g, "").length < 10) return setStatus({ type: "error", msg: "Please enter a valid phone number." });
//     if (!interestV) return setStatus({ type: "error", msg: "Please enter your interest / role." });

//     const payload = {
//       full_name: nameV,
//       email_address: emailV,
//       phone_number: phoneV,
//       // backend expects "message" => we include mode + interest here
//       message:
//         `Mode: ${selectedOption.toUpperCase()}\n` +
//         `${selectedOption === "learn" ? "Interest to learn" : "Interested role"}: ${interestV}`
//     };

//     try {
//       setSending(true);

//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });

//       // Your PHP currently returns JSON-encoded string (like: "Your contact information has been sent.")
//       const text = await res.text();
//       let msg = text;
//       try {
//         msg = JSON.parse(text);
//       } catch (_) {}

//       // If server returns non-200, still show message
//       if (!res.ok) {
//         setStatus({ type: "error", msg: typeof msg === "string" ? msg : "Something went wrong." });
//         return;
//       }

//       // Decide success by message text (since backend doesn't return ok:true)
//       const ok =
//         typeof msg === "string" &&
//         msg.toLowerCase().includes("has been sent");

//      if (ok) {
//   setStatus({ type: "success", msg });
//   resetForm();
//   setShowPopup(true); // ✅ open popup
// } else {
//   setStatus({ type: "error", msg: typeof msg === "string" ? msg : "Mail not sent." });
// }

//     } catch (err) {
//       setStatus({ type: "error", msg: "Network error. Please try again." });
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <div className="contact-wrapper">
//       <div>
//         <img src={bgBanner} alt="Contact Banner" className="banner-image" />
//       </div>

//       <div className="contact-container">
//         {/* LEFT CONTENT */}
//         <div className="left-section">
//           <h2 className="title">
//             Why Choose Us for <br />
//             Your Learning <span className="highlight">{current.highlight}</span>
//           </h2>

//           {current.benefits.map((benefit, idx) => {
//             const Icon = benefit.icon;
//             return (
//               <div className="benefit-card" key={idx}>
//                 <div className="icon-box">
//                   <Icon className="icon" />
//                 </div>
//                 <div>
//                   <h4>{benefit.title}</h4>
//                   <p>{benefit.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT CONTENT - Form */}
//         <div className="right-section">
//           <h2 className="connect-title">Connect With Us</h2>
//           <p className="form-label">{current.formTitle}</p>

//           <div className="toggle-wrapper">
//             <button
//               type="button"
//               className={`toggle-btn ${selectedOption === "work" ? "active" : ""}`}
//               onClick={() => setSelectedOption("work")}
//             >
//               <span className="dot"></span> I Need to Work
//             </button>

//             <button
//               type="button"
//               className={`toggle-btn ${selectedOption === "learn" ? "active" : ""}`}
//               onClick={() => setSelectedOption("learn")}
//             >
//               <span className="dot"></span> I Want to Learn
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <label className="input-title">Name</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder="Enter your Full Name  Eg: Raj Kumar"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />

//             <label className="input-title">Email*</label>
//             <input
//               type="email"
//               className="form-input"
//               placeholder="Enter your Email  Eg: rjkumar55@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="input-title">Phone*</label>
//             <div className="phone-input-row">
//               <select className="phone-select" disabled>
//                 <option>India +91</option>
//               </select>
//               <input
//                 type="text"
//                 className="phone-number"
//                 placeholder="Enter your Mobile Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>

//             <label className="input-title">{current.interestLabel}</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder={current.interestPlaceholder}
//               value={interest}
//               onChange={(e) => setInterest(e.target.value)}
//             />

//             {/* status message */}
//             {status.msg ? (
//               <p
//                 style={{
//                   marginTop: 10,
//                   fontSize: 14,
//                   lineHeight: 1.4
//                 }}
//                 className={status.type === "success" ? "status-success" : "status-error"}
//               >
//                 {status.msg}
//               </p>
//             ) : null}

//             <button className="submit-btn" type="submit" disabled={sending}>
//               {sending ? "Sending..." : current.submitText}
//             </button>

//             <p className="footer-note">Once Submit form Our Team will connect with you</p>
//           </form>
//         </div>
//       </div>
// {showPopup && (
//   <div className="pcs-popup-overlay" onClick={() => setShowPopup(false)}>
//     <div className="pcs-popup" onClick={(e) => e.stopPropagation()}>
//       <div className="pcs-popup-icon">✅</div>

//       <h3 className="pcs-popup-title">Mail Sent Successfully!</h3>
//       <p className="pcs-popup-text">
//         Thanks <b>{fullName || "friend"}</b>! Our team will contact you soon.
//       </p>

//       <button className="pcs-popup-btn" onClick={() => setShowPopup(false)}>
//         Okay ✨
//       </button>
//     </div>
//   </div>
// )}

//       <StateSection selectedOption={selectedOption} />
//       <SuccessStories selectedOption={selectedOption} />
//     </div>
//   );
// };

// export default ContactSection;

import React, { useState, useEffect } from "react";
import "./banner.css";
import { User, Activity, Briefcase, Award, Users, Target, Clock, CheckCircle, Sparkles, X } from "lucide-react";
import bgBanner from "../assets/contact/cantactbanner.png";
import StateSection from "./statesection";
import SuccessStories from "./successstories";
import { useLocation } from "react-router-dom";
import CommonButton from "../common/button";

const API_URL = "https://pcstech.in/mail/mail.php";

// ✅ Modern Success Popup Component
const SuccessPopup = ({ show, onClose, userName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
      }));
      setConfetti(particles);
    }
  }, [show]);

  const handleClosePopup = (e) => {
    e?.stopPropagation();
    setIsVisible(false);                 // 🔥 start fade-out
    setTimeout(() => onClose?.(), 250);  // 🔥 after animation close
  };

  if (!show) return null;

  return (
    <div
      className={`popup-overlay ${isVisible ? "active" : ""}`}
      onClick={handleClosePopup}
    >
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="confetti"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div
        className={`popup-card ${isVisible ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
    <button
  type="button"
  className="popup-close-btn"
  onClick={(e) => {
    e.stopPropagation();     // 🔥 VERY IMPORTANT
    handleClosePopup(e);
  }}
>
  <X size={20} />
</button>


        <div className="popup-icon-wrapper">
          <div className="popup-ring popup-ring-1"></div>
          <div className="popup-ring popup-ring-2"></div>
          <div className="popup-ring popup-ring-3"></div>
          <div className="popup-success-icon">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
        </div>

        <div className="popup-sparkle popup-sparkle-1"><Sparkles size={24} /></div>
        <div className="popup-sparkle popup-sparkle-2"><Sparkles size={20} /></div>
        <div className="popup-sparkle popup-sparkle-3"><Sparkles size={16} /></div>

        <h2 className="popup-title">Message Sent Successfully!</h2>

        <p className="popup-message">
          Thanks <b>{userName || "friend"}</b>! <br />
          Your message has been delivered successfully. <br />
          Our team will get back to you shortly!
        </p>

        <div className="popup-orb popup-orb-1"></div>
        <div className="popup-orb popup-orb-2"></div>
      </div>
    </div>
  );
};


const ContactSection = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(location.state?.mode || "learn");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });
 const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };
  const content = {
    learn: {
      title: "Why Choose Us for Your Learning Journey",
      highlight: "Journey",
      benefits: [
        { icon: User, title: "Expert-Led Courses", desc: "Learn from industry professionals with real-world experience." },
        { icon: Activity, title: "Comprehensive Learning Paths", desc: "Structured and detailed courses tailored to your skill goals." },
        { icon: Briefcase, title: "Hands-On Projects", desc: "Apply your knowledge through real projects and gain practical skills." },
        { icon: Award, title: "Certification Upon Completion", desc: "Receive a recognized certificate to boost your career." }
      ],
      formTitle: "What you Preferred to connect",
      button1: "I Need to Work",
      button2: "I Want to Learn",
      interestLabel: "What you Interest to learn",
      interestPlaceholder: "Enter your Interest Eg: Full Stack Development,",
      submitText: "I'm Ready to Start Happy Learning!"
    },
    work: {
      title: "Why Choose Us for Your Career Growth",
      highlight: "Growth",
      benefits: [
        { icon: Briefcase, title: "Job-Ready Training", desc: "Get trained on the latest tools and technologies used in top companies." },
        { icon: Users, title: "Industry Connections", desc: "Connect with hiring managers and industry experts directly." },
        { icon: Target, title: "Career Coaching", desc: "Personalized guidance to help you land your dream job." },
        { icon: Clock, title: "Flexible Schedules", desc: "Learn at your own pace while balancing work and life." }
      ],
      formTitle: "What you're looking for",
      button1: "I Want to Learn",
      button2: "I Need to Work",
      interestLabel: "What role are you interested in?",
      interestPlaceholder: "Enter your role Eg: Frontend Developer,",
      submitText: "Get Started with Career Support!"
    }
  };

  const current = content[selectedOption];

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setInterest("");
  };

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const nameV = fullName.trim();
    const emailV = email.trim();
    const phoneV = phone.trim();
    const interestV = interest.trim();

    if (!nameV) return setStatus({ type: "error", msg: "Please enter your name." });
    if (!emailV || !isValidEmail(emailV)) return setStatus({ type: "error", msg: "Please enter a valid email." });
    if (!phoneV || phoneV.replace(/\D/g, "").length < 10) return setStatus({ type: "error", msg: "Please enter a valid phone number." });
    if (!interestV) return setStatus({ type: "error", msg: "Please enter your interest / role." });

    const payload = {
      full_name: nameV,
      email_address: emailV,
      phone_number: phoneV,
      message:
        `Mode: ${selectedOption.toUpperCase()}\n` +
        `${selectedOption === "learn" ? "Interest to learn" : "Interested role"}: ${interestV}`
    };

    try {
      setSending(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const text = await res.text();
      let msg = text;
      try {
        msg = JSON.parse(text);
      } catch (_) {}

      if (!res.ok) {
        setStatus({ type: "error", msg: typeof msg === "string" ? msg : "Something went wrong." });
        return;
      }

      const ok =
        typeof msg === "string" &&
        msg.toLowerCase().includes("has been sent");

      if (ok) {
        setStatus({ type: "success", msg });
        resetForm();
        setShowPopup(true);
      } else {
        setStatus({ type: "error", msg: typeof msg === "string" ? msg : "Mail not sent." });
      }

    } catch (err) {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

    // ✅ Function to handle button click
  const handleButtonClick = () => {
    setShowPopup(true); // Open popup
  };

  return (
    <div className="contact-wrapper">
      <div>
        <img src={bgBanner} alt="Contact Banner" className="banner-image" />
      </div>
      <div className="contact-container">
        <div className="left-section">
          <h2 className="title">
            Why Choose Us for <br />
            Your Learning <span className="highlight">{current.highlight}</span>
          </h2>


          {current.benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div className="benefit-card" key={idx}>
                <div className="icon-box">
                  <Icon className="icon" />
                </div>
                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="right-section">
          <h2 className="connect-title">Connect With Us</h2>
          <p className="form-label">{current.formTitle}</p>

          <div className="toggle-wrapper">
            <button
              type="button"
              className={`toggle-btn ${selectedOption === "work" ? "active" : ""}`}
              onClick={() => setSelectedOption("work")}
            >
              <span className="dot"></span> I Need to Work
            </button>

            <button
              type="button"
              className={`toggle-btn ${selectedOption === "learn" ? "active" : ""}`}
              onClick={() => setSelectedOption("learn")}
            >
              <span className="dot"></span> I Want to Learn
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="input-title">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your Full Name  Eg: Raj Kumar"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label className="input-title">Email*</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your Email  Eg: rjkumar55@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="input-title">Phone*</label>
            <div className="phone-input-row">
              <select className="phone-select" disabled>
                <option>India +91</option>
              </select>
              <input
                type="text"
                className="phone-number"
                placeholder="Enter your Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <label className="input-title">{current.interestLabel}</label>
            <input
              type="text"
              className="form-input"
              placeholder={current.interestPlaceholder}
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />

            {status.msg ? (
              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.4
                }}
                className={status.type === "success" ? "status-success" : "status-error"}
              >
                {status.msg}
              </p>
            ) : null}

            <button className="submit-btn" type="submit" disabled={sending}>
              {sending ? "Sending..." : current.submitText}
            </button>

            <p className="footer-note">Once Submit form Our Team will connect with you</p>
          </form>
        </div>
      </div>

      {/* ✅ New Modern Popup */}
      <SuccessPopup 
        show={showPopup}
        onClose={() => setShowPopup(false)}
        userName={fullName}
      />

      <StateSection selectedOption={selectedOption} />
      <SuccessStories selectedOption={selectedOption} />
    </div>
  );
};

export default ContactSection;
