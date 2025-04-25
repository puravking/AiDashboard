// src/state/atoms.ts
import { atom } from "recoil";
import { Incident } from "../data/mockIncidents";

// Atom to store incidents
export const incidentsState = atom<Incident[]>({
  key: "incidentsState", // Unique ID for this atom
  default: [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information...",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata...",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z"
    }
  ], // Default data (mock incidents)
});
