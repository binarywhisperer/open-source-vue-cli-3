<template>
  <section>
    <h1>Vue UI (Optional)</h1>
    <p>Vue UI is a powerful GUI included with Vue CLI 3. I haven't gotten familiar enough with it to use it over the CLI, but it should be capable of replacing our CLI interface altogether.</p>

    <div class="section" id="starting">
      <h2>Starting</h2>
      <code-block
              :header="'Starting Vue UI'"
              :lines="[
                'vue ui',
                '🚀  Starting GUI...',
                '🌠  Ready on <pre>http://localhost:8000</pre>',

            ]">
      </code-block>
    </div>

    <div class="section" id="vue-project-manager">
      <h2>Vue Project Manager</h2>
      <p>The Project manager lets you import, export, and view all discovered projects.</p>
      <screenshot
              :header="'Landing page. Project agnostic.'"
              :path="'vue-ui/1-vue-project-manager.png'"></screenshot>

      <screenshot
              :header="'Navigation within project.'"
              :path="'vue-ui/2-vue-project-manager-nav.png'"></screenshot>
    </div>

    <div class="section" id="dashboard">
      <h2>Dashboard</h2>
      <screenshot
              :header="'Not much by default, but can be customized.'"
              :path="'vue-ui/7-dashboard.png'"></screenshot>
    </div>

    <div class="section" id="Plugins">
      <h2>Plugins</h2>
      <screenshot
              :header="'Plugin management.'"
              :path="'vue-ui/3-plugins.png'"></screenshot>
    </div>

    <div class="section" id="dependencies">
      <h2>Dependencies</h2>
      <screenshot
              :header="'Its like the prettiest package.json ever'"
              :path="'vue-ui/4-dependencies.png'"></screenshot>
    </div>

    <div class="section" id="configuration">
      <h2>Configuration</h2>
      <screenshot
              :header="'Robust configuration options.'"
              :path="'vue-ui/5-configuration.png'"></screenshot>
    </div>

    <div class="section" id="tasks">
      <h2>Tasks</h2>
      <screenshot
              :header="'Never have trouble reading the CLI Output again'"
              :path="'vue-ui/6-project-tasks.png'"></screenshot>
    </div>

  </section>
</template>
