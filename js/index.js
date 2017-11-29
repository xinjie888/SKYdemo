// nav动画 
//1f03ed00d850f5dd15b319e7f335d70b
$("#nav").on("mouseover","li",function(){
    var $target=$(this);
    var childs = $target.children(":last").children();
    var h = parseInt(childs.css("height")) + 1;
    var sh = childs.length * h;
    $target.children(":last").stop().animate({
        height: sh + "px"
    }, 400,"linear");
	var index=$target.index();
    $(".curBg").css({"left":index*168+2+"px"});
})
    .on("mouseout","[data-hover=hover]",function(){
         $(this).children(":last").stop().animate({
             height: "0px"
         }, 400);
		 //$(".curBg").css({"left":"2px"})
    });
//轮播
var $bn=$(".bn");
var imgWidth=parseInt($bn.children().children().children().children().children().css("width"));
$bn.children().css({"width":$bn.children().children().children().children().children().length*imgWidth+"px"});
var bnIndex=1;
var isBnTimer=bnTime();
function bnTime(){
	var stimer;
    bnTimer=setInterval(function(){
                $bn.children().children().css({"left":"-"+(imgWidth*bnIndex)+"px","transition":"all .8s linear"});
                //console.log($bn.children().children().children().children().children().length);
				if(bnIndex==4){
					stimer=setTimeout(()=>{
					$bn.children().children().css({"left":"0px","transition":"all 0s linear"});
					clearTimeout(stimer);
					stimer=null;
					console.log(stimer);
					},800);   
                    bnIndex=0;
				}
				bnIndex++;
				console.log(bnTimer);
            },5000)
}

