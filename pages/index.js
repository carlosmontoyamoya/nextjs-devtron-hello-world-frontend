import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
    fetch(process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: " + err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>FastAPI + Next.js Demo 🚀</h1>
      <p>API Response: {message}</p>
    </div>
  );
}