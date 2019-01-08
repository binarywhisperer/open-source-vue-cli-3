<template>
  <section>
    <h1>Vue CLI 3</h1>
    <div class="section" id="installation">
      <h2>Installation</h2>
      <p>Vue CLI 3 is distributed as an <a href="https://www.npmjs.com/package/@vue/cli">npm package</a> and should be installed globally via the command line.</p>
      <code-block
              :header="'Install Vue CLI 3 globally.'"
              :lines="[
                'npm install -g <pre>@vue/cli</pre>',
                '<span># OR</span>',
                'yarn global add <pre>@vue/cli</pre>'
            ]">
      </code-block>
      <code-block
              :header="'Confirm installation.'"
              :lines="[
                'vue --version',
                '<span>3.2.3</span>'
            ]">
      </code-block>
    </div>

    <div class="section" id="project-creation">
      <h2>Project Creation</h2>
      <code-block
              :header="'Creatw a new project named open-source-vue-cli-3.'"
              :lines="[
                'vue create <pre>open-source-vue-cli-3</pre>'
            ]">
      </code-block>

      <h3>CLI Options</h3>
      <p>While the <i>default(babel, eslint)</i> option will have everything you need for a working project, we will utilize the <i>Manually select features</i> option. Every choice we make here is able to be added later and the explanation on how is included in this  tutorial.</p>
      <screenshot
              :header="'Select Manually select features'"
              :path="'vue-cli-3/1-manual-configuration.png'"></screenshot>
      <screenshot
              :header="'We want to select (spacebar) Babel, Router, Vuex, CSS Pre-processors, and Linter/Formatter.'"
              :path="'vue-cli-3/2-manual-configuration-selection.png'"></screenshot>
      <screenshot
                :header="'All configuration selections.'"
                :path="'vue-cli-3/3-all-configuration-options.png'"></screenshot>

      <ul>
        <li><strong>No</strong> - History mode is for server side rendering.</li>
        <li><strong>Sass/SCSS</strong> - My pre-processor of choice for this project.</li>
        <li><strong>Prettier</strong> - ESLint highlights ugly code and Prettier makes it pretty</li>
        <li><strong>Lint on save</strong> - or Lint and fix on commit. Dealer's choice.
        <li><strong>In dedicated config files</strong> - or In package.json. Dealer's choice.</li>
      </ul>
      <code-block
              :header="'After completing all prompts'"
              :lines="[
                'vue create <pre>open-source-vue-cli-3</pre>',
                'Vue CLI v3.2.3',
                '✨  Creating project in ~/open-source-vue-cli-3.',
                '🗃  Initializing git repository...',
                '⚙  Installing CLI plugins. This might take a while...'
            ]">
      </code-block>

      <screenshot
              :header="'Initial project structure excluding contents of node_modules.'"
              :path="'vue-cli-3/4-project-files.png'"></screenshot>
    </div>


  </section>
</template>
