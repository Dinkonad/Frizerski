<script setup>
import { ref, computed } from 'vue'
import { serviceCategories } from '../../data/services.js'
import { useBooking } from '../../composables/useBooking.js'

const { state } = useBooking()

const activeId = ref(serviceCategories[0].id)
const active = computed(() => serviceCategories.find((c) => c.id === activeId.value))

function select(item, categoryLabel) {
  state.service = { ...item, category: categoryLabel }
}
</script>

<template>
  <div class="step">
    <h3 class="step-title">Koju uslugu rezerviraš?</h3>

    <div class="step-tabs" role="tablist">
      <button
        v-for="cat in serviceCategories"
        :key="cat.id"
        role="tab"
        class="step-tab"
        :class="{ active: activeId === cat.id }"
        @click="activeId = cat.id"
      >
        {{ cat.label }}
      </button>
    </div>

    <ul class="step-options">
      <li v-for="item in active.items" :key="item.name">
        <button
          type="button"
          class="option-row"
          :class="{ selected: state.service && state.service.name === item.name }"
          @click="select(item, active.label)"
        >
          <span class="option-radio" aria-hidden="true"></span>
          <span class="option-name">{{ item.name }}</span>
          <span class="option-duration">{{ item.duration }}</span>
          <span class="option-price">{{ item.price }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.step-tabs {
  display: flex;
  gap: 22px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 4px;
}

.step-tab {
  background: none;
  border: none;
  padding: 0 0 12px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--bone-faint);
  position: relative;
}

.step-tab.active {
  color: var(--bone);
}

.step-tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--ember-bright);
}

.step-options {
  display: flex;
  flex-direction: column;
}

.option-row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--line);
  padding: 14px 4px;
  color: var(--bone);
  text-align: left;
  transition: background-color 0.15s ease;
}

.option-row:hover {
  background: rgba(239, 231, 216, 0.04);
}

.option-radio {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.4px solid var(--line-strong);
  position: relative;
}

.option-row.selected .option-radio {
  border-color: var(--brass-bright);
}

.option-row.selected .option-radio::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--brass-bright);
}

.option-name {
  flex: 1;
  font-size: 0.98rem;
}

.option-duration {
  font-size: 0.8rem;
  color: var(--bone-faint);
}

.option-price {
  font-family: var(--font-display);
  color: var(--brass-bright);
  min-width: 3.2em;
  text-align: right;
}

@media (max-width: 480px) {
  .option-duration {
    display: none;
  }
}
</style>
