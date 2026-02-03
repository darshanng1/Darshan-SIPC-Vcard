
// Added React import to resolve React.ReactNode namespace error
import React from 'react';

export interface PestService {
  id: string;
  title: string;
  problem: string;
  risk: string;
  whyProfessional: string;
  approach: string;
  locations: string[];
  icon: React.ReactNode;
}

export interface BookingFormData {
  name: string;
  mobile: string;
  location: string;
  pestProblem: string;
  preferredDate: string;
  preferredTime: string;
}

export interface ContactDetails {
  name: string;
  designation: string;
  company: string;
  phone: string;
  email: string;
  office: string;
}