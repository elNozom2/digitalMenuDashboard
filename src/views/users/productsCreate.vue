<template>
  <v-container>
    <template>
      <v-card>
        <v-tabs background-color="primary " dark fixed-tabs>
          <v-tab class="font-weight-bold"> <span>بيانات الصنف</span> </v-tab>
          <v-tab class="font-weight-bold"><span>الاسعار</span></v-tab>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <template>
                    <v-text-field
                      outlined
                      label="كود المجموعة"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="8">
                  <template>
                    <v-text-field
                      outlined
                      label="كود المنتج"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <template>
                    <v-text-field
                      outlined
                      label="بار كود المنتج"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <template>
                    <v-text-field
                      outlined
                      label="اسم المنتج"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <template>
                    <v-text-field
                      outlined
                      label="محتوي المنتج"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <template>
                    <v-text-field
                      outlined
                      label="المورد الرئيسي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6" md="6">
                  <v-checkbox
                    label="يتم استخدام الصنف"
                    color="primary"
                  ></v-checkbox> </v-col
                ><v-col cols="6" md="6">
                  <v-checkbox
                    label="سيريال"
                    color="primary"
                    value="primary"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" md="6">
                  <v-checkbox
                    label="وحدة اخري"
                    color="primary"
                    value="primary"
                  ></v-checkbox> </v-col
                ><v-col cols="6" md="6">
                  <v-checkbox
                    label="مركب"
                    color="primary"
                    value="primary"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر الشراء الكلي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر الشراء الجزئي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="خصم 1"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="خصم 2"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر شراء كلي نهائي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر شراء كلي جزئي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <template>
                    <v-text-field
                      outlined
                      label="ضريبة القيمة المضافة"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="نسبة الربح الكلي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="نسبة الربح الجزئي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر البيع الكلي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
                <v-col cols="12" md="6">
                  <template>
                    <v-text-field
                      outlined
                      label="سعر البيع الجزئي"
                      required
                      clearable
                    ></v-text-field>
                  </template>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12">
                  <v-btn
                    depressed
                    width="100%"
                    color="primary font-weight-bold"
                  >
                    حفظ
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>
  </v-container>
</template>
<script>
export default {
  name: "createProduct",
};
</script>
