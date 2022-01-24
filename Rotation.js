//Island rotation
AFRAME.registerComponent("island-rotation", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "d") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "a") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  //plane rotation
AFRAME.registerComponent("scuba-diver", {
    schema: {
      speedOfRotation: { type: "number", default: 0 } ,
      speedOfAscent:{type:"number", default:0}   
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        //get the data of attributes
        this.data.speedOfRotation=this.el.getAttribute("rotation")
        this.data.speedOfAscent=this.el.getAttribute("position")
  
        var planeRotation=this.data.speedOfRotation
        var planePosition=this.data.speedOfAscent
        if (e.key === "d") {
          if (planeRotation.x < 10) {
            planeRotation.x+=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
        if (e.key === "a") {
          if (planeRotation.x > -10) {
            planeRotation.x-=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
  
        if (e.key === "w") {
  
          if(planePosition.y<5){
            planePosition.y+=0.01
            this.el.setAttribute("position",planePosition)
          }
          if (planeRotation.z < 20) {
            planeRotation.z+=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
        if (e.key === "s") {
          if(planePosition.y<-5){
            planePosition.y-=0.01
            this.el.setAttribute("position",planePosition)
          }
          if (planeRotation.z > -40) {
            planeRotation.z-=0.5
            this.el.setAttribute("rotation",planeRotation)
          }
        }
      });
    }
  });
  
  
  
  
  
  