"use client";

import { useState } from "react";
import { ChatPanel } from "@/components/ChatPanel";
import { FooterInfo } from "@/components/FooterInfo";
import { HeroSection } from "@/components/HeroSection";
import { PersonaCard } from "@/components/PersonaCard";
import { SiteHeader } from "@/components/SiteHeader";
import { PERSONAS } from "@/lib/personas";

export default function Home() {
  const [activePersonaId, setActivePersonaId] = useState<string | null>(null);
  const activePersona = PERSONAS.find((p) => p.id === activePersonaId);

  return (
    <main className="relative min-h-screen">
      <SiteHeader />

      <div className="relative mx-auto max-w-5xl px-5 pb-8 sm:px-8 sm:pb-10">
        {activePersona ? (
          <div className="mt-8">
            <ChatPanel persona={activePersona} onBack={() => setActivePersonaId(null)} />
          </div>
        ) : (
          <>
            <HeroSection />

            <div className="relative mt-10 space-y-6 sm:mt-12">
              {PERSONAS.map((persona) => (
                <PersonaCard
                  key={persona.id}
                  persona={persona}
                  onSelect={() => setActivePersonaId(persona.id)}
                />
              ))}
            </div>

            <FooterInfo />
          </>
        )}
      </div>
    </main>
  );
}
