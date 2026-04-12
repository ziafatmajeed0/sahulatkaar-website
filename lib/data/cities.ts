export interface City {
  name: string;
  province: string;
  coverage: string;
  neighborhoods: number;
}

export interface Region {
  region: string;
  cities: string[];
}

export const cities: City[] = [
  { name: "Karachi", province: "Sindh", coverage: "100%", neighborhoods: 15 },
  { name: "Lahore", province: "Punjab", coverage: "100%", neighborhoods: 12 },
  { name: "Islamabad", province: "Federal", coverage: "100%", neighborhoods: 8 },
  { name: "Rawalpindi", province: "Punjab", coverage: "100%", neighborhoods: 6 },
  { name: "Faisalabad", province: "Punjab", coverage: "95%", neighborhoods: 5 },
  { name: "Multan", province: "Punjab", coverage: "90%", neighborhoods: 4 },
  { name: "Peshawar", province: "KPK", coverage: "100%", neighborhoods: 5 },
  { name: "Quetta", province: "Balochistan", coverage: "85%", neighborhoods: 3 },
  { name: "Hyderabad", province: "Sindh", coverage: "98%", neighborhoods: 4 },
  { name: "Gujranwala", province: "Punjab", coverage: "92%", neighborhoods: 4 },
  { name: "Sialkot", province: "Punjab", coverage: "88%", neighborhoods: 3 },
  { name: "Sargodha", province: "Punjab", coverage: "85%", neighborhoods: 2 },
  { name: "Abbottabad", province: "KPK", coverage: "90%", neighborhoods: 2 },
  { name: "Mirpur Khas", province: "Sindh", coverage: "80%", neighborhoods: 2 },
  { name: "Jhang", province: "Punjab", coverage: "82%", neighborhoods: 2 },
];

export const regions: Region[] = [
  { region: "Sindh", cities: ["Karachi", "Hyderabad", "Mirpur Khas"] },
  { region: "Punjab", cities: ["Lahore", "Faisalabad", "Multan", "Rawalpindi", "Gujranwala", "Sialkot", "Sargodha", "Jhang"] },
  { region: "KPK", cities: ["Peshawar", "Abbottabad"] },
  { region: "Federal", cities: ["Islamabad"] },
  { region: "Balochistan", cities: ["Quetta"] },
];
