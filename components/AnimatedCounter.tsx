"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        prefix="$"
        duration={0.65}
        decimals={2}
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
