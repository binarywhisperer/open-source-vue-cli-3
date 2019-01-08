
import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        company:{
            name: "Binary Whisperer",
            slogan: "00000101 00111001",
            color: "#2b2b2b"
        }
    },
    mutations: {
        newColorMutation(state){
            let color = "#";
            let hexChars = "0123456789ABCDEF";
            for (let i = 0; i < 6; i++) {
                color += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
            }
            state.company.color = color;
        },
        newCompany(state, company){
            state.company = company;
        }
    },
    actions: {
        newCompanyAction(context){
            axios.get('https://binarywhisperer.com/resources/faker-company')
                .then((response) => {
                    context.commit('newCompany', response.data);
                })
                .catch(function (error) {
                    alert("API Error. Sorry.");
                });
        }
    }
});
