<template>
  <section>
    <h1>Vue Router</h1>
    <div class="section" id="adding-route">
      <h2>Adding Route</h2>
      <p>We import the Introduction component we are using as a view and tell Router to render it for /introduction.</p>
      <screenshot
              :header="'src/router.js'"
              :path="'vue-router/2-adding-route.png'"></screenshot>
    </div>

    <div class="section" id="navigation">
      <h2>Navigation</h2>

      <h3>Static Links</h3>
      <router-link to="/introduction">
        Click Here!
      </router-link>
      <p>The source code for the button above:</p>
      <screenshot
              :header="'src/views/VueRouter.js'"
              :path="'vue-router/6-static-links.png'"></screenshot>

      <h3>Dynamic Links</h3>
      <code-block
              :header="'Referencing route list'"
              :lines="[
          'this.$router.options.routes',
        ]">
      </code-block>

      <p>Here's how to utilize that in the code.</p>
      <screenshot
              :header="'src/components/Navigation.js'"
              :path="'vue-router/5-navigation-template.png'"></screenshot>

      <h3>Active States</h3>
      <code-block
              :header="'Referencing route list'"
              :lines="[
              '<span>// Class applied when route exactly matches current</span>',
          '.router-link-exact-active',
          '',
          '<span>// Class applied when route matches the stem of current</span>',
          '.router-link-active'
        ]">
      </code-block>

      <h3>Scroll Behavior</h3>
      <p>The router has lots of configuration option, including scroll behavior. This is how we utilize normal hash navigation with Vue Router.</p>
      <screenshot
              :header="'src/router.js'"
              :path="'vue-router/7-scroll-behavior.png'"></screenshot>

    </div>

    <div class="section" id="lazy-loading">
      <h2>Lazy Loading</h2>
      <p>This will create a separate file for this route and only load it when it is needed.</p>
      <screenshot
              :header="'src/router.js'"
              :path="'vue-router/4-lazy-loading.png'"></screenshot>
    </div>
    <div class="section" id="redirecting">
      <h2>Redirecting</h2>
      <screenshot
              :header="'src/router.js'"
              :path="'vue-router/3-redirecting.png'"></screenshot>
    </div>


    <div class="section" id="existing-project">
      <h2>Existing Project (Optional)</h2>
      <screenshot
              :header="'Add Vue Router to an existing project'"
              :path="'vue-router/1-existing-project.png'"></screenshot>
    </div>
  </section>
</template>
