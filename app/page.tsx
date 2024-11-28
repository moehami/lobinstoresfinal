"use client";

import { Hero } from "@/components/hero";
import { SearchBar } from "@/components/search-bar";
import { USAMap } from "@/components/map/usa-map";
import { FeaturedStores } from "@/components/stores/featured-stores";
import { PopularStates } from "@/components/states/popular-states";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8">Find Bin Stores by State</h2>
          <USAMap />
        </section>
        <PopularStates />
        <FeaturedStores />
      </div>
    </main>
  );
}