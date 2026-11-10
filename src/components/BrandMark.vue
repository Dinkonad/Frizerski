<script setup>
import logo from '../assets/images/logo.png'

defineProps({
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <span class="brand" :class="{ compact }">
    <img :src="logo" alt="Barber's Cave Pula" class="brand-logo" width="44" height="44" />
    <span v-if="!compact" class="brand-name">Barber's Cave</span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--bone);
}

.brand-logo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: 0.01em;
}
</style>
