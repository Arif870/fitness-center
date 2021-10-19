import { useEffect, useState } from "react";

export default function useFatch() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return [services];
}
