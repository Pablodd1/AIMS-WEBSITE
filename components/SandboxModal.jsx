"use client";
import React, { useEffect, useRef, useState } from "react";

// A lightweight ambient-sandbox modal for the Simulate Visit flow
export default function SandboxModal({ open, onClose }) {
  const modalRef = useRef(null);
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    if (!open) return;
    // Focus management
    setTranscript("");
    setListening(true);
    setNotes(null);
    // Simulated ambient workflow
    const t1 = setTimeout(() => {
      setTranscript("Persistent lower back pain for 3 weeks, radiating to left leg. History of hypertension.");
      setListening(false);
    }, 1200);
    const t2 = setTimeout(() => {
      setNotes({ chiefComplaint: "Lower back pain", duration: "3 weeks", medicalHistory: "Hypertension" });
    }, 2400);
    // Cleanup
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // Simple focus trap: focus first focusable in modal
    setTimeout(() => {
      modalRef.current?.focus();
    }, 50);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ambient Visit Sandbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-6 md:p-8"
        style={{ outline: "none" }}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold">Ambient Visit Sandbox</h3>
          <button aria-label="Close" onClick={onClose} className="text-gray-500 hover:text-gray-800">✕</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section aria-label="Ambient Waveform" className="p-3 border rounded-lg border-gray-200">
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs font-bold text-gray-600">Ambient Channel</span>
              <span className="text-xs text-gray-500">Live</span>
            </div>
            <div className="flex items-end gap-1" aria-label="Ambient waveform">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-1 rounded bg-gradient-to-t from-blue-500 to-teal-400 animate-pulse" style={{ height: `${40 + (i * 4) % 50}px` }} />
              ))}
            </div>
          </section>
          <section aria-label="Transcript" className="p-3 border rounded-lg border-gray-200">
            <div className="text-xs font-bold text-gray-600 mb-1">Transcript</div>
            <div className="text-sm text-gray-800 min-h-[72px]" aria-live="polite">{transcript || "Listening..."}</div>
          </section>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-600">Note: This is a simulated sandbox for real-time ambient listening.</div>
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Close</button>
        </div>
      </div>
    </div>
  );
}
