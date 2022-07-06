import MainScene from "./MainScene.js";

const config = {
  width : 512,
  height: 512, // 게임 화면 사이즈 조정
  backgroundColor:"rgb(181,214,146)",
  type:Phaser.AUTO,
  parent :"survival-game",
  scene:[MainScene],
  scale:{
    zoom:2,

  },
  physics:{
    default:"matter",
    matter:{
      debug:true,
      gravity:{y:0},
    }
  },
  plugins:{
    scene:[
      {
        plugins:PhaserMatterCollisionPlugin,
        key:"matterCollision",
        mapping:"matterCollision"
      }
    ]
  }
}

new Phaser.Game(config);
