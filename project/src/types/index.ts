export type RegionType =
  | 'northern'
  | 'southern'
  | 'eastern'
  | 'western'
  | 'central'
  | 'coastal'
  | 'rainforest'
  | 'sahara'
  | null;

export interface LanguageType {
  name: string;
  percentage: number;
}

export interface AttractionType {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  websiteUrl?: string;
}

export interface CountryType {
  id: number;
  name: string;
  slug: string;
  capital: string;
  population: number;
  area: number;
  currency: string;
  flagUrl: string;
  flagFact: string;
  flagDescription: string;
  funFact: string;
  regions: RegionType[];
  languages: LanguageType[];
  geographicFacts: string[];
  economicFacts: string[];
  touristAttractions: AttractionType[];
  capitalImageUrl?: string; // Optional for backward compatibility
}

export enum ProductCategory {
  BANGLES = 'bangles',
  NECKLACES = 'necklaces',
  EARRINGS = 'earrings',
  RINGS = 'rings',
  BRACELETS = 'bracelets',
  OTHER = 'other'
}

export interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: ProductCategory;
  inStock: boolean;
  rating: number;
  reviews: number;
  featured?: boolean;
  discount?: number;
  colors?: string[];
  sizes?: string[];
}

export interface LandmarkType {
  name: string;
  location: string;
  country: string;
  description: string;
  imageUrl: string;
}