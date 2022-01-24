AFRAME.registerComponent("fish",{

    init:function(){
        for(var i=1;i<5;i++){
           var id=`fish${i}`

           var posX=Math.floor(Math.random()*3000+(-1000))
           var posY=Math.floor(Math.random()*2+(-1))
           var posZ=Math.floor(Math.random()*3000+(-1000))

           var position={x:posX,y:posY,z:posZ}

           this.createFish(id,position)
        }

    },

    createFish:function(id,position){
        var terrain=document.querySelector("#island")
        var bird=document.createElement("a-entity")
        bird.setAttribute("id",id)
        bird.setAttribute("position",position)
        bird.setAttribute("gltf-model","./fish_animated/scene.gltf")
        bird.setAttribute("scale",{x:500,y:500,z:500})
        bird.setAttribute("animation-mixer",{})
        terrain.appendChild(bird)
    }



})