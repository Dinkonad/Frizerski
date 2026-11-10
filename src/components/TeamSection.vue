<script setup>
import { team } from '../data/team.js'
</script>

<template>
  <section id="majstori" class="section team">
    <div class="container">
      <div class="section-head">
        <h2>Dvije ruke kojima vjeruješ.</h2>
        <p>Mali tim, namjerno. Tako svaki termin ostaje osoban, a svaki rez prepoznatljiv.</p>
      </div>

      <ul class="team-list">
        <li v-for="person in team" :key="person.name" class="team-card">
          <span class="team-avatar">{{ person.initials }}</span>
          <div class="team-info">
            <h3>{{ person.name }}</h3>
            <span class="team-role">{{ person.role }}</span>
            <p>{{ person.bio }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.team-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.team-card {
  background: var(--cave-black);
  padding: 32px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.team-avatar {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid var(--brass);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--brass-bright);
}

.team-info h3 {
  font-size: 1.25rem;
}

.team-role {
  display: block;
  margin-top: 4px;
  color: var(--brass);
  font-size: 0.86rem;
  font-weight: 600;
}

.team-info p {
  margin-top: 12px;
  color: var(--bone-dim);
  max-width: 44ch;
  font-size: 0.96rem;
}

@media (min-width: 760px) {
  .team-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
