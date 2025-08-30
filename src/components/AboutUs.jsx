import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * AboutUs Component
 * Standalone about page with company information, team details, and features
 * Includes navigation back to main app
 */
const AboutUs = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Inline styles for AboutUs page (keeping original styling approach)
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "5% auto",
      padding: "0 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      color: "#2d3748",
      lineHeight: "1.6",
    },
    heading: {
      textAlign: "center",
      fontSize: "3.5rem",
      marginBottom: "20px",
      background: "linear-gradient(135deg, #ff6b6b, #ffa500)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    },
    heroImage: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "50px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
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
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#4a5568",
    },
    teamContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
      marginTop: "30px",
    },
    teamMember: {
      flex: "0 1 280px",
      textAlign: "center",
      backgroundColor: "#fff",
      padding: "30px 20px",
      borderRadius: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
    },
    teamImage: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px",
      border: "4px solid #ffa500",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      marginTop: "30px",
    },
    featureCard: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
      border: "1px solid #e2e8f0",
    },
    featureIcon: {
      fontSize: "2.5rem",
      marginBottom: "15px",
    },
    ctaSection: {
      textAlign: "center",
      background: "linear-gradient(135deg, #ff6b6b, #ffa500)",
      padding: "50px 30px",
      borderRadius: "20px",
      color: "white",
      marginTop: "60px",
    },
    ctaButton: {
      backgroundColor: "white",
      color: "#e53e3e",
      border: "none",
      padding: "15px 40px",
      fontSize: "1.2rem",
      fontWeight: "600",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <h1 style={styles.heading}>About FoodieExpress</h1>
      
      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80"
        alt="Delicious food delivery"
        style={styles.heroImage}
      />
      
      {/* Our Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Mission</h2>
        <p style={styles.paragraph}>
          We're passionate about bringing the best culinary experiences right to your doorstep. 
          From local favorites to exotic cuisines, we connect food lovers with their favorite 
          restaurants while ensuring hot, fresh, and fast delivery. Your cravings are our command, 
          and your satisfaction is our recipe for success.
        </p>
      </section>
      
      {/* Our Story Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Story</h2>
        <p style={styles.paragraph}>
          Born from a simple idea - everyone deserves access to great food without the hassle. 
          What started as a small team of food enthusiasts has grown into a trusted platform 
          serving thousands of hungry customers daily. We've partnered with the best local 
          restaurants and built a network of dedicated delivery partners who share our passion 
          for exceptional service.
        </p>
      </section>
      
      {/* Team Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Meet Our Team</h2>
        <div style={styles.teamContainer}>
          <div style={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Alex Chen"
              style={styles.teamImage}
            />
            <h3 style={{fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", margin: "10px 0 5px 0"}}>Alex Chen</h3>
            <p style={{color: "#e53e3e", fontWeight: "500", margin: "5px 0"}}>CEO & Food Enthusiast</p>
            <p style={{fontStyle: "italic", color: "#718096", fontSize: "0.9rem"}}>"Great food brings people together"</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Sarah Martinez"
              style={styles.teamImage}
            />
            <h3 style={{fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", margin: "10px 0 5px 0"}}>Sarah Martinez</h3>
            <p style={{color: "#e53e3e", fontWeight: "500", margin: "5px 0"}}>Head of Operations</p>
            <p style={{fontStyle: "italic", color: "#718096", fontSize: "0.9rem"}}>"Efficiency with a smile"</p>
          </div>
          <div style={styles.teamMember}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt="Emma Thompson"
              style={styles.teamImage}
            />
            <h3 style={{fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", margin: "10px 0 5px 0"}}>Emma Thompson</h3>
            <p style={{color: "#e53e3e", fontWeight: "500", margin: "5px 0"}}>Customer Experience Lead</p>
            <p style={{fontStyle: "italic", color: "#718096", fontSize: "0.9rem"}}>"Every order tells a story"</p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>What We Offer</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🍕</div>
            <h4>Diverse Cuisines</h4>
            <p>From Italian pasta to Asian stir-fry, explore flavors from around the world</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h4>Lightning Fast</h4>
            <p>Average delivery time of 30 minutes or less to your location</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📱</div>
            <h4>Easy Ordering</h4>
            <p>User-friendly app with real-time tracking and secure payments</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌟</div>
            <h4>Quality Partners</h4>
            <p>Carefully selected restaurants with high ratings and quality standards</p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Values</h2>
        <ul style={{listStyleType: "none", padding: "0", fontSize: "1.1rem", lineHeight: "1.8"}}>
          <li><strong>Freshness First:</strong> We ensure every meal arrives hot, fresh, and delicious</li>
          <li><strong>Speed & Reliability:</strong> Quick delivery times you can count on</li>
          <li><strong>Community Focus:</strong> Supporting local restaurants and creating jobs</li>
          <li><strong>Customer Delight:</strong> Going above and beyond to exceed expectations</li>
          <li><strong>Food Safety:</strong> Maintaining the highest standards of hygiene and safety</li>
          <li><strong>Innovation:</strong> Continuously improving our technology and service</li>
        </ul>
      </section>
      
      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={{fontSize: "2.5rem", marginBottom: "15px", fontWeight: "bold"}}>Ready to satisfy your cravings?</h2>
        <p style={{fontSize: "1.3rem", marginBottom: "30px", opacity: "0.9"}}>
          Join thousands of happy customers who trust us with their daily meals
        </p>
        <button style={styles.ctaButton} onClick={() => navigate("/")}>Order Now</button>
      </section>
    </div>
  );
};

export default AboutUs;