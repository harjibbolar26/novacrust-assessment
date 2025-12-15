"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CurrencyInput } from "./CurrencyInput";
import { WalletSelector } from "./WalletSelector";
import { toast } from "sonner";
import { convertCurrency } from "@/lib/conversionRate";

const formSchema = z.object({
  youPay: z.number().positive("Amount must be positive"),
  youPayCurrency: z.string().min(1, "Please select a currency"),
  youReceive: z.number().positive("Amount must be positive"),
  youReceiveCurrency: z.string().min(1, "Please select a currency"),
  payFrom: z.string().min(1, "Please select a wallet"),
  payTo: z.string().min(1, "Please select a payment method"),
});

type FormData = z.infer<typeof formSchema>;

export function CryptoToCash() {
  const [youPayCurrency, setYouPayCurrency] = useState("ETH");
  const [youReceiveCurrency, setYouReceiveCurrency] = useState("NGN");
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");
  const [youPayAmount, setYouPayAmount] = useState(1.0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      youPay: 1.0,
      youReceive: 1.0,
      youPayCurrency: "ETH",
      youReceiveCurrency: "NGN",
    },
  });

  useEffect(() => {
    const converted = convertCurrency(
      youPayAmount,
      youPayCurrency,
      youReceiveCurrency
    );
    setValue("youReceive", converted);
  }, [youPayAmount, youPayCurrency, youReceiveCurrency, setValue]);

  const onSubmit = (data: FormData) => {
    toast.info(
      `Converting ${data.youPay} ${data.youPayCurrency} to ${data.youReceive} ${data.youReceiveCurrency}`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <CurrencyInput
        label="You pay"
        currencyValue={youPayCurrency}
        onCurrencyChange={(val) => {
          setYouPayCurrency(val);
          setValue("youPayCurrency", val);
        }}
        error={errors.youPay?.message}
        {...register("youPay", {
          valueAsNumber: true,
          onChange: (e) => setYouPayAmount(Number(e.target.value)),
        })}
      />

      <CurrencyInput
        label="You receive"
        currencyValue={youReceiveCurrency}
        onCurrencyChange={(val) => {
          setYouReceiveCurrency(val);
          setValue("youReceiveCurrency", val);
        }}
        error={errors.youReceive?.message}
        {...register("youReceive", { valueAsNumber: true })}
        readOnly
      />

      <WalletSelector
        label="Pay from"
        value={payFrom}
        onChange={(val) => {
          setPayFrom(val);
          setValue("payFrom", val);
        }}
        type="crypto"
        error={errors.payFrom?.message}
      />

      <WalletSelector
        label="Pay to"
        value={payTo}
        onChange={(val) => {
          setPayTo(val);
          setValue("payTo", val);
        }}
        type="fiat"
        error={errors.payTo?.message}
      />

      <Button type="submit" className="w-full mt-4 font-bold" size="default">
        Convert now
      </Button>
    </form>
  );
}
