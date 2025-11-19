"use client";

import React, { useState } from 'react';
import { providers } from '@/utils/pricingData';
import { calculateFee } from '@/utils/calculate';
import { ServiceProvider, PricingOption } from '@/utils/types';

export default function Calculator() {
  // State
  const [amount, setAmount] = useState<number | "">("");
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider>(providers[0]);
  const [selectedOption, setSelectedOption] = useState<PricingOption>(providers[0].options[0]);
  const [priyoUsage, setPriyoUsage] = useState<number | "">("");

  // Handle Provider Change
  const handleProviderChange = (providerName: string) => {
    const provider = providers.find(p => p.name === providerName);
    if (provider) {
      setSelectedProvider(provider);
      setSelectedOption(provider.options[0]);
    }
  };

  // Derived State
  const fee = (typeof amount === "number" && amount > 0)
    ? calculateFee(amount, selectedOption, typeof priyoUsage === "number" ? priyoUsage : 0)
    : 0;

  const totalDeduction = (typeof amount === "number" ? amount : 0) + fee;

  // Helper to map generic styling based on provider color
  // We use a dynamic style object for specific colors since Tailwind arbitrary values can be tricky with dynamic strings
  const activeColorStyle = {
    backgroundColor: selectedProvider.color.replace('bg-', 'var(--tw-bg-opacity: 1); background-color: '), // fallback hack or just use classes logic below
  };

  // Helper to get border color based on provider
  const getBorderColor = (provider: ServiceProvider) => {
    if (provider.name === "bKash") return "border-pink-500 text-pink-600 bg-pink-50";
    if (provider.name === "Nagad") return "border-orange-500 text-orange-600 bg-orange-50";
    if (provider.name === "Rocket") return "border-purple-500 text-purple-600 bg-purple-50";
    if (provider.name === "Upay") return "border-blue-500 text-blue-600 bg-blue-50";
    return "border-gray-200";
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 font-sans">
      
      {/* HEADER SECTION */}
      <div className={`${selectedProvider.color} p-6 text-white transition-colors duration-500`}>
        <label className="block text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
          Amount to Cash Out
        </label>
        <div className="relative flex items-center justify-center">
          <span className="text-4xl font-light mr-2 opacity-80">৳</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
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
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform ${
                  selectedProvider.name === p.name
                    ? `${p.color} text-white shadow-lg scale-105`
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
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(opt)}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                    isActive
                      ? getBorderColor(selectedProvider)
                      : "border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {opt.method === "PriyoAgent" ? "Priyo Number" : opt.method}
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
                *Rate increases after 50,000 Tk usage.
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
            <span className="text-gray-500 font-medium">Total Deduction</span>
            <span className={`text-2xl font-bold ${selectedProvider.name === 'bKash' ? 'text-pink-600' : selectedProvider.name === 'Nagad' ? 'text-orange-600' : 'text-blue-600'}`}>
              ৳ {totalDeduction.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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