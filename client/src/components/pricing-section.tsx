"use client";
import React from "react";
import { api } from "@/lib/api";
import stripePromise from "@/lib/stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function PricingSection() {
  const handleUpgrade = async () => {
    try {
      const response = await api.get("/payments/create-checkout-session");
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen  bg-[#fbfafa]"> 
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
          Choose the plan that&apos;s right for you
        </h2>
        <p className="text-lg text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
          Select what your needs. Upgrade anytime to unlock
          premium features and support.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Basic"
            description="For comprehensive contract analysis"
            price="Free"
            highlight
            period="/lifetime"
            features={[
              "Advanced contract analysis",
              "Unlimited projects",
              "Chat with your contract",
              "10+ risks with severity levels",
              "10+ opportunities with impact levels",
              "Comprehensive contract summary",
              "Improvement recommendations",
              "Key clauses identification",
              "Legal compliance assessment",
              "Negotiation points",
              "Contract duration analysis",
              "Termination conditions summary",
              "Compensation structure breakdown",
              "Performance metrics identification",
              "Intellectual property clause summary",
            ]}
            buttonText="Upgrade"
            onButtonClick={handleUpgrade}
          />
          <PricingCard
            title="Premium"
            description="For comprehensive contract analysis"
            price="$10"
            highlight
            period="/lifetime"
            features={[
              "Advanced contract analysis",
              "Unlimited projects",
              "Chat with your contract",
              "10+ risks with severity levels",
              "10+ opportunities with impact levels",
              "Comprehensive contract summary",
              "Improvement recommendations",
              "Key clauses identification",
              "Legal compliance assessment",
              "Negotiation points",
              "Contract duration analysis",
              "Termination conditions summary",
              "Compensation structure breakdown",
              "Performance metrics identification",
              "Intellectual property clause summary",
            ]}
            buttonText="Upgrade"
            onButtonClick={handleUpgrade}
          />
        </div>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
  onButtonClick: () => void;
}

function PricingCard({
  title,
  description,
  price,
  features,
  period,
  buttonText,
  highlight,
  onButtonClick,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col ${
        highlight ? "border-primary shadow-lg transform hover:scale-105" : ""
      } relative overflow-hidden transition-all duration-300 hover:shadow-xl`}
    >
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-5xl font-extrabold mb-6">
          {price}
          <span className="text-base font-normal text-muted-foreground">
            {period}
          </span>
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li className="flex items-center gap-2" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            highlight
              ? "bg-primary text-white hover:bg-primary/90"
              : "outline"
          } transition duration-300`}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
