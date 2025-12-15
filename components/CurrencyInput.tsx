"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const currencies = [
  { value: "ETH", label: "ETH", icon: "/icons/eth.svg" },
  { value: "BTC", label: "BTC", icon: "/icons/btc.svg" },
  { value: "USDT", label: "USDT", icon: "/icons/usdt.svg" },
  { value: "USDT - CELO", label: "USDT - CELO", icon: "/icons/celo.svg" },
  { value: "USDT - TON", label: "USDT - TON", icon: "/icons/ton.svg" },
  { value: "USDT - BNB", label: "USDT - BNB", icon: "/icons/bnb.svg" },
  { value: "NGN", label: "NGN", icon: "/icons/ngn.png" },
  { value: "SOL", label: "SOL", icon: "/icons/sol.svg" },
  { value: "USD", label: "USD", icon: "/icons/usd.svg" },
  { value: "DAI", label: "DAI", icon: "/icons/dai.svg" },
];

interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  currencyValue: string;
  onCurrencyChange: (value: string) => void;
  error?: string;
}

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(({ label, currencyValue, onCurrencyChange, error, ...props }, ref) => {
  const [search, setSearch] = useState("");

  const filteredCurrencies = currencies.filter((currency) =>
    currency.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCurrency = currencies.find((c) => c.value === currencyValue);

  return (
    <div className="space-y-2 border border-[#E0E0E0] rounded-[30px] lg:p-6 p-3">
      <Label className="max-md:text-sm text-base font-medium text-muted">
        {label}
      </Label>

      <div className="flex gap-2">
        <Input
          ref={ref}
          type="number"
          step="0.0001"
          className="flex-1 font-semibold border-none! lg:text-2xl! md:text-lg text-base no-spinner"
          aria-invalid={!!error}
          {...props}
        />

        <Select value={currencyValue} onValueChange={onCurrencyChange}>
          <SelectTrigger className="w-25! rounded-4xl border-[#E0E0E0] bg-[#F7F7F7] px-3!">
            <SelectValue>
              <span className="flex items-center gap-1">
                {selectedCurrency && (
                  <Image
                    src={selectedCurrency.icon}
                    alt={selectedCurrency.label}
                    className="w-5 h-5 rounded-full object-cover"
                    width={20}
                    height={20}
                  />
                )}
                {currencyValue}
              </span>
            </SelectValue>
          </SelectTrigger>

          <SelectContent
            className="w-66 rounded-4xl px-3 py-4"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {/* Search bar */}
            <div className="mb-3">
              <div className="flex items-center gap-2 px-3 py-1 border border-[#E0E0E0] rounded-4xl">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={16}
                  height={16}
                  className="inline-flex"
                />
                <Input
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className=" placeholder:text-sm text-sm p-0!"
                />
              </div>
            </div>

            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  <span className="flex items-center gap-2">
                    <Image
                      src={currency.icon}
                      alt={currency.label}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    {currency.label}
                  </span>
                </SelectItem>
              ))
            ) : (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No currency found
              </p>
            )}
          </SelectContent>
        </Select>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
});

CurrencyInput.displayName = "CurrencyInput";
