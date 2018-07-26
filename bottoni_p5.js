var flag = false;
var myCanvas;
var cucina;
var sala;
var cTF=false;  //cucina TRUE/FALSE
var sTF=false;
var url;
var inizio_parametri;  // cerca lo "/" prima dei parametri

function setup() {
 myCanvas=createCanvas((window.innerWidth),(window.innerHeight));
 myCanvas.parent('cucina');
 url = getURL();
 print(url);
 inizio_parametri=cerca_inizio();
 if(inizio_parametri>0)  //se ci stanno attributi aggiuntivi li analizza
 {
   cucina=subset(url,inizio_parametri+1,8);
   sala=subset(url,inizio_parametri+9,8);
   if(cucina[7]== 'f')
   {
     cTF=false;
   }
   if(cucina[7]=='n')
   {
     cTF=true;
   } 
   
   if(sala[7]== 'f')
   {
     sTF=false;
     print("321321");
   }
   if(sala[7]=='n')
   {
     sTF=true;
     print("123123");
   } 
   
 }
 //print(inizio_parametri);
 //frameRate(10);
}

function draw() {
  //background(255);
  //line(mouseX,mouseY,pmouseX,pmouseY);
  if(cTF)
    fill(0,255,0);
  else
    fill(255,0,0);
  rect(width/3,height/20,width/3,height/20);
  fill(0);
  textSize(height/40);
  textAlign(CENTER);
  text('CUCINA', width/2, 3*height/40);
  
  
  if(sTF)
    fill(0,255,0);
  else
    fill(255,0,0);
  rect(width/3,height/9,width/3,height/20);
  fill(0);
  textSize(height/40);
  textAlign(CENTER);
  text('SALA', width/2, 3*height/20);
  
}

function cerca_inizio()
{
  var c=url.length;
  c=c-20;
  var x=0;
  while(url[c+x]!='/'&&x<20)
  {
    x++;
  }
  if(x==20)
    return -1;
  return (c+x);
  
  
}


function mouseClicked() {
  var l1n="/?light1on";
  var l1f="/?light1of";
  var l2n="?light2on";
  var l2f="?light2of";
  var link;

  if(mouseX <= 2*width/3 && mouseY >= height/20 && mouseX>=width/3 && mouseY<=height/10)  //aggiustare la "mira"
  {
    /*  if (cTF == false) {                      //da ampliare con tutte le opzioni
      window.location.href = "light1on.html";
    }
    if(cTF== true) {
      window.location.href = "light1of.html";
    }*/
    if (sTF == false) {                      //da ampliare con tutte le opzioni
      if(cTF==true)
      {
        link=l1f.concat(l2f);
      }
      else
      {
        link=l1n.concat(l2f);
      }
      window.location.href = link;
    }
    if(sTF== true) {
      if(cTF==true)
      {
        link=l1f.concat(l2n);
      }
      else
      {
        link=l1n.concat(l2n);
      }
      window.location.href = link;
    }
  }
  
    if(mouseX <= 2*width/3 && mouseY >= height/9 && mouseX>=width/3 && mouseY<=(height/9)+(height/20))  //aggiustare la "mira"
  {
      if (sTF == false) {                      //da ampliare con tutte le opzioni
      if(cTF==true)
      {
        link=l1n.concat(l2n);
      }
      else
      {
        link=l1f.concat(l2n);
      }
      window.location.href = link;
    }
    if(sTF== true) {
      if(cTF==true)
      {
        link=l1n.concat(l2f);
      }
      else
      {
        link=l1f.concat(l2f);
      }
      window.location.href = link;
    }
  }
}
