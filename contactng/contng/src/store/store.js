import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        vendors: [
            {
                name: "Jovenik Ventures LTD",
                category: "Plumbing",
                location: "Living Faith Gwagalada, Abuja",
                phone: "09051547890",
                link: "1"
            },
            {
                name: "Akamide Barbing Consultants",
                category: "Human services",
                location: "GRA, Port Harcort",
                phone: "08077654346",
                link: "2"
            }
        ]
    }
})