export type Position = { value: string; label: string };

export type Status = "approved" | "rejected" | "waiting";

export type ApplicationResponse = {
  id: number;
  name: string;
  email: string;
  birth_date: string;
  position_applied: string;
  application_date: string;
  year_of_experience: number;
  status: Status;
};
