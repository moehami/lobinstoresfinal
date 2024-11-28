import { Store } from "@/components/stores/store-card";

export function FeaturedStores() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Featured Bin Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Store
          name="Discount Bins Plus"
          location="Orlando, FL"
          rating={4.8}
          image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3"
          tags={["Wholesale", "Electronics"]}
        />
        <Store
          name="Treasure Hunt Bins"
          location="Houston, TX"
          rating={4.5}
          image="https://images.unsplash.com/photo-1567449303078-57ad995bd17f?ixlib=rb-4.0.3"
          tags={["Retail", "Home Goods"]}
        />
        <Store
          name="The Bin Store"
          location="Miami, FL"
          rating={4.7}
          image="https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3"
          tags={["Liquidation", "Fashion"]}
        />
      </div>
    </section>
  );
}