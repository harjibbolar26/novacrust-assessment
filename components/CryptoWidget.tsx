"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CryptoToCash } from "./CryptoToCash"
import { CashToCrypto } from "./CashToCrypto"
import { CryptoToFiatLoan } from "./CryptoToFiat"
import { ModeSelector } from "./ModeSelector"

type Mode = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat-loan"

export function CryptoWidget() {
  const [mode, setMode] = useState<Mode>("crypto-to-cash")

  return (
    <Card className="w-fit lg:py-10 md:py-8 py-6 lg:px-16 md:px-10 px-6 bg-background shadow-xl rounded-[30px]">
      <div className="mb-4">
        {/* <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">Widget</h2> */}
        <ModeSelector mode={mode} onModeChange={setMode} />
      </div>

      {mode === "crypto-to-cash" && <CryptoToCash />}
      {mode === "cash-to-crypto" && <CashToCrypto />}
      {mode === "crypto-to-fiat-loan" && <CryptoToFiatLoan />}
    </Card>
  )
}
