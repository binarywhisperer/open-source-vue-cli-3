<template>
  <section>
    <h1>Vuex</h1>
    <div class="section" id="company-example">
      <h2>Company Example</h2>
      <p>Vuex is <strong>state</strong> management through <strong>mutations</strong> and <strong>actions</strong>. To illustrate these we will make the simple company example below work. </p>
      <company-example></company-example>
    </div>

    <div class="section" id="state">
      <h2>State</h2>
      <p>Our state has one company with a name, slogan, and color. This is the data for every company example.</p>
      <screenshot
              :header="'src/store.js'"
              :path="'vuex/1-state.png'"></screenshot>

      <p>The template holds our markup. Spoiler alert!</p>
      <screenshot
              :header="'src/components/CompanyExample.vue'"
              :path="'vuex/2-template.png'"></screenshot>
      <code-block
              :header="'Referencing company from state inside a component'"
              :lines="[
                  'this.$store.state.company;',
              ]">
      </code-block>
      <screenshot
              :header="'src/components/CompanyExample.vue'"
              :path="'vuex/3-script.png'"></screenshot>
    </div>

    <div class="section" id="mutations">
      <h2>Mutations</h2>
      <screenshot
              :header="'src/store.js'"
              :path="'vuex/4-mutations.png'"></screenshot>
      <code-block
              :header="'Trigger newColorMutation mutation execution inside a component'"
              :lines="[
                  'this.$store.commit(\'<pre>\'newColorMutation</pre>\');',
              ]">
      </code-block>
      <h3>Trigger newColorMutation execution</h3>
      <company-example :type="'mutation'"></company-example>
    </div>

    <div class="section" id="actions">
      <h2>Actions</h2>
      <screenshot
              :header="'src/components/CompanyExample.vue'"
              :path="'vuex/5-actions.png'"></screenshot>
      <code-block
              :header="'Trigger newCompanyAction action execution inside a component'"
              :lines="[
                  'this.$store.dispatch(\'<pre>newCompanyAction</pre>\');',
              ]">
      </code-block>
      <h3>Trigger newCompanyAction execution</h3>
      <company-example :type="'action'"></company-example>
    </div>

    <div class="section" id="map-functions">
      <h2>Map Function</h2>
      <code-block
              :header="'Vuex helper functions for adding state, mutations, and actions to component.'"
              :lines="[
                  'import { mapState, mapMutations, mapActions } from  &quot;vuex&quot;;',
              ]">
      </code-block>
    </div>
    <div class="section" id="shared-state-example">
      <h2>Shared State Example</h2>
      <p>The <router-link to="/introduction">Introduction View</router-link> will use the same state when using this component.</p>
    </div>

    <div class="section" id="existing-project">
      <h2>Existing Project (Optional)</h2>
      <code-block
              :header="'Add Vuex to an existing project'"
              :lines="[
                  'vue add vuex',
                  '🚀  Invoking generator for core:vuex...',
                  '✔  Successfully invoked generator for plugin: core:vuex',
                  'The following files have been updated / added:',
                  '',
                   '<pre>src/main.js</pre>',
                   '<pre>src/store.js</pre>',
                  '',
                   'You should review these changes with git diff and commit them.',
              ]">
      </code-block>
    </div>
  </section>
</template>

<script>
    import CompanyExample from "../components/CompanyExample";

    export default {
        name: "Vuex",
        components: {
            CompanyExample
        }
    };
</script>