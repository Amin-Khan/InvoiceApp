// var root = new Vue({
//     el: "#main",
//     data: {
//         message:"Hello",
//     Invoices: [
//         { MaterialsN: 'Cement', MaterialsE:'10000', Hours:'18:00', ExpenseL:'5250', Date:'1-2-2021',Description:"etc.." },
//         {MaterialsN: 'Bricks', MaterialsE:'9500', Hours:'18:00', ExpenseL:'5500', Date:'2-2-2021',Description:"etc.."},
//         {MaterialsN: 'Iron ', MaterialsE:'15000', Hours:'18:00', ExpenseL:'6550', Date:'3-2-2021',Description:"etc.." }
//       ]
//     }
//   })



var app = new Vue({
  el: "#app",
  data: {
    message: "Hello00 Vue!",
    amin: "Does this get printed?",
    materialName:'',
    materialExpense:'',
    totalHrs: '',
    laborExpense:'',
    date:'',
    description:'',
    Invoices: [
                { MaterialsN: 'Cement', MaterialsE:'10000', Hours:'18:00', ExpenseL:'5250', Date:'2021-2-1',Description:"etc..", status:'paid'},
                { MaterialsN: 'Steel', MaterialsE:'10000', Hours:'18:00', ExpenseL:'5250', Date:'2021-2-21',Description:"etc..", status:'paid'},
                {MaterialsN: 'Bricks', MaterialsE:'9500', Hours:'18:00', ExpenseL:'5500', Date:'2021-3-18',Description:"etc..",  status:'late'},
                {MaterialsN: 'Iron ', MaterialsE:'15000', Hours:'18:00', ExpenseL:'6550', Date:'2021-5-19',Description:"etc.." ,  status:'outstanding'}
              ]
  },
  methods: {
    submit: function (event) {
      this.Invoices.push({'MaterialsN': this.materialName,'MaterialsE':this.materialExpense,'Hours':this.totalHrs,'ExpenseL':this.laborExpense,'Date':this.date,'Description':this.description, 'status': 'outstanding' });
    }
  }
});

// by default every  new ivoice raise it will  comes under outstanding status table