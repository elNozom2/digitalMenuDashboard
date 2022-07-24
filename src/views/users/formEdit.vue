<template>
  <v-container>
    <v-row class="form-container">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          clearable
        ></v-text-field>
        <v-skeleton-loader
          type="article: heading, paragraph"
          v-if="loading"
        ></v-skeleton-loader>
        <v-skeleton-loader
          type="article: heading, paragraph"
          v-if="loading"
        ></v-skeleton-loader>
        <v-treeview v-else :search="search" :items="items">
          <template v-slot:label="{ item, open }">
            <div class="flex-space">
              <span>{{ item.name }} {{ item.id }} </span>
              <span>
                <v-icon @click="deleteCategory(item)" class="mr-4">
                  {{ open ? "mdi-delete" : "mdi-delete" }}
                </v-icon>
                <v-icon
                  @click="selectCategory(item)"
                  v-if="item.children.length > 0"
                  class="mr-2"
                >
                  {{ open ? "mdi-plus-circle" : "mdi-plus-circle" }}
                </v-icon>
              </span>
            </div>
          </template>
        </v-treeview>
      </v-col>
      <v-col cols="12" md="6">
        <v-form value ref="form" class="mainForm">
          <v-row>
            <v-col cols="12">
              <template>
                <v-text-field
                  ref="focus"
                  outlined
                  label="Name"
                  v-model="form.name"
                  required
                  clearable
                  :rules="inputRules"
                ></v-text-field>
              </template>
            </v-col>
            <v-col cols="12">
              <template>
                <v-text-field
                  outlined
                  label="الاسم"
                  v-model="form.arabicName"
                  required
                  clearable
                  :rules="inputRules"
                ></v-text-field>
              </template>
            </v-col>
            <v-col cols="12">
              <template>
                <v-text-field
                  outlined
                  label="code"
                  disabled
                  v-model="categoryCode"
                ></v-text-field>
              </template>
            </v-col>
            <v-col cols="12">
              <template>
                <v-combobox
                  outlined
                  clearable
                  v-model="selectedCategory"
                  :disabled="disable"
                  :items="comboItems"
                  item-text="name"
                  @change="comboChanged"
                  :label="value"
                ></v-combobox>
              </template>
            </v-col>
            <v-col cols="12">
              <template>
                <v-select
                  outlined
                  :items="staticData"
                  v-model="form.type"
                  :rules="inputRules"
                  label="Standard"
                  dense
                  clearable
                ></v-select>
              </template>
            </v-col>
            <v-col cols="12">
              <v-file-input
                outlined
                accept="image/*"
                v-model="form.image"
                label="File input"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-btn depressed width="100%" color="primary" @click="submitData">
                Submit
              </v-btn>
            </v-col>
            <v-row>
              <template>
                <div class="text-center">
                  <v-snackbar v-model="snackbar" :timeout="timeout">
                    {{ text }}
                  </v-snackbar>
                </div>
              </template>
            </v-row>
          </v-row>
        </v-form>
      </v-col>
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="text-h3"> Warning </v-card-title>
              <v-card-text>Do you want to delete item</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { generateColors, switchMode } from "@/utils/helpers";
import groupsData from "../../utils/groups/groups.ts";
const groups = new groupsData();
export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      form: {
        name: "",
        arabicName: "",
        image: null,
        parentCode: 0,
        type: "",
      },
      search: "",
      disable: false,
      dialog: false,
      selectedCategory: "",
      loading: false,
      categoryCode: "",
      snackbar: false,
      text: "Category added successfully",
      timeout: 2000,
      value: "add the category",
      inputRules: [(v) => !!v || "Item is required"],
      comboItems: groups.comboItem,
      staticData: ["خامات", "منتج نهائي"],
      items: groups.items,
    };
  },
  methods: {
    submitData() {
      if (this.$refs.form.validate()) {
        console.log(this.form);
        this.snackbar = !this.snackbar;
      } else {
        setTimeout(() => {
          this.$refs.form.resetValidation();
        }, 10000);
      }
    },
    comboChanged(item) {
      console.log("combo changed", item);
      if (item && typeof item.id != "undefined") {
        this.form.parentCode = item.id;
        console.log("combo change ", item.childrenLength + 1, item.level + 1);
        this.generateCode(item.childrenLength + 1, item.level + 1);
        return;
      }
      this.generateCode(this.items.length + 1, 0);
      this.form.parentCode = 0;
    },
    selectCategory(item) {
      this.$refs.form.resetValidation();
      this.$refs.focus.focus();
      this.$refs.focus.reset();
      this.selectedCategory = item;
      let modifiedItem;
      for (const ele of this.comboItems) {
        if (ele.id === item.id) {
          modifiedItem = ele;
          break;
        }
      }
      this.comboChanged(modifiedItem);
    },

    deleteCategory(item) {
      console.log("deleted", item);
      this.dialog = !this.dialog;
    },
    generateCode(currentItem, level) {
      console.log("generate code", currentItem, level);
      if (currentItem <= 9) {
        currentItem = `0${currentItem}`;
      }
      if (level == 0) {
        this.categoryCode = `${currentItem}`;
      } else if (level == 1) {
        this.categoryCode = `${this.form.parentCode}${currentItem}`; //4
      } else {
        this.categoryCode = `${this.form.parentCode}${currentItem}`; //6
      }
    },
  },
  async mounted() {
    // try {
    //   const data = await fetch("http://192.168.1.40:5001/api/groups/0");
    //   console.log("saddsads");
    //   if (!data.ok) {
    //     throw new Error("data not found");
    //   }
    //   const res = await data.json();
    //   this.comboItem = res;
    // } catch (err) {
    //   this.disable = true;
    //   this.value = "Data not found";
    //   // console.log(err.message);
    // }
    // setTimeout(() => {
    //   this.loading = false;
    // }, 5000);
    this.generateCode(this.items.length + 1, 0);
  },
});
</script>
