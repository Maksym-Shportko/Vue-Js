// Vue.component('singleItem',{
//     props:['data'],
//     data:function(){
//         return{
//             tasks: [
//                 {label:"task 1",
//                 isActive:true,
//               },
//               {
//                 label:"task2",
//                 isActive:true,
//               }
//             ]

//         }
//     },
//         methods:{
//             save: function() {
//                 this.tasks.push({
//                   label:this.textValue
//                 });
//               },
//               remove: function(index) {
//                 this.tasks.splice(index, 1);
//               },
//               changeActive:function(){
//                 this.seen=true
//               },
//               saveChanges:function(){
//                 this.seen=false
//               }
//         }
    
// })



let todo = new Vue({
    el: "#app",
    data: {
      header: "to do list",
      tasks: [
        {label:"task 1",
        isActive:true,
      },
      {
        label:"task2",
        isActive:true,
      }
    ],
      textValue: "",
      // seen: false
      seen:false
    },
    methods: {
      save: function() {
        this.tasks.push({
          label:this.textValue
        });
      },
      remove: function(index) {
        this.tasks.splice(index, 1);
      },
      changeActive:function(){
        this.seen=true
      },
      saveChanges:function(){
        this.seen=false
      }
}})
