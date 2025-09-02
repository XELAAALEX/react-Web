const UserOffline = ({ onRetry }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "#f8fafc",
      textAlign: "center",
      padding: "20px",
    },
    card: {
      background: "#fff",
      padding: "30px 40px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
      maxWidth: "400px",
      width: "100%",
      animation: "fadeIn 0.4s ease-in-out",
    },
    heading: {
      fontSize: "2rem",
      color: "#e53e3e",
      marginBottom: "12px",
    },
    message: {
      fontSize: "1rem",
      color: "#4a5568",
      marginBottom: "20px",
      lineHeight: 1.5,
    },
    button: {
      background: "#3182ce",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🔴 You’re Offline</h1>
        <p style={styles.message}>
          Looks like you lost internet connection. Please check your network
          and try again.
        </p>

        {onRetry && (
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.background = "#2b6cb0")}
            onMouseLeave={(e) => (e.target.style.background = "#3182ce")}
            onClick={onRetry}
          >
            Retry Connection
          </button>
        )}
      </div>
    </div>
  );
};

export default UserOffline;
