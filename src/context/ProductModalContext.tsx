"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

export interface ProductDetail {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  tags?: string[];
}

interface ProductModalContextType {
  activeProduct: ProductDetail | null;
  openProduct: (product: ProductDetail) => void;
  closeProduct: () => void;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(undefined);

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<ProductDetail | null>(null);

  const openProduct = useCallback((product: ProductDetail) => {
    setActiveProduct(product);
  }, []);

  const closeProduct = useCallback(() => {
    setActiveProduct(null);
  }, []);

  const value = useMemo(
    () => ({ activeProduct, openProduct, closeProduct }),
    [activeProduct, openProduct, closeProduct]
  );

  return <ProductModalContext.Provider value={value}>{children}</ProductModalContext.Provider>;
}

export function useProductModal() {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error("useProductModal must be used within a ProductModalProvider");
  }
  return context;
}
