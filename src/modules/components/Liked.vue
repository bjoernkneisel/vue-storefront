<template>
  <p>{{ greeting }}! Dies ist eine selbsterstellte Komponente! Du hast das Produkt geliked! Füge es jetzt deinem Einkaufswagen oder deiner Wunschliste hinzu!</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hallo an alle!',
      liked: 'Es gefällt mir'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
