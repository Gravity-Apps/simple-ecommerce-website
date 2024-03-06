'use client'

import { Box } from "@mui/material"
import ProductListSection from "../components/products-list-section"
import FeatureProductsSection from "../components/featured-products-section"
import FeaturedPostsSection from "../components/featured-posts-section"
import TestimonialsSection from "../components/testimonials-section"
import CallToAction from "../components/call-to-action"
import ShopCardsSection from "../components/shop-cards-section"

const ProductsPage = () => {
  return <Box>
    <ShopCardsSection />
    <ProductListSection />
    <FeatureProductsSection />
    <FeaturedPostsSection />
    <TestimonialsSection />
    <CallToAction />
  </Box>
}

export default ProductsPage