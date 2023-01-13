let vm = new Vue({
  el: "#wrapper",
  data: {
   //assetsBaseURL: ".",
    assetsBaseURL: "https://main.dfvil7seowj3o.amplifyapp.com",
    name: "",
    company: "original",
    position: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    image:true,
    tel: "",
    cell: "",
    email: "",
    nameShow: "Name & Surname",
    activeShapeIndex: 0,
    shapes: [
      {
        id: 0,
        color: "#234AD6",
        selected: true,
      },
      {
        id: 1,
        color: "#FFFF16",
        selected: false,
      },
      {
        id: 2,
        color: "#00D491",
        selected: false,
      },
      {
        id: 3,
        color: "#C10000",
        selected: false,
      },
      {
        id: 4,
        color: "#FF4D07",
        selected: false,
      },
      
    ],
  },
  mounted() {
    new ClipboardJS("#copy-button");
  },
  methods: {
    selectShape(shape, index) {
      this.shapes[this.activeShapeIndex].selected = false;
      this.activeShapeIndex = index;
      shape.selected = true;
    },
    generate(){
      nameShow = "Name & Surname";
      console.log(nameShow);
      if (name === ""){
        console.log(name);
        nameShow = "";
        console.log(nameShow);
      }else{
        nameShow = name;
        
      }
    }
  },
});