//联系我们
$(".contact").on("mouseover","li:not(:last)>a",function(){
    var $tgt=$(this);
    //console.log($tgt.children());
    $tgt.children().addClass("msov");
})
    .on("mouseout","li:not(:last)>a",function(){
        var $tgt=$(this);
        $tgt.children().removeClass("msov");
     })
    .on("mouseover","li:last>a",function(){
        var $tgt=$(this);
        $tgt.children().addClass("msov_ewm");
     })
     .on("mouseout","li:last>a",function(){
         var $tgt=$(this);
         //console.log($tgt.children());
         $tgt.children().removeClass("msov_ewm");
})
           //f1_jpg
           $(".f1_jpg").on("mouseover","img",function(){
               var $img=$(this);
			   $img.parent().parent().siblings().children().addClass("opt");
			   $img.parent().removeClass("opt");
           })
               .mouseout(function(){
				   $(this).children().children().removeClass("opt");
                   //console.log($(this).children().children().children());
               })
           //主题轮播图
			      //(function(){
                   //轮播图
                   var li=$(".theme_banner").children().children();
                   //console.log(li);
                   var liIndex=1;
				   var isTimer=time();
                   function time(){
				       timer=setInterval(function(){
						   if(liIndex==li.length){
							   liIndex=0;
						   }
						   //console.log(liIndex);
						   $(li[liIndex]).addClass("display");
						   $(li[liIndex]).siblings().removeClass("display");
						   //小图底部的的动画
						   var $banner_d=$(".banner_d");
						   var left=($banner_d.children().children().width()+1)*liIndex;
                           $banner_d.children().last().animate({
                               left:left+"px"
                           },100)
						   //小图底部的的动画
						   liIndex++;
					   },3000);
				   };
				   li.hover(
				       //鼠标移入清楚定时器timer
				       function(){
					       clearInterval(timer);
						   isTimer=null;
					   },
					   //鼠标移出启动定时器timer
					   function(){
					       isTimer=time();
					   }
				   );
                   //小图
                   $(".banner_d").on("mouseover","li",function(){
                       var $li=$(this);
                       var index=$li.index();
                       var left=index*($li.width()+1);
                       $li.parent().next().stop().animate({
                           left:left+"px"
                       },100);
					   //鼠标移出时，轮播从当前下标处开始
					   liIndex=index+1;

                       //console.log($li.index());

					   clearInterval(timer);
					   isTimer=null;
                       $(li[$li.index()]).addClass("display");
					   $(li[$li.index()]).siblings().removeClass("display");
                   })
				   .on("mouseout","li",function(){
				       isTimer=time();
				   })
				// })();
         //f3
	     $(".case_list").children().hover(
		   function(){
			 var $this=$(this);
		     $this.addClass("tsfm");
             $this.children().children().last().css({"background":"rgb(0,144,190)"});
		   },
		   function(){
			 var $this=$(this);
		     $this.removeClass("tsfm");
             $this.children().children().last().css({"background":"#d0d0d0"});
		   },
		 );
		 ////////f4
	     //获取slide逐渐增加的尺寸
	     var slidesLeft=parseInt($("#slider").css("width"))/$("#slider").children().length;
		 //获取slide的宽度
		 var slideWidth=parseInt($(".slide").css("width"));
		 //获取slide总数分之一的尺寸
		 var slideLeft=slideWidth/$("#slider").children().length;
		 //算出前面移动的尺寸
		 var leftP=slidesLeft-(slideWidth-slideLeft)/$("#slider").children().length;
		 //算出后面移动的尺寸
		 var leftH=(slideWidth-slideLeft)/$("#slider").children().length;
		 //把slide的所有left保存到数组中
		 var slideLeftArray=[];
		 for(i=0;i<$("#slider").children().length;i++){
		   slideLeftArray.push(parseInt($($("#slider").children()[i]).css("left")));
		 }

		 //console.log(slideLeft);
	     $(".slide").stop().mouseenter(
		   function(){
		     var $slide=$(this);
			 //获取当前元素的下标保存在变量slideIndex中
			 var slideIndex=$slide.index();
			 //获取$slide父元素下的所有子元素保存在变量child中
			 var child=$slide.parent().children();
			 //获取当前元素的下标保存在变量slideIndex中
			 var slideIndex=$slide.index();
			 for(var i=0;i<=slideIndex;i++){
			   $(child[i]).css({"left":leftP*i+"px"})
			 }
			 for(var i=(slideIndex+1);i<child.length;i++){
			   $(child[i]).css({"left":slideLeftArray[i]+leftH*(child.length-i)});
			 }
		   }
		 );
		 $("#slider").mouseleave(function(){
			   var $slide=$(this);
			   var child=$slide.children();
			   for(var i=0;i<child.length;i++){
			     var myLeft=i*118;
				 $(child[i]).css({"left":myLeft+"px"});
			   }
			 }
        )
		///////f5
	     $(".f5_pic_list").children().hover(
		   function(){
		     var $li=$(this);
			 $li.children().children().first().css({"top":0});
		   },
		   function(){
		     var $li=$(this);
			 $li.children().children().first().css({"top":-362});
		   }
		 )
     // f6轮播
     var bdLi=$(".bd").children().children();
	 var hdLi=$(".hd").children().children();
     var fullIndex=1;
	 var isFullSlide=fullTime();
     function fullTime(){
				       fullTimer=setInterval(function(){
						   if(fullIndex==bdLi.length){
							 fullIndex=0;
						   }
						   //console.log(fullIndex);
						   $(bdLi[fullIndex]).css({"z-index":0,"opacity":1});
						   $(bdLi[fullIndex]).siblings().css({"z-index":-1,"opacity":0});
						   
						   $(hdLi[fullIndex]).css({"background":"#0090BE"});
						   $(hdLi[fullIndex]).siblings().css({"background":"#fff"});
						   fullIndex++;
					   },2000);
				   };
     $(".fullSlide").hover(
	   function(){
	     clearInterval(fullTimer);
		 isFullSlide=null;
	   },
	   function(){
	     isFullSlide=fullTime();
	   }
	 );
	 hdLi.click(function(){
	   var index=$(this).index();
	   fullIndex=index+1;
	   $(bdLi[index]).css({"z-index":0,"opacity":1});
	   $(bdLi[index]).siblings().css({"z-index":-1,"opacity":0});
	   $(hdLi[index]).css({"background":"#0090BE"});
	   $(hdLi[index]).siblings().css({"background":"#fff"});
	 });
	 //小贴士
     $(".fu_wu").children().hover(
	   function(){
		 $(this).children().css({"color":"#fff","font-size":"14px"});
	   },
       function(){
		 $(this).children().css({"color":"#777","font-size":"10px"});
	   }
	 );
	 //////footer
     $(".foot_nav").hover(
	   function(){
	     $(this).children().children().first().css({"color":"orange"});
	   },
	   function(){
	     $(this).children().children().first().css({"color":"#fff"});
	   },
	 );
	 $(".wbwx").children().hover(
	   function(){
		 $(this).css({"background":"#35B4DD"});
	   },
	   function(){
		 $(this).css({"background":"#ffcc00"});
	   }
	 );
	 $(".wx").hover(
	   function(){
	     $(this).children().last().css({"height":"128px"});
	   },
	   function(){
	     $(this).children().last().css({"height":"0px"});
	   }
	 );
       
       