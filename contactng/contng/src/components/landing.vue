<template>
  <main>
    <cheader />
    <div class="container" style="padding-bottom: 50px;margin-top: 30px;">
      <div class="row justify-content-center topspaceP">
        <div class="CategoriesCon">
          <div class="container topspace">
            <!-- Two columns of text -->
            <div class="row">
              <div class="col-lg-6 text-center" @click.prevent="component= 'cproducts'">
                <a href="#">
                  <img src="../assets/media/package.svg" width="140" height="140" alt />
                </a>
                <h2>Products</h2>
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-6 text-center" @click.prevent="component='cservices'">
                <a href="#">
                  <img src="../assets/media/customer.svg" width="140" height="140" alt />
                </a>
                <h2>Services</h2>
              </div>
              <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- products -->
          <div class="row justify-content-center">
            <component :is="component"></component>
            <!-- <cproducts /> -->
          </div>
          <!-- services -->
          <!-- <div class="row justify-content-center" >
            <cservices />
          </div>-->
          <!-- endservices -->
        </div>
      </div>
    </div>
    <hr class="featurette-divider" />
  </main>
</template>

<script>
import cheader from "./navigation/cheader.vue";
import cproducts from "./categories/cproducts";
import cservices from "./categories/cservices.vue";

export default {
  data() {
    return {
      showp: false,
      shows: false,
      component: ""
    };
  },
  components: {
    cheader,
    cproducts,
    cservices
  },
  methods: {
    // showP() {
    //   this.component = this.cproducts;
    //   // this.shows = false;
    // },
    // showS() {
    //   this.shows = true;
    //   this.showp = false;
    // }
  }
};
</script>

<style scoped>
</style>