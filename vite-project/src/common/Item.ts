export type Item = {
  id: number,
  title: string,
  price: number,
  stock: number,
  description: string
  images: string[],
  category: string
}

type review = {
  rating: number,
  comment: string,
  date: Date,
  reviewerName: string,
  reviewerEmail: string
}

export type DetailItem = {
  id: number,
  title: string,
  price: number,
    stock: number,
  description: string,
  images: string[],
  category: string,
  brand: string,
  reviews: review[],
}