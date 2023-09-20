<script setup lang="ts">
import { getInstance } from "./featurevisor";

const f = await getInstance();

const featureKey = "my_feature";
const context = {};

const isEnabled = f.isEnabled(featureKey, context);
</script>

<template>
  <div class="container">
    <h2>Featurevisor and Nuxt integration example</h2>

    <p v-if="isEnabled">Feature is enabled!</p>
    <p v-else>Feature is disabled :(</p>

    <p>Learn more at <a href="https://featurevisor.com">https://featurevisor.com</a></p>
  </div>
</template>

<style>
.container {
  font-family: sans-serif;
  text-align: center;
}
</style>
