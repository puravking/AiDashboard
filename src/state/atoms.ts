// src/state/atoms.ts
import { atom, selector } from "recoil";
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
    },
    {
      id: 4,
      title: "Unauthorized Model Fine-Tuning Detected",
      description: "A deployed AI model was unintentionally fine-tuned with unauthorized external data, leading to subtle bias shifts in output.",
      severity: "Medium",
      reported_at: "2025-04-10T14:22:00Z"
    }
  ], // Default data (mock incidents)
});

// Atom to store the new incident ID
export const newIncidentIdState = atom<number | null>({
  key: 'newIncidentIdState',
  default: null,
});

// Selector to count the total number of incidents
export const totalIncidentsState = selector<number>({
  key: 'totalIncidentsState', // Unique ID for this selector
  get: ({ get }) => {
    const incidents = get(incidentsState);
    return incidents.length;
  },
});

// Selector to count the incidents by severity
export const highSeverityCountState = selector<number>({
  key: 'highSeverityCountState',
  get: ({ get }) => {
    const incidents = get(incidentsState);
    return incidents.filter(incident => incident.severity === 'High').length;
  },
});

export const mediumSeverityCountState = selector<number>({
  key: 'mediumSeverityCountState',
  get: ({ get }) => {
    const incidents = get(incidentsState);
    return incidents.filter(incident => incident.severity === 'Medium').length;
  },
});

export const lowSeverityCountState = selector<number>({
  key: 'lowSeverityCountState',
  get: ({ get }) => {
    const incidents = get(incidentsState);
    return incidents.filter(incident => incident.severity === 'Low').length;
  },
});
