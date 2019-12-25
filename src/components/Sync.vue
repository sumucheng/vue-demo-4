<template>
  <div>
    {{n}}
    <button @click="$emit('update:n',n+1)">+1</button>
  </div>
</template>
<script>
export default {
  props: ["n"]
};
</script>