/*
*dato el proyecto catclicker declarar una variable cat 
con los atributos name, photo, voteup, votedown
asignar los valores del modelo datos a la estructura 
html e implementar los eventos clik para el incremento 
o decremento de los votos
*/
   var cat = [{
   id: 1,
   name : 'Miyi',
   photo : 'img/cats/1.jpg',
   voteup:0,
   votedown:0
},
{
   id: 2,
   name : 'loco abreu',
   photo : 'img/cats/2.jpg',
   voteup:0,
   votedown:0
},
{
   id: 3,
   name : 'tokaso',
   photo : 'img/cats/3.jpg',
   voteup:0,
   votedown:0
},
{
   id: 4,
   name : 'el poro',
   photo : 'img/cats/4.jpg',
   voteup:0,
   votedown:0
},
{
   id: 5,
   name : 'kapo',
   photo : 'img/cats/5.jpg',
   voteup:0,
   votedown:0
},
{
   id: 6,
   name : 'mister',
   photo : 'img/cats/6.png',
   voteup:0,
   votedown:0
},
{
   id: 7,
   name : 'Macho',
   photo : 'img/cats/7.jpg',
   voteup:0,
   votedown:0
},
{
   id: 8,
   name : 'fumanchero',
   photo : 'img/cats/8.jpg',
   voteup:0,
   votedown:0
},
{
   id: 9,
   name : 'pirado',
   photo : 'img/cats/9.jpg',
   voteup:0,
   votedown:0
}
]
   	
  
   init();
   function init(){
   	showCat(cat);
   	bindEvent();
   }
   // // function showData(cat){
   //    $('h1').text(cat.name);
   //    $('img').attr('src', cat.photo);
   // 	$('#up span').text(cat.voteup);
   // 	$('#down span').text(cat.votedown);
   // }
   function clickUp(){
   	var cont = parseInt($(this).find('.up').text());
   cont++;
   $(this).find('.up').text(cont);
   }
   function clickDown(){
   var cont = parseInt($(this).find('.down').text());
   cont++;
   $(this).find('.down').text(cont);
   }
   function bindEvent(){
  $('.clikerup').click(clickUp);
   $('.clikerdown').click(clickDown);
   }
   function showCat(cat){
      var template = $('#template')
      var catsTpl;
      for (var i = 0; i < cat.length; i++) {
         var c = cat[i];
         catsTpl = $(template).clone();
         catsTpl.find('h1').text(c.name);
         catsTpl.find('img').attr('src',c.photo);
         catsTpl.find('.clikerup span').text(c.voteup);
         catsTpl.find('.clikerdown span').text(c.votedown);
         $('#cat-list').append(catsTpl);
      }
}
   