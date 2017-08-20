import Vue = require("vue");

declare module "vue/types/vue" {
  interface Vue {
    readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[] };
    $Message: any
  }
}