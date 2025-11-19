"use client";

import React, { useState } from 'react';
import { providers } from '@/utils/pricingData';
import { calculateFee } from '@/utils/calculate';
import { ServiceProvider, PricingOption } from '@/utils/types';

export default function Calculator({ initialProviderName }: { initialProviderName?: string }) {
  const defaultProvider = providers.find(p => p.name.toLowerCase() === initialProviderName?.toLowerCase()) || providers[0];

  const [amount, setAmount] = useState<number | "">("");
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider>(defaultProvider);
  const [selectedOption, setSelectedOption] = useState<PricingOption>(defaultProvider.options[0]);
  const [priyoUsage, setPriyoUsage] = useState<number | "">("");

  // Derived State
  const fee = (typeof amount === "number" && amount > 0)
    ? calculateFee(amount, selectedOption, typeof priyoUsage === "number" ? priyoUsage : 0)
    : 0;

  const total = (typeof amount === "number" ? amount : 0) + fee;

  // Helper: Get USSD Code based on provider
  const getMethodLabel = (method: string, providerName: string) => {
    if (method === "PriyoAgent") return "Priyo Agent";
    if (method === "USSD") {
      switch (providerName) {
        case "bKash": return "*247#";
        case "Nagad": return "*167#";
        case "Rocket": return "*322#";
        case "Upay": return "*268#";
        default: return "USSD";
      }
    }
    return method;
  };

  // Handle Provider Change
  const handleProviderChange = (providerName: string) => {
    const provider = providers.find(p => p.name === providerName);
    if (provider) {
      setSelectedProvider(provider);
      setSelectedOption(provider.options[0]);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setAmount("");
      return;
    }
    const num = parseFloat(val);
    if (num < 0) return;
    if (num > 999999) return;
    setAmount(num);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 font-sans">

      {/* HEADER SECTION */}
      <div className={`${selectedProvider.theme.bg} p-6 text-white transition-colors duration-500`}>
        <label className="block text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
          Amount to Cash Out
        </label>
        <div className="relative flex items-center justify-center">
          <span className="text-4xl font-light mr-2 opacity-80">৳</span>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full bg-transparent text-5xl font-bold text-white placeholder-white/40 outline-none text-center"
            placeholder="5000"
            autoFocus
          />
        </div>
      </div>

      <div className="p-6 space-y-8">

        {/* 1. PROVIDER SELECTOR */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            Select Service
          </label>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {providers.map((p) => (
              <button
                key={p.name}
                onClick={() => handleProviderChange(p.name)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform ${selectedProvider.name === p.name
                    ? `${p.theme.bg} text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2. METHOD SELECTOR */}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            Method
          </label>
          <div className="grid grid-cols-2 gap-4">
            {selectedProvider.options.map((opt, idx) => {
              const isActive = selectedOption === opt;
              const activeClasses = `${selectedProvider.theme.border} ${selectedProvider.theme.text} ${selectedProvider.theme.light}`;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(opt)}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${isActive
                      ? activeClasses
                      : "border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {getMethodLabel(opt.method, selectedProvider.name)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. PRIYO USAGE (Conditional) */}
        {selectedOption.method === "PriyoAgent" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <label className="block text-xs font-bold text-yellow-700 uppercase mb-2">
                Used this month?
              </label>
              <div className="flex items-center bg-white rounded-lg border border-yellow-200 px-3 py-2">
                <span className="text-yellow-600 font-bold mr-2">৳</span>
                <input
                  type="number"
                  value={priyoUsage}
                  onChange={(e) => setPriyoUsage(e.target.value ? parseFloat(e.target.value) : "")}
                  className="w-full outline-none text-gray-700 font-medium placeholder-gray-300"
                  placeholder="0"
                />
              </div>
              <p className="text-[10px] text-yellow-600 mt-2 leading-tight">
                *Priyo Agent discount is given for the first 50,000 Tk per month.
              </p>
            </div>
          </div>
        )}

        {/* 4. RESULT CARD */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-gray-500 font-medium">Charge Fee</span>
            <span className="text-xl font-bold text-gray-800">
              ৳ {fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-gray-500 font-medium">Total</span>
            <span className={`text-2xl font-bold ${selectedProvider.theme.text}`}>
              ৳ {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <p className="text-right text-xs text-gray-400 mt-2">
            Rate applied: {selectedOption.method === "PriyoAgent" ? "Tiered" : `${selectedOption.rate}%`}
          </p>
        </div>

      </div>
    </div>
  );
}