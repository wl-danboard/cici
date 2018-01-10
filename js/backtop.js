$(function(){
//返回顶部 start
		var backTop=document.getElementById('rx-backTop');//获取返回顶部的按钮
		//获取页面可视区域高度
		var clientHeight=document.documentElement.clientHeight;
		var timer=null;
		var isTop=true;

		//滚动条滚动时触发
		window.onscroll=function(){
			var osTop=document.documentElement.scrollTop || document.body.scrollTop;
			if(osTop>=clientHeight){
				backTop.style.display='block';
			}else{
				backTop.style.display='none';
			}

			if(!isTop){
				clearInterval(timer);
			}
			isTop=false;
		}

		backTop.onclick=function(){
			//设置定时器
			timer=setInterval(function(){
				//osTop滚动条到顶部的距离 document.body.scrollTop兼容谷歌浏览器
				var osTop=document.documentElement.scrollTop || document.body.scrollTop;
				var ispeed=Math.floor(-osTop/6);
				document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;

				isTop=true;

				if(osTop==0){
					clearInterval(timer);
				}
			},30);
		}
		//返回顶部 end
})