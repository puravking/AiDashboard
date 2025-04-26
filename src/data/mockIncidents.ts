
export type Incident = {
    id: number;
    title: string;
    description: string;
    severity: "High" | "Medium" | "Low"; // ✅ Remove `severity as`, just directly write the union type
    reported_at: string;
  };
  