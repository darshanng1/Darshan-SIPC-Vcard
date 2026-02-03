
import React from 'react';
import { 
  Bug, 
  ShieldCheck, 
  Home, 
  Building2, 
  Zap, 
  Waves, 
  Trash2, 
  MousePointer2, 
  Wind,
  ShieldAlert,
  CalendarCheck2
} from 'lucide-react';
import { PestService, ContactDetails } from './types';

export const DARSHAN_CONTACT: ContactDetails = {
  name: "Darshan N G",
  designation: "Sr. Business Development",
  company: "Secure India Pest Control Pvt Ltd (SIPC)",
  phone: "+91 9686407061",
  email: "darshan.ng@sipc.in",
  office: "Bengaluru – 560016"
};

export const SERVICES: PestService[] = [
  {
    id: 'cockroach',
    title: 'Cockroach Control',
    problem: 'Rapid infestation in kitchens, drains, and food storage areas.',
    risk: 'Carries Salmonella, E. coli, and triggers asthma/allergies.',
    whyProfessional: 'DIY sprays often miss deep nesting sites; professional gel and spray treatment is required for elimination.',
    approach: 'Baiting with advanced gel technology and residual spraying in key hotspots.',
    locations: ['Residential Kitchens', 'Restaurants', 'Food Processing Units'],
    icon: <Bug className="w-8 h-8" />
  },
  {
    id: 'termite',
    title: 'Termite Control (Pre & Post)',
    problem: 'Silent destroyers of wooden furniture, doors, and structural foundations.',
    risk: 'Can cause massive structural damage worth lakhs before detection.',
    whyProfessional: 'Standard chemicals don\'t reach colonies under tiles/slabs. Drilling and sub-soil treatment is mandatory.',
    approach: 'Drill-Fill-Seal method using specialized termiticides for long-term protection.',
    locations: ['New Construction Sites', 'Existing Homes', 'Offices'],
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    id: 'bedbug',
    title: 'Bed Bug Control',
    problem: 'Nocturnal blood-suckers hiding in mattress seams and furniture cracks.',
    risk: 'Sleep deprivation, skin rashes, and psychological stress.',
    whyProfessional: 'Eggs are resistant to normal aerosols. Requires high-potency targeted treatment.',
    approach: 'Intense two-stage spray treatment focusing on all potential hiding spots.',
    locations: ['Bedrooms', 'PGs', 'Hotels', 'Hostels'],
    icon: <Bug className="w-8 h-8" />
  },
  {
    id: 'mosquito',
    title: 'Mosquito Control',
    problem: 'Breeding in stagnant water and dark corners.',
    risk: 'Spread of Dengue, Malaria, and Chikungunya.',
    whyProfessional: 'Fogging and larviciding require specific timing and concentration to be effective.',
    approach: 'Thermal fogging and indoor residual spray (IRS) treatments.',
    locations: ['Gardens', 'Residential Layouts', 'Construction Sites'],
    icon: <Wind className="w-8 h-8" />
  },
  {
    id: 'rodent',
    title: 'Rodent (Rat) Control',
    problem: 'Rats chewing through wires, food items, and structural materials.',
    risk: 'Spread of Leptospirosis and risk of electrical fires due to wire gnawing.',
    whyProfessional: 'Rats are "bait-shy". Professional trapping and chemical tracking are needed.',
    approach: 'Bait stations, glue boards, and strategic repellent placement.',
    locations: ['Warehouses', 'IT Parks', 'Commercial Kitchens'],
    icon: <MousePointer2 className="w-8 h-8" />
  },
  {
    id: 'ant',
    title: 'Ant Control',
    problem: 'Invasion of food preparation areas by foraging colonies.',
    risk: 'Contamination of food and structural damage in wooden areas.',
    whyProfessional: 'Killing individual ants doesn\'t stop the colony; the queen must be targeted.',
    approach: 'Colony-transfer technology using bait and targeted residual treatment.',
    locations: ['Apartments', 'Pantries', 'Garden Areas'],
    icon: <Bug className="w-8 h-8" />
  },
  {
    id: 'amc',
    title: 'General Pest Control (AMC)',
    problem: 'Recurring seasonal pest issues that disrupt hygiene.',
    risk: 'Inconsistent hygiene standards leading to health hazards.',
    whyProfessional: 'Regular monitoring ensures pests never establish a colony.',
    approach: 'Scheduled maintenance visits covering a spectrum of common household pests.',
    locations: ['Villas', 'Corporate Offices', 'Clinics'],
    icon: <CalendarCheck2 className="w-8 h-8" />
  },
  {
    id: 'commercial',
    title: 'Commercial Pest Control',
    problem: 'Large scale infestations in complex environments.',
    risk: 'Business reputation loss, regulatory fines, and inventory damage.',
    whyProfessional: 'Needs documentation, compliance with safety standards, and off-hour services.',
    approach: 'Integrated Pest Management (IPM) tailored for industrial and corporate needs.',
    locations: ['Factories', 'Malls', 'IT Parks'],
    icon: <Building2 className="w-8 h-8" />
  }
];
