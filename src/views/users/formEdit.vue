<template>
  <v-container>
    <v-row class="form-container">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="$t('search')"
          outlined
          clearable
        ></v-text-field>
        <v-skeleton-loader
          class="mb-5"
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
              <div class="control-text">{{ item.name }} {{ item.id }}</div>
              <div>
                <v-icon
                  @click="selectCategory(item)"
                  v-if="item.level < 2"
                  class="ma-2"
                >
                  {{ open ? "mdi-plus-circle" : "mdi-plus-circle" }}
                </v-icon>
                <v-icon @click="deleteCategory(item)">
                  {{ open ? "mdi-delete" : "mdi-delete" }}
                </v-icon>
              </div>
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
                  :label="$t('name')"
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
                  :label="$t('arabicName')"
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
                  :label="$t('code')"
                  readonly
                  v-model="categoryCode"
                ></v-text-field>
              </template>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-if="disable"
                outlined
                :disabled="disable"
                clearable
                label="data Not found"
              ></v-combobox>
              <v-combobox
                v-else
                outlined
                clearable
                v-model="selectedCategory"
                :disabled="disable"
                :items="comboItems"
                item-text="name"
                @change="comboChanged"
                :label="$t('parentCode')"
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <template>
                <v-select
                  outlined
                  :items="staticData"
                  v-model="form.type"
                  :rules="inputRules"
                  :label="$t('categoryType')"
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
                :label="$t('image')"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-btn depressed width="100%" color="primary" @click="submitData">
                {{ $t("submit") }}
              </v-btn>
            </v-col>
            <v-row>
              <template>
                <div class="text-center">
                  <v-snackbar dark v-model="snackbar" :timeout="timeout">
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
              <v-card-title class="text-h4"> {{ $t("Warning") }} </v-card-title>
              <v-card-text>{{ $t("warningMsg") }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  {{ $t("close") }}
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  {{ $t("agree") }}
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
import groupsData from "../../utils/groups/groups";
import { comboType, itemType } from "@/utils/groups/comboInterface";
const groups = new groupsData();

export default Vue.extend({
  name: "HomeView",
  data() {
    let text = this.$t("addMsg");
    return {
      form: {
        name: "",
        arabicName: "",
        image: null,
        parentCode: 0,
        type: "",
      },
      search: "",
      disable: true,
      dialog: false,
      selectedCategory: "",
      snackbar: false,
      loading: true,
      categoryCode: "",
      text,
      timeout: 2000,
      value: "add the category",
      inputRules: [(v) => !!v || "Item is required"],
      comboItems: groups.comboItem,
      staticData: ["خامات", "منتج نهائي"],
      items: [],
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
    convertCurrentItemToStr(item) {
      let strItem = item.toString();
      if (item <= 9) {
        strItem = `0${item}`;
      }
      return strItem;
    },
    generateGroupCode(currentItem) {
      return `${currentItem.id}${this.convertCurrentItemToStr(
        currentItem.childrenLength + 1
      )}`;
    },
    comboChanged(item) {
      if (item == null || typeof item != "object") {
        this.categoryCode =
          this.items.length + 1 > 9
            ? `${this.items.length + 1}`
            : `0${this.items.length + 1}`;
        this.resetForm();
        return;
      }
      this.resetForm();
      if (item.location[1] == -1) {
        this.generateCode(this.items[item.location[0]]);
      } else {
        this.generateCode(
          this.items[item.location[0]].children[item.location[1]]
        );
      }
    },
    resetForm() {
      this.$refs.form.resetValidation();
      this.$refs.focus.focus();
      this.$refs.focus.reset();
    },
    selectCategory(item) {
      this.resetForm();
      this.selectedCategory = item.name;
      this.generateCode(item);
    },
    deleteCategory(item) {
      this.dialog = !this.dialog;
    },
    generateCode(item) {
      this.categoryCode = this.generateGroupCode(item);
    },
  },
  async mounted() {
    const req = await fetch("http://192.168.1.40:5000/api/group/hierarchy");
    const data = await req.json();
    // this.items = data;
    // setTimeout(() => {
    //   this.loading = false;
    // }, 1500);
    this.items = data;
    this.loading = !this.loading;
    this.disable = !this.disable;
    groups.insertComboData(this.items);
    this.comboChanged(null);
  },
});
</script>
