<template>
    <ul id="nav">
      <li class="logo-item">
        <img src="../assets/binary-whisperer-logo.png" />
        <a href="https://binarywhisperer.com">
          Binary Whisperer
        </a>
      </li>
      <li v-for="route in $router.options.routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
        <ul class="sub-nav" v-if="routeHasHashes(route)">
          <li v-for="hash in routeHashes[route.name]">
            <router-link :to="route.path + `#${makeHash(hash)}`">
              {{ hash }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            routeHashes: {
                "Vue CLI 3": [
                    "Installation",
                    "Project Creation"
                ],
                "Vue UI": [
                    "Vue Project Manager",
                    "Dashboard",
                    "Plugins",
                    "Dependencies",
                    "Configuration",
                    "Tasks"
                ],
                "Vue Router": [
                    "Adding Route",
                    "Navigation",
                    "Lazy Loading",
                    "Redirecting",
                    "Existing Project",
                ],
                "Vuex": [
                    "Company Example",
                    "State",
                    "Mutations",
                    "Actions",
                    "Map Functions",
                    "Shared State Example",
                    "Existing Project",
                ],
                "Production Builds": [
                    "Build Command",
                    "Configuring Webpack",
                    "For Laravel"
                ]
            }
        };
    },
    methods: {
        routeHasHashes(route) {
            return (
                typeof this.routeHashes[route.name] !== "undefined" &&
                this.routeHashes[route.name].length
            );
        },
        makeHash(hash) {
            return hash.replace(/ /g, "-").toLowerCase();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
    position: fixed;
    width: 20vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    list-style: none;
    background: $color-vue-green;
    color: #fff;

    & > li {
        padding: 1px 2vw;
        box-sizing: border-box;
    }

    li.logo-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        background: $color-vue-blue;
        padding: 5px 0;
        img {
            max-height: 2rem;
            margin-right: 10px;
        }
        & > a:hover {
            color: $color-vue-green;
        }
    }

    li > a {
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        &:hover,
        &.router-link-exact-active {
            color: $color-vue-blue;
        }
        &.router-link-active {
            + .sub-nav {
                max-height: 100vh;
            }
        }
    }

    .sub-nav {
        box-sizing: border-box;
        max-height: 0;
        overflow: hidden;
        margin: 0;
        padding: 0 0 2px 40px;
        list-style: none;
        transition: max-height 0.2s;
        li > a {
            font-size: 1.25rem;
            font-weight: 500;
            &.router-link-exact-active {
                color: $color-vue-blue;
            }
        }
    }
}
</style>
