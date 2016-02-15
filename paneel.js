window.addEventListener('load',function animate(){
    
    var pan1 = document.getElementById('paneel1');
     var pan2 = document.getElementById('paneel2');
     var pan3 = document.getElementById('paneel3');
     var pan4 = document.getElementById('paneel4');
    
     var home = document.getElementById('maison');
     var produit = document.getElementById('product');
     var client = document.getElementById('klant');
     var contat = document.getElementById('conta');
    
    
    var thuis = document.getElementById('huis');
     var produits = document.getElementById('producten');
     var klanten = document.getElementById('klantenservice');
     var contacten = document.getElementById('contact');
    
        pan1.style.transition = 'left 1.0s linear 0s';
       
        pan1.style.left = '44%';
        pan2.style.left = '100%';
        pan3.style.left = '100%';
        pan4.style.left = '100%';
    
       
    
    home.addEventListener('click',function anime1(){
        
        pan1.style.transition = 'left 1.0s linear 0s';
        pan1.style.left = '44%';
        pan2.style.left = '100%';
        pan3.style.left = '100%';
        pan4.style.left = '100%';
        
        
        
    },false)
    
    produit.addEventListener('click',function anime2(){
        
        pan2.style.transition = 'left 1.0s linear 0s';
        pan2.style.left = '44%';
        pan1.style.left = '100%';
        pan3.style.left = '100%';
        pan4.style.left = '100%';
    },false)
    
    client.addEventListener('click',function anime3(){
        
        pan3.style.transition = 'left 1.0s linear 0s';
        pan3.style.left = '44%';
        pan2.style.left = '100%';
        pan1.style.left = '100%';
        pan4.style.left = '100%';
    },false)
    
    
    contat.addEventListener('click',function anime4(){
        
        pan4.style.transition = 'left 1.0s linear 0s';
        pan4.style.left = '44%';
        pan2.style.left = '100%';
        pan3.style.left = '100%';
        pan1.style.left = '100%';
    },false)
    
},false)