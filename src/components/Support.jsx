import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Support Component
 * Multi-tab support page with FAQ, Contact Form, and Order Tracking
 * Includes form validation and tab switching functionality
 */
const Support = () => {
  // State management for active tab and form data
  const [activeTab, setActiveTab] = useState("faq");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  /**
   * Handle form input changes
   * Updates form data state when user types in form fields
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  /**
   * Handle form submission
   * Validates form and shows success message
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a server
    alert("Thank you for your message! We'll get back to you soon.");
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  // FAQ data array for easy maintenance
  const faqData = [
    {
      question: "How long does delivery take?",
      answer: "Our average delivery time is 30-45 minutes, depending on your location and restaurant preparation time."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver within a 10km radius of participating restaurants. You can check if your address is in our delivery zone by entering it during checkout."
    },
    {
      question: "How can I pay for my order?",
      answer: "We accept credit/debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery."
    },
    {
      question: "What if there's an issue with my order?",
      answer: "If you experience any issues with your order, please contact our support team within 30 minutes of delivery. We'll do our best to resolve the problem."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 5 minutes of placing it. After that, the restaurant may have already started preparation."
    }
  ];

  // Contact methods data
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "support@foodieexpress.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (800) 123-FOOD",
      description: "Mon-Sun, 8am - 11pm"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available on our app",
      description: "Instant support during business hours"
    }
  ];

  // Inline styles (keeping original approach)
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: "#2d3748",
      lineHeight: "1.6",
    },
    heading: {
      textAlign: "center",
      fontSize: "3rem",
      marginBottom: "10px",
      background: "linear-gradient(135deg, #ff6b6b, #ffa500)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1.2rem",
      color: "#4a5568",
      marginBottom: "40px",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "40px",
      borderBottom: "2px solid #e2e8f0",
    },
    tabButton: {
      padding: "12px 24px",
      fontSize: "1.1rem",
      fontWeight: "600",
      backgroundColor: "transparent",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "2px solid transparent",
      cursor: "pointer",
      color: "#718096",
      transition: "all 0.3s ease",
    },
    activeTab: {
      color: "#e53e3e",
      borderBottom: "3px solid #e53e3e",
    },
    section: {
      marginBottom: "50px",
    },
    subHeading: {
      fontSize: "2.2rem",
      marginBottom: "20px",
      color: "#e53e3e",
      borderBottom: "3px solid #ffa500",
      display: "inline-block",
      paddingBottom: "8px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <h1 style={styles.heading}>FoodieExpress Support</h1>
      <p style={styles.subtitle}>We're here to help you with any questions or concerns</p>
      
      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button 
          style={activeTab === "faq" ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab("faq")}
        >
          FAQ
        </button>
        <button 
          style={activeTab === "contact" ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab("contact")}
        >
          Contact Us
        </button>
        <button 
          style={activeTab === "track" ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab("track")}
        >
          Track Order
        </button>
      </div>
      
      {/* FAQ Section */}
      {activeTab === "faq" && (
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Frequently Asked Questions</h2>
          <div style={{marginTop: "20px"}}>
            {faqData.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "15px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
              }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "10px"
                }}>{faq.question}</h3>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#4a5568",
                  lineHeight: "1.6"
                }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Contact Section */}
      {activeTab === "contact" && (
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Get in Touch</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "30px"
          }}>
            {/* Contact Information */}
            <div style={{
              backgroundColor: "#f7fafc",
              padding: "30px",
              borderRadius: "10px"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px"
              }}>Contact Information</h3>
              <p style={{
                fontSize: "1.1rem",
                color: "#4a5568",
                marginBottom: "25px",
                lineHeight: "1.6"
              }}>
                Have questions about your order or need assistance? 
                Reach out to our friendly support team through any of these methods.
              </p>
              
              {contactMethods.map((method, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "25px"
                }}>
                  <div style={{fontSize: "2rem", marginRight: "15px"}}>{method.icon}</div>
                  <div style={{flex: "1"}}>
                    <h4 style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "5px"
                    }}>{method.title}</h4>
                    <p style={{
                      fontSize: "1.1rem",
                      color: "#e53e3e",
                      fontWeight: "500",
                      marginBottom: "5px"
                    }}>{method.details}</p>
                    <p style={{
                      fontSize: "1rem",
                      color: "#718096"
                    }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
            }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px"
              }}>Send us a Message</h3>
              <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <div style={{marginBottom: "20px"}}>
                  <label htmlFor="name" style={{
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#2d3748",
                    marginBottom: "8px"
                  }}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "1rem",
                      border: "1px solid #cbd5e0",
                      borderRadius: "6px",
                      transition: "border-color 0.2s ease"
                    }}
                    required
                  />
                </div>
                
                <div style={{marginBottom: "20px"}}>
                  <label htmlFor="email" style={{
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#2d3748",
                    marginBottom: "8px"
                  }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "1rem",
                      border: "1px solid #cbd5e0",
                      borderRadius: "6px",
                      transition: "border-color 0.2s ease"
                    }}
                    required
                  />
                </div>
                
                <div style={{marginBottom: "20px"}}>
                  <label htmlFor="subject" style={{
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#2d3748",
                    marginBottom: "8px"
                  }}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "1rem",
                      border: "1px solid #cbd5e0",
                      borderRadius: "6px",
                      transition: "border-color 0.2s ease"
                    }}
                    required
                  />
                </div>
                
                <div style={{marginBottom: "20px"}}>
                  <label htmlFor="message" style={{
                    display: "block",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#2d3748",
                    marginBottom: "8px"
                  }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      fontSize: "1rem",
                      border: "1px solid #cbd5e0",
                      borderRadius: "6px",
                      resize: "vertical",
                      minHeight: "120px",
                      transition: "border-color 0.2s ease",
                      fontFamily: "inherit"
                    }}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" style={{
                  backgroundColor: "#e53e3e",
                  color: "white",
                  border: "none",
                  padding: "15px 25px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease"
                }}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      )}
      
      {/* Track Order Section */}
      {activeTab === "track" && (
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Track Your Order</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            marginTop: "30px"
          }}>
            <div style={{borderRadius: "10px", overflow: "hidden"}}>
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Food delivery tracking"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div style={{padding: "10px"}}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "15px"
              }}>Real-time Order Tracking</h3>
              <p style={{
                fontSize: "1.1rem",
                color: "#4a5568",
                marginBottom: "25px",
                lineHeight: "1.6"
              }}>
                Enter your order ID to check the status of your delivery. 
                You can also track your order in real-time through our mobile app.
              </p>
              
              <div style={{display: "flex", marginBottom: "30px"}}>
                <input
                  type="text"
                  placeholder="Enter your order ID"
                  style={{
                    flex: "1",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    border: "1px solid #cbd5e0",
                    borderRadius: "6px 0 0 6px"
                  }}
                />
                <button style={{
                  backgroundColor: "#e53e3e",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "0 6px 6px 0",
                  cursor: "pointer"
                }}>Track Order</button>
              </div>
              
              <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {[
                  {icon: "📋", title: "Order Received", desc: "Restaurant is preparing your food"},
                  {icon: "👨‍🍳", title: "Preparation", desc: "Your order is being cooked"},
                  {icon: "🚗", title: "On the Way", desc: "Driver is delivering your order"},
                  {icon: "🎉", title: "Delivered", desc: "Enjoy your meal!"}
                ].map((step, index) => (
                  <div key={index} style={{display: "flex", alignItems: "center"}}>
                    <div style={{fontSize: "1.8rem", marginRight: "15px"}}>{step.icon}</div>
                    <div style={{flex: "1"}}>
                      <h4 style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        marginBottom: "5px"
                      }}>{step.title}</h4>
                      <p style={{
                        fontSize: "1rem",
                        color: "#718096"
                      }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Quick Links Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Quick Help</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          {[
            {title: "Order Issues", desc: "Missing items, wrong order, or quality problems", link: "/support/order-issues"},
            {title: "Account & Payment", desc: "Login issues, payment methods, refunds", link: "/support/account"},
            {title: "Technical Support", desc: "App not working, website issues", link: "/support/technical"},
            {title: "Restaurant Information", desc: "Menu questions, dietary restrictions", link: "/support/restaurants"}
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              textAlign: "center"
            }}>
              <h4 style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "10px"
              }}>{item.title}</h4>
              <p style={{
                fontSize: "1rem",
                color: "#4a5568",
                marginBottom: "15px"
              }}>{item.desc}</p>
              <Link to={item.link} style={{
                color: "#e53e3e",
                fontWeight: "600",
                textDecoration: "none"
              }}>Get Help</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;