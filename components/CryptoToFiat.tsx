"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function CryptoToFiatLoan() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    toast.info("Successfully subscribed!");
    setEmail("");
  };

  return (
    <div className="space-y-6 text-center">
      <div>
        <h3 className="text-[32px] font-medium text-primary mb-4 font-clash">
          Coming Soon!
        </h3>
        <p className="lg:text-xl text-[#4F4F4F] mb-1">
          Crypto to Fiat Loan is almost here. <br /> Enter your email and we'll let you know
          the moment it's live.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-left">
          <Label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            aria-invalid={!!error}
            className="border! border-[#E0E0E0]! focus-visible:border-[#E0E0E0] focus-visible:ring-1 ring-primary py-4 px-6 rounded-[30px] text-base text-muted mt-4 lg:h-15 h-12"
          />
          {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>

        <Button type="submit" className="w-full mt-16" size="default">
          Update me
        </Button>
      </form>
    </div>
  );
}
