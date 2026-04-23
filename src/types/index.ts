export type DietaryPreference = "none" | "vegetarian" | "vegan";

export type ItemCategory = "meat" | "side" | "drink" | "other";

export interface Participant {
  id: string;
  name: string;
  dietary: DietaryPreference;
}

export interface AsadoItem {
  id: string;
  name: string;
  category: ItemCategory;
  quantity: number;
  unit: string;
  pricePerUnit: number;
}

export interface CostBreakdown {
  totalCost: number;
  costPerPerson: number;
  byCategory: Record<ItemCategory, number>;
  itemizedCosts: Array<{
    item: AsadoItem;
    subtotal: number;
  }>;
}
