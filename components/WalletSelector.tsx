"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

type Option = {
  value: string;
  label: string;
  icon: string;
};

const cryptoWallets: Option[] = [
  { value: "metamask", label: "Metamask", icon: "/icons/metamask.svg" },
  { value: "rainbow", label: "Rainbow", icon: "/icons/rainbow.svg" },
  {
    value: "walletconnect",
    label: "WalletConnect",
    icon: "/icons/walletconnect.svg",
  },
  {
    value: "other",
    label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: "/icons/Wallet.svg",
  },
];

const fiatPayments: Option[] = [
  { value: "bank", label: "Bank Transfer", icon: "/icons/bank.png" },
  { value: "card", label: "Card Payment", icon: "/icons/card.png" },
  { value: "paypal", label: "PayPal", icon: "/icons/paypal.png" },
  { value: "other", label: "Other Payment Methods", icon: "/icons/Wallet.svg" },
];

interface WalletSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "crypto" | "fiat";
  error?: string;
}

export function WalletSelector({
  label,
  value,
  onChange,
  type,
  error,
}: WalletSelectorProps) {
  const options = type === "crypto" ? cryptoWallets : fiatPayments;

  return (
    <div className="space-y-2 md:space-y-4">
      <Label className="font-medium text-primary text-base">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className="w-full border-[#E0E0E0] p-4 md:py-5 md:px-6 rounded-[30px] cursor-pointer"
          aria-invalid={!!error}
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent
          align="center"
          className="data-[side=bottom]:-translate-y-4 data-[side=left]:-translate-x-4 data-[side=right]:-translate-x-2 data-[side=top]:-translate-y-1 w-[90%] mx-auto"
        >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="w-[90%]">
              <span className="flex items-center gap-2">
                <Image
                  src={option.icon}
                  alt={option.label}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{option.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
