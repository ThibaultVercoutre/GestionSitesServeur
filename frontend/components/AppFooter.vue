<template>
    <footer class="py-8 border-t">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="font-bold text-lg">
            WebGine
          </NuxtLink>
          <p class="text-gray-500 text-sm mt-1">
            Solutions web sur mesure
          </p>
        </div>
        <div class="text-sm text-gray-500">
          <a href="https://www.web-gine.fr" target="_blank" class="hover:text-gray-700">
            www.web-gine.fr
          </a>
          <p class="mt-1">
            © {{ new Date().getFullYear() }} WebGine. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
</template>

<script setup>
</script>
