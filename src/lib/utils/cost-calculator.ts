import type { AsadoItem, CostBreakdown, ItemCategory, Participant } from "@/types";

// TALLER: implementar validación Zod y edge cases
// (participantes vacíos, precios negativos, cantidades cero)
export function calculateCostBreakdown(
  items: AsadoItem[],
  participants: Participant[]
): CostBreakdown {
  const itemizedCosts = items.map((item) => ({
    item,
    subtotal: item.quantity * item.pricePerUnit,
  }));

  const totalCost = itemizedCosts.reduce(
    (sum, { subtotal }) => sum + subtotal,
    0
  );

  const byCategory = itemizedCosts.reduce(
    (acc, { item, subtotal }) => {
      acc[item.category] = (acc[item.category] ?? 0) + subtotal;
      return acc;
    },
    {} as Record<ItemCategory, number>
  );

  const costPerPerson =
    participants.length > 0 ? totalCost / participants.length : 0;

  return {
    totalCost,
    costPerPerson,
    byCategory,
    itemizedCosts,
  };
}
