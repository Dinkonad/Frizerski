<script setup></script>

<template>
  <section id="o-nama" class="section about">
    <div class="container about-grid">
      <div class="about-copy">
        <h2>Prostor koji diše polako, dok makaze rade brzo.</h2>
        <p>
          Tamna borovina na zidovima, gramofon, biljke i staro pozlaćeno
          ogledalo — brlog u srcu Pule gdje jedan majstor radi jedan posao:
          tvoju frizuru, bez žurbe i bez čekanja u redu.
        </p>

        <div class="about-proof">
          <strong>500+</strong>
          <span>ljudi iz Pule prati naš rad i redovito rezervira termin preko Instagrama</span>
        </div>
      </div>

      <div class="about-panel" aria-hidden="true">
        <svg viewBox="0 0 320 380" class="panel-art">
          <rect x="0.5" y="0.5" width="319" height="379" rx="6" fill="var(--cave-green-900)" stroke="var(--line)" />
          <!-- gilded mirror -->
          <ellipse cx="226" cy="108" rx="58" ry="74" fill="none" stroke="var(--brass)" stroke-width="2" />
          <ellipse cx="226" cy="108" rx="48" ry="64" fill="none" stroke="var(--brass)" stroke-width="0.8" opacity="0.6" />
          <!-- vinyl record -->
          <circle cx="98" cy="118" r="62" fill="var(--cave-black)" stroke="var(--line-strong)" />
          <circle cx="98" cy="118" r="48" fill="none" stroke="var(--cave-green-700)" />
          <circle cx="98" cy="118" r="36" fill="none" stroke="var(--cave-green-700)" />
          <circle cx="98" cy="118" r="24" fill="none" stroke="var(--cave-green-700)" />
          <circle cx="98" cy="118" r="7" fill="var(--brass)" />
          <!-- plant -->
          <path d="M40 300c6-34 2-58-10-78M40 300c-10-28-30-44-52-50M40 300c16-24 42-34 66-32" stroke="var(--brass)" stroke-width="1.6" fill="none" stroke-linecap="round" />
          <rect x="18" y="296" width="46" height="34" rx="3" fill="var(--cave-green-800)" stroke="var(--line-strong)" />
          <!-- floor line -->
          <line x1="0" y1="332" x2="320" y2="332" stroke="var(--line)" />
          <!-- barber pole accent -->
          <rect x="266" y="240" width="14" height="92" rx="7" fill="var(--cave-black)" stroke="var(--line-strong)" />
          <path d="M266 252l14 10M266 266l14 10M266 280l14 10M266 294l14 10M266 308l14 10" stroke="var(--ember)" stroke-width="3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

.about-copy h2 {
  font-size: clamp(2rem, 4.2vw, 2.7rem);
  line-height: 1.2;
  max-width: 16ch;
}

.about-copy p {
  margin-top: 22px;
  color: var(--bone-dim);
  max-width: 56ch;
  font-size: 1.02rem;
}

.about-proof {
  margin-top: 36px;
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  max-width: 44ch;
}

.about-proof strong {
  font-family: var(--font-display);
  font-size: 2.1rem;
  color: var(--brass-bright);
  flex-shrink: 0;
}

.about-proof span {
  color: var(--bone-dim);
  font-size: 0.92rem;
}

.about-panel {
  justify-self: center;
  width: 100%;
  max-width: 340px;
}

.panel-art {
  width: 100%;
  height: auto;
}

@media (min-width: 980px) {
  .about-grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>
