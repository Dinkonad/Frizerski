<script setup>
import { ref, computed } from 'vue'
import { serviceCategories } from '../data/services.js'
import { useBooking } from '../composables/useBooking.js'

const { open: openBooking } = useBooking()
const activeId = ref(serviceCategories[0].id)

const active = computed(() => serviceCategories.find((c) => c.id === activeId.value))
</script>

<template>
  <section id="usluge" class="section services">
    <div class="container">
      <div class="section-head">
        <h2>Cjenik, bez sitnih slova.</h2>
        <p>
          Cijene su konačne od prvog klika. Trajanje je okvirno — majstor
          odlučuje kad je rez gotov, ne sat na zidu.
        </p>
      </div>

      <div class="services-tabs" role="tablist">
        <button
          v-for="cat in serviceCategories"
          :key="cat.id"
          role="tab"
          :aria-selected="activeId === cat.id"
          class="services-tab"
          :class="{ active: activeId === cat.id }"
          @click="activeId = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <ul class="services-list">
        <li v-for="item in active.items" :key="item.name" class="services-row">
          <span class="services-name">{{ item.name }}</span>
          <span class="services-leader" aria-hidden="true"></span>
          <span class="services-duration">{{ item.duration }}</span>
          <span class="services-price">{{ item.price }}</span>
        </li>
      </ul>

      <div class="services-cta">
        <button type="button" class="btn btn-primary" @click="openBooking">
          Rezerviraj termin
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--cave-green-950);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.services-tabs {
  display: flex;
  gap: 28px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 12px;
}

.services-tab {
  background: none;
  border: none;
  padding: 0 0 16px;
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--bone-faint);
  position: relative;
  transition: color 0.2s ease;
}

.services-tab::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--ember-bright);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.services-tab.active {
  color: var(--bone);
}

.services-tab.active::after {
  transform: scaleX(1);
}

.services-tab:hover {
  color: var(--brass-bright);
}

.services-list {
  display: flex;
  flex-direction: column;
}

.services-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.services-name {
  font-size: 1.02rem;
  color: var(--bone);
}

.services-leader {
  flex: 1;
  border-bottom: 1.5px dotted var(--line-strong);
  min-width: 24px;
  transform: translateY(-5px);
}

.services-duration {
  font-size: 0.84rem;
  color: var(--bone-faint);
  flex-shrink: 0;
}

.services-price {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--brass-bright);
  min-width: 3.2em;
  text-align: right;
  flex-shrink: 0;
}

.services-cta {
  margin-top: 40px;
}

@media (max-width: 560px) {
  .services-tabs {
    gap: 18px;
  }

  .services-duration {
    display: none;
  }
}
</style>
