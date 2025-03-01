<template>
  <UContainer class="py-10 h-full">
    <div class="flex flex-col items-center justify-center min-h-[70vh]">
      <UCard class="w-full max-w-3xl">
        <template #header>
          <div class="text-center">
            <h1 class="text-2xl font-bold">Bienvenue sur l'application de gestion</h1>
            <p class="text-gray-500 mt-2">Gérez vos sites et serveurs en toute simplicité</p>
          </div>
        </template>
        
        <div class="py-4">
          <p class="mb-4">Cette application vous permet de :</p>
          <ul class="space-y-2 pl-5 list-disc">
            <li>Gérer vos sites web</li>
            <li>Surveiller vos serveurs</li>
            <li>Analyser les performances</li>
            <li>Gérer les sauvegardes</li>
          </ul>
        </div>
        
        <template #footer>
          <div class="flex justify-center gap-4">
            <UButton to="/" color="primary">
              Accéder au tableau de bord
            </UButton>
            <UButton to="/" color="gray" variant="ghost">
              En savoir plus
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
definePageMeta({
  title: 'Accueil'
})
</script>
