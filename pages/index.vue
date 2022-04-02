<script setup>
import CustomHeader from "~~/components/organisms/CustomHeader.vue";
import ScoreTableAll from "~~/components/organisms/ScoreTableAll.vue";
// import ScoreTableEach from "~~/components/organisms/ScoreTableEach.vue";
</script>

<template>
  <CustomHeader></CustomHeader>
  <div class="container mx-auto bg-base-100">
    <ScoreTableAll></ScoreTableAll>
    <!-- <ScoreTableEach></ScoreTableEach> -->
  </div>
</template>
