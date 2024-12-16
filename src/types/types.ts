export interface HeroContainer {
  title: string
  description: string
  points: string[]
  pointsColor: string
  image: string
  alt: string
  buttonColor:
    | "primary"
    | "blue"
    | "blueg"
    | "white"
    | "purple"
    | "purpleg"
    | "pinkg"
    | "yellowg"
    | "greendg"
    | "greenlg"
    | "purpledg"
    | "outline"
}
export type ExploreInterface = {
  plan: string
  pricePerGB: string
  totalCost: string
  action: string
  variant: string
  to: string
}
