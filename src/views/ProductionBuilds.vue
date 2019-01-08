<template>
  <section>
    <h1>Production Builds</h1>
    <div class="section" id="build-command">
      <h2>Build Command</h2>
      <code-block
      :header="'package.json: \'build\': \'vue-cli-service build\''"
              :lines="[
          'npm run build',
        ]">
      </code-block>

      <screenshot
              :header="'tree dist'"
              :path="'production-builds/2-dist-built.png'"></screenshot>
    </div>

    <div class="section" id="configuring-webpack">
      <h2>Configuring Webpack</h2>
      <p>Vue CLI 3 aims to be extensible without ejection. A major mechanism to accomplish this is the optional <a href="https://cli.vuejs.org/config/">vue.conif.js</a>, which allows you to configure the CLI and webpack.</p>
      <screenshot
              :header="'vue.config.js'"
              :path="'production-builds/1-vue-config-js.png'"></screenshot>

      <h2>For Laravel</h2>
      <p>The above configuration is how I'm deploying my project to <i>open-source-vue-cli-3.blade.php</i> within my Laravel project, <a href="binarywhisperer.com">binarywhisperer.com</a>.</p>
    </div>
  </section>
</template>
