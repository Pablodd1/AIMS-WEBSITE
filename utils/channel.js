// utils/broadcast.js
class Broadcast {
  constructor(name) {
    this.channel =
      typeof window !== "undefined" ? new BroadcastChannel(name) : null;
    this.listeners = new Set();

    if (this.channel) {
      this.channel.onmessage = (event) => {
        this.listeners.forEach((cb) => cb(event.data));
      };
    }
  }

  subscribe(cb) {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb); // cleanup fn
  }

  publish(data) {
    if (this.channel) this.channel.postMessage(data);
    // Also trigger locally (current tab)
    this.listeners.forEach((cb) => cb(data));
  }
}

// Export a singleton instance (so same channel is reused)
export const cartChannel = new Broadcast("app_channel_name");

/*
===================== READ / SUBSCRIBE =========================

"use client";
import { useEffect, useState } from "react";
import { cartChannel } from "@/utils/broadcast";

export default function CartBadge() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // subscribe to updates
        const unsubscribe = cartChannel.subscribe((data) => {
            if (data.type === "UPDATE_COUNT") {
                setCount(data.value);
            }
        });
        return unsubscribe;
    }, []);

    return <span>🛒 {count}</span>;
}

*/

/*
========================== TRIGGER UPDATE ===========================

"use client";
import { cartChannel } from "@/utils/broadcast";

export default function AddToCartButton() {
  const handleClick = () => {
    // example: update cart count to 5
    cartChannel.publish({ type: "UPDATE_COUNT", value: 5 });
  };

  return <button onClick={handleClick}>Add to Cart</button>;
}


*/
