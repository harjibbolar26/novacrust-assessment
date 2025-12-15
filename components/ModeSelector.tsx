"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMediaQuery } from "@/hooks/useMediaQuery"

type Mode = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat-loan"

interface ModeSelectorProps {
  mode: Mode
  onModeChange: (mode: Mode) => void
}

const modes = [
  { value: "crypto-to-cash", label: "Crypto to cash" },
  { value: "cash-to-crypto", label: "Cash to crypto" },
  { value: "crypto-to-fiat-loan", label: "Crypto to fiat loan" },
] as const

export function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  const isMobile = useMediaQuery("(max-width: 640px)")

  if (isMobile) {
    return (
      <Select value={mode} onValueChange={(value) => onModeChange(value as Mode)}>
        <SelectTrigger className="w-full rounded-[30px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {modes.map((m) => (
            <SelectItem key={m.value} value={m.value}>
              {m.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <div className="flex gap-2 flex-wrap bg-[#F2F2F2] w-fit items-center justify-center mx-auto rounded-[30px]">
      {modes.map((m) => (
        <Button
          key={m.value}
          variant={mode === m.value ? "default" : "outline"}
          size="sm"
          onClick={() => onModeChange(m.value as Mode)}
          className="text-sm rounded-[30px] min-w-30"
        >
          {m.label}
        </Button>
      ))}
    </div>
  )
}
