<script setup>
import { ref, onMounted } from 'vue'
import { useBooking } from '../composables/useBooking.js'

const { open: openBooking } = useBooking()
const ready = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    ready.value = true
  })
})
</script>

<template>
  <section id="top" class="hero" :class="{ ready }">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-stripe" aria-hidden="true"></div>

    <div class="container hero-grid">
      <div class="hero-copy">
        <h1 class="hero-title">
          <span class="reveal" style="--d: 0">Uđeš neuređen.</span>
          <span class="reveal" style="--d: 1"><em>Izlaziš</em> drugačiji.</span>
        </h1>

        <p class="hero-sub reveal" style="--d: 2">
          Fade, brada i brijanje žiletom — u mirnom brlogu u srcu Pule.
        </p>

        <div class="hero-actions reveal" style="--d: 3">
          <button type="button" class="btn btn-primary" @click="openBooking">
            Rezerviraj termin
          </button>
          <a href="#usluge" class="btn btn-ghost">Pogledaj usluge</a>
        </div>

        <div class="hero-meta reveal" style="--d: 4">
          <div class="hero-meta-item">
            <span class="hero-meta-label">Radno vrijeme</span>
            <span>Pon, Sri, Pet 08–15h · Uto, Čet 13–20h</span>
          </div>
          <div class="hero-meta-item">
            <span class="hero-meta-label">Lokacija</span>
            <span>Pula, Istra</span>
          </div>
        </div>
      </div>

      <div class="hero-mark reveal" style="--d: 2" aria-hidden="true">
        <svg viewBox="0 0 220 220" class="hero-mark-svg">
          <circle cx="110" cy="110" r="105" stroke="var(--line-strong)" stroke-width="1" />
          <circle cx="110" cy="110" r="84" stroke="var(--brass)" stroke-width="1" stroke-dasharray="2 7" />
          <path
            d="M70 70c16 16 32 32 40 40 8-8 24-24 40-40M70 150c16-16 32-32 40-40 8 8 24 24 40 40"
            stroke="var(--bone)"
            stroke-width="1.4"
            stroke-linecap="round"
          />
          <circle cx="70" cy="70" r="7" stroke="var(--brass-bright)" stroke-width="1.4" />
          <circle cx="70" cy="150" r="7" stroke="var(--brass-bright)" stroke-width="1.4" />
          <circle cx="110" cy="110" r="3" fill="var(--ember-bright)" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 128px;
  overflow: hidden;
  background: radial-gradient(1200px 700px at 18% -10%, var(--cave-green-800) 0%, var(--cave-green-950) 45%, var(--cave-black) 100%);
}

.hero-glow {
  position: absolute;
  inset: -20% -10% auto auto;
  width: 60%;
  height: 70%;
  background: radial-gradient(circle, rgba(199, 160, 74, 0.16) 0%, rgba(199, 160, 74, 0) 70%);
  pointer-events: none;
}

.hero-stripe {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6%;
  width: 2px;
  background: repeating-linear-gradient(
    180deg,
    var(--ember) 0 18px,
    var(--bone) 18px 36px,
    var(--cave-black) 36px 54px
  );
  opacity: 0.35;
  display: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 56px;
  position: relative;
  z-index: 1;
}

.hero-copy {
  max-width: 640px;
}

.hero-title {
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
}

.hero-title span {
  display: block;
}

.hero-title em {
  font-style: italic;
  color: var(--brass-bright);
}

.hero-sub {
  margin-top: 28px;
  font-size: 1.1rem;
  color: var(--bone-dim);
  max-width: 50ch;
}

.hero-actions {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-meta {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.hero-meta-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.92rem;
  color: var(--bone-dim);
}

.hero-meta-label {
  font-size: 0.74rem;
  color: var(--brass);
  font-weight: 600;
}

.hero-mark {
  display: none;
  justify-self: center;
}

.hero-mark-svg {
  width: clamp(220px, 24vw, 320px);
  height: auto;
  animation: spin 50s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero-mark-svg {
    animation: none;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.reveal {
  opacity: 0;
  transform: translateY(14px);
}

.ready .reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease calc(var(--d) * 0.1s), transform 0.7s ease calc(var(--d) * 0.1s);
}

@media (min-width: 760px) {
  .hero-stripe {
    display: block;
  }
}

@media (min-width: 980px) {
  .hero-grid {
    grid-template-columns: 1.3fr 0.7fr;
  }

  .hero-mark {
    display: flex;
  }
}
</style>
