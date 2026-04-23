"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { DietaryPreference, Participant } from "@/types";

// TALLER: completar schema con mensajes de error en español y validaciones adicionales
const participantSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  dietary: z.enum(["none", "vegetarian", "vegan"] as const),
});

type ParticipantFormData = z.infer<typeof participantSchema>;

interface ParticipantFormProps {
  onAdd: (participant: Participant) => void;
}

export function ParticipantForm({ onAdd }: ParticipantFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ParticipantFormData>({
    resolver: zodResolver(participantSchema),
    defaultValues: { dietary: "none" },
  });

  const onSubmit = (data: ParticipantFormData) => {
    // TALLER: conectar a cálculo real de costos al agregar participante
    onAdd({
      id: crypto.randomUUID(),
      name: data.name,
      dietary: data.dietary as DietaryPreference,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          {...register("name")}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Nombre del participante"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferencia alimentaria
        </label>
        <select
          {...register("dietary")}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="none">Sin restricciones</option>
          <option value="vegetarian">Vegetariano</option>
          <option value="vegan">Vegano</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors"
      >
        Agregar participante
      </button>
    </form>
  );
}
