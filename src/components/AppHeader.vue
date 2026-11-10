<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BrandMark from './BrandMark.vue'
import { useBooking } from '../composables/useBooking.js'
import { useAppView } from '../composables/useAppView.js'

const { open: openBooking } = useBooking()
const { showAdmin } = useAppView()

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { href: '#usluge', label: 'Usluge' },
  { href: '#o-nama', label: 'O nama' },
  { href: '#majstori', label: 'Majstori' },
  { href: '#kontakt', label: 'Kontakt' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function closeMenu() {
  menuOpen.value = false
}

function openBookingFromMenu() {
  closeMenu()
  openBooking()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--solid': scrolled || menuOpen }">
    <div class="owner-bar">
      <div class="container owner-bar-inner">
        <button type="button" class="owner-link" @click="showAdmin">Pregled za vlasnicu →</button>
      </div>
    </div>

    <div class="container header-row">
      <a href="#top" class="header-brand" @click="closeMenu">
        <BrandMark />
      </a>

      <nav class="header-nav">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="header-actions">
        <button type="button" class="btn btn-primary header-cta" @click="openBooking">
          Rezerviraj termin
        </button>
        <button class="menu-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Izbornik">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" v-if="menuOpen">
      <nav>
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      </nav>
      <button type="button" class="btn btn-primary" @click="openBookingFromMenu">
        Rezerviraj termin
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.header--solid {
  background: rgba(10, 13, 11, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.owner-bar {
  background: rgba(10, 13, 11, 0.55);
  border-bottom: 1px solid var(--line);
}

.owner-bar-inner {
  display: flex;
  justify-content: flex-end;
  padding: 7px 0;
}

.owner-link {
  background: none;
  border: none;
  color: var(--bone-faint);
  font-size: 0.74rem;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
}

.owner-link:hover {
  color: var(--brass-bright);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.header-nav {
  display: none;
}

.header-nav a {
  color: var(--bone-dim);
  font-size: 0.93rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.header-nav a:hover {
  color: var(--brass-bright);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-cta {
  display: none;
  padding: 0.7em 1.3em;
  font-size: 0.9rem;
}

.menu-toggle {
  width: 32px;
  height: 22px;
  background: none;
  border: none;
  padding: 0;
  position: relative;
}

.menu-toggle span {
  position: absolute;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--bone);
  transition: transform 0.25s ease, opacity 0.25s ease, top 0.25s ease;
}

.menu-toggle span:nth-child(1) {
  top: 0;
}
.menu-toggle span:nth-child(2) {
  top: 10px;
}
.menu-toggle span:nth-child(3) {
  top: 20px;
}

.menu-toggle.open span:nth-child(1) {
  top: 10px;
  transform: rotate(45deg);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  top: 10px;
  transform: rotate(-45deg);
}

.mobile-menu {
  background: var(--cave-green-950);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 28px var(--gutter) 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-menu nav {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.mobile-menu nav a {
  font-family: var(--font-display);
  font-size: 1.3rem;
}

.mobile-menu .btn {
  align-self: flex-start;
}

@media (min-width: 880px) {
  .header-nav {
    display: flex;
    gap: 40px;
  }

  .header-cta {
    display: inline-flex;
  }

  .menu-toggle {
    display: none;
  }
}
</style>
