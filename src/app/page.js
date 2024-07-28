"use client";
import "./styles/global.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }
  }, []);

  const requestNotificationPermission = () => {
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    } else {
      console.log("Notification permission status:", Notification.permission);
    }
  };

  const sendNotification = () => {
    if (Notification.permission === "granted") {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification("Hello, World!", {
            body: "This is a notification.",
            icon: "icon.png",
          });
        });
      }
    } else if (Notification.permission === "default") {
      requestNotificationPermission();
    } else {
      console.log("Notification permission denied.");
    }
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.hola}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        hola!
      </motion.h1>
      <div className={styles.bellIconContainer}>
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.circle} ${styles.circle3}`} />
        <motion.div
          className={styles.bellIcon}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span role="img" aria-label="bell">
            🔔
          </span>
        </motion.div>
      </div>
      <div className="text-center">
        <motion.h2
          className={styles.heading}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem Ipsum
        </motion.h2>
        <motion.p
          className={styles.paragraph}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet.
        </motion.p>
      </div>
      <motion.button
        className={styles.customButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={sendNotification}
      >
        Send Notification
      </motion.button>
    </div>
  );
}
