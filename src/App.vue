<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TeamSection from './components/TeamSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HoursSection from './components/HoursSection.vue'
import CtaBand from './components/CtaBand.vue'
import AppFooter from './components/AppFooter.vue'
import BookingModal from './components/booking/BookingModal.vue'
import AdminPreview from './components/admin/AdminPreview.vue'
import { useAppView } from './composables/useAppView.js'

const { state } = useAppView()
</script>

<template>
  <template v-if="state.view === 'site'">
    <AppHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <FeaturesSection />
      <HoursSection />
      <CtaBand />
    </main>
    <AppFooter />
    <BookingModal />
  </template>
  <AdminPreview v-else />
</template>
