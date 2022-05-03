<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script>
import srcData from '../data.json';
import ThreadList from '../components/ThreadList.vue';

export default {
  name: 'PageHome',
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: srcData.threads,
    };
  },
};
</script>

<style scoped></style>
