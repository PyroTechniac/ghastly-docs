<template>
  <div class="content">
    <h1>Unknown {{ type || 'page' }}</h1>
    <p>
      This page doesn't seem to exist on the web.
      <b-icon icon="frown" />
    </p>
  </div>
</template>

<script>
export default {
    name: 'UnknownPage',
    props: ['type']
};
</script>
