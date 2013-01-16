(function(){

  var Scene = {
    animationbody: document.querySelector('#animationbody')
  };

  function initAnimation() {
    createDasAni('a001', 0.1, 200, 200);
    createDasAni('a002', 0.2, 500, 500);
    createDasAni('a003', 0.3, 400, 100);
    createDasAni('a004', 0.5, 100, 500);
    createDasAni('a005', 0.6, 800, 200);
    createDasAni('a006', 0.4, 850, 550);
  }

  DasAni = function(anId) {
    this.id = anId; //animation frame id
    this.x = 0; //top left
    this.y = 0; //top right
    this.w = 800; //paper frame width
    this.h = 800; //paper frame height
    this.scale = 1; //scale of animation
  }


  function createDasAni(anId,scale,xa,ya) {
    var dasani = new DasAni(anId);
    dasani.x = xa;
    dasani.y = ya;
    dasani.scale = scale;
    renderDasAni(dasani);
  }

  function renderDasAni(anim) {
    //paper
    var paper = document.createElement('div');
    paper.classList.add('paper');
    paper.id = 'paper' + anim.id;
    paper.style.width = anim.w * anim.scale + 'px';
    paper.style.height = anim.h * anim.scale + 'px';
    paper.style.top = anim.y + 'px';
    paper.style.left = anim.x + 'px';
    //fadebox
    var fadebox = document.createElement('div');
    fadebox.classList.add('fadebox');
    fadebox.id = 'fadebox' + anim.id
    //watercan
    var watercan = document.createElement('img');
    watercan.setAttribute('src','img/konewka.svg');
    watercan.classList.add('konewka');
    watercan.classList.add('object');
    watercan.id = anim.id /*watercan is starting animation, so
                            it has id of animation which after 
                            clicking will be used to animate elements*/
    watercan.style.top = 25 * anim.scale + 'px';
    watercan.style.width = 276 * anim.scale + 'px';
    watercan.style.height = 368 * anim.scale + 'px';
    //water
    var water = document.createElement('img');
    water.setAttribute('src','img/woda.svg');
    water.classList.add('woda');
    water.id = 'water' + anim.id;
    water.style.width = 392 * anim.scale + 'px';
    water.style.height = 328 * anim.scale + 'px';
    water.style.right = 280 * anim.scale + 'px';
    water.style.top = 200 * anim.scale + 'px';
    //dasein
    var dasein = document.createElement('img');
    dasein.setAttribute('src','img/dasein.svg');
    dasein.classList.add('dasein');
    dasein.id = 'dasein' + anim.id;
    dasein.style.bottom = 275 * anim.scale + 'px';
    dasein.style.right = 555 * anim.scale + 'px';
    dasein.style.width = 304 * anim.scale + 'px';
    dasein.style.height = 472 * anim.scale + 'px';
    //flower
    var flower = document.createElement('img');
    flower.setAttribute('src','img/kwiatek.svg');
    flower.classList.add('kwiatek');
    flower.id = 'flower' + anim.id;
    flower.style.bottom = 675 * anim.scale + 'px';
    flower.style.right = 760 * anim.scale + 'px';
    flower.style.width = 300 * anim.scale + 'px';
    flower.style.height = 280 * anim.scale + 'px';

    //combine html elements
    fadebox.appendChild(watercan);
    fadebox.appendChild(water);
    paper.appendChild(fadebox);
    paper.appendChild(dasein);
    paper.appendChild(flower);
    animationbody.appendChild(paper);
  }

  function growMe(element,speed,callback) {
    var w = element.css("width");
    var h = element.css("height");
    element.css({"width":"0","height":"0"});
    element.css("display","block");
    element.animate( { width: w, height: h}, speed, "swing", callback);

  }

  document.body.addEventListener('click', function(ev) {
    var t = ev.target;
    if(t.classList[0] === 'konewka'){ //TODO: is this ok?
      $("#"+t.id).addClass("rotate30");
      setTimeout( function() {
        var woda = $("#water"+t.id);
        growMe(woda, 4000, function() {
          //woda.slideDown(1000, function() {
          growMe( $("#dasein"+t.id), 2000, function() {
            growMe( $("#flower"+t.id), 5000, function() {
              $("#fadebox"+t.id).fadeOut(3000, function() {
                $("#flower"+t.id).addClass("object");
                $("#flower"+t.id).addClass("rotate360");
              });
            });
          });
        });
      },1000);
    }
  });

  window.addEventListener('load', function(ev) {
    initAnimation();
  },false);

})();
