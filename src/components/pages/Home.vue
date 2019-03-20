<template>
  <div class="container">
    <section class="section has-text-centered">
      <br>
      <br>
      <div class="tile is-ancestor">
        <b-tooltip
          class="tile is-parent"
          label="The stable branch is unavailable as Entangled is written for discord.js v12! Please use the master branch for now"
          type="is-danger"
          multilined
        >
          <article class="tile is-child box content-is-not-feeling-so-good">
            <h5>
              <strong>Install Stable</strong>
            </h5>
            <pre v-highlightjs><code class="bash">npm install discord-entangled</code></pre>
          </article>
        </b-tooltip>
        <div class="tile is-parent">
          <article class="tile is-child box content">
            <h5>
              <strong>Install Master</strong>
            </h5>
            <pre v-highlightjs><code class="bash">npm install pyrotechniac/discord-entangled</code></pre>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: "Home" };
</script>
