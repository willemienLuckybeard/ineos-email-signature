let vm = new Vue({
  el: "#wrapper",
  data: {
   //assetsBaseURL: ".",
    assetsBaseURL: "https://master.d3loxe9kf7l2m6.amplifyapp.com",
    name: "",
    position: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    tel: "",
    cell: "",
    email: "",
    activeShapeIndex: 0,
    shapes: [
      {
        id: 0,
        icon: "sharpBlue.png",
        iconBorder: "sharpBlueWhite.png",
        signatureLeftImage: "brightBlueIcon.gif",
        color: "#234AD6",
        textColors: {
          title: '#000000',
          position: '#0032FF',
          body: '#161618'
        },
        selected: true,
      },
      {
        id: 1,
        icon: "red.png",
        iconBorder: "redWhite.png",
        signatureLeftImage: "redIcon.gif",
        color: "#FFFF16",
        textColors: {
          title: '#000000',
          position: '#5F1C19',
          body: '#161618'
        },
        selected: false,
      },
      {
        id: 2,
        icon: "yellow.png",
        iconBorder: "yellowWhite.png",
        signatureLeftImage: "yellowIcon.gif",
        color: "#00D491",
        textColors: {
          title: '#000000',
          position: '#B29372',
          body: '#161618'
        },
        selected: false,
      },
      {
        id: 3,
        icon: "darkYellow.png",
        iconBorder: "darkYellowWhite.png",
        signatureLeftImage: "darkYellowIcon.gif",
        color: "#C10000",
        textColors: {
          title: '#000000',
          position: '#907D4F',
          body: '#161618'
        },
        selected: false,
      },
      {
        id: 4,
        icon: "lightYellow.png",
        iconBorder: "ligthYellowWhite.png",
        signatureLeftImage: "lightYellowIcon.gif",
        color: "#FF4D07",
        textColors: {
          title: '#000000',
          position: '#CBBCA0',
          body: '#161618'
        },
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
  },
});