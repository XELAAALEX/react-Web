import React from "react";

/**
 * RestaurantMenuShimmer Component
 * Loading shimmer effect for restaurant menu page
 * Mimics the structure of the actual menu while data is being fetched
 */
export const RestaurantMenuShimmer = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", padding: "20px", fontFamily: "sans-serif" }}>
      {/* Restaurant header shimmer */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div
          style={{
            width: "150px",
            height: "120px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          }}
          className="shimmer-animated"
        ></div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              width: "60%",
              height: "24px",
              backgroundColor: "#f0f0f0",
              marginBottom: "12px",
              borderRadius: "4px"
            }}
            className="shimmer-animated"
          ></div>
          <div
            style={{
              width: "40%",
              height: "18px",
              backgroundColor: "#f0f0f0",
              marginBottom: "10px",
              borderRadius: "4px"
            }}
            className="shimmer-animated"
          ></div>
          <div
            style={{
              width: "70%",
              height: "16px",
              backgroundColor: "#f0f0f0",
              marginBottom: "10px",
              borderRadius: "4px"
            }}
            className="shimmer-animated"
          ></div>
          <div
            style={{
              width: "30%",
              height: "16px",
              backgroundColor: "#f0f0f0",
              marginBottom: "10px",
              borderRadius: "4px"
            }}
            className="shimmer-animated"
          ></div>
        </div>
      </div>

      {/* Menu section title shimmer */}
      <div
        style={{
          width: "120px",
          height: "28px",
          backgroundColor: "#f0f0f0",
          marginBottom: "20px",
          borderRadius: "4px"
        }}
        className="shimmer-animated"
      ></div>

      {/* Menu items shimmer */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            padding: "20px 0",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                width: "50%",
                height: "20px",
                backgroundColor: "#f0f0f0",
                marginBottom: "12px",
                borderRadius: "4px"
              }}
              className="shimmer-animated"
            ></div>
            <div
              style={{
                width: "30%",
                height: "16px",
                backgroundColor: "#f0f0f0",
                marginBottom: "10px",
                borderRadius: "4px"
              }}
              className="shimmer-animated"
            ></div>
            <div
              style={{
                width: "80%",
                height: "14px",
                backgroundColor: "#f0f0f0",
                marginBottom: "8px",
                borderRadius: "4px"
              }}
              className="shimmer-animated"
            ></div>
            <div
              style={{
                width: "25%",
                height: "14px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px"
              }}
              className="shimmer-animated"
            ></div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "120px",
                height: "100px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
              className="shimmer-animated"
            ></div>
            <div
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#f0f0f0",
                borderRadius: "6px",
                margin: "0 auto",
              }}
              className="shimmer-animated"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};