$(function(){
		//头部导航 start
		var navList=$('.rx-menu ul li a');
		//点击切换当前样式
		navList.click(function(){
			$(this).addClass('active').parent().siblings().children().removeClass('active');
		});
		//头部导航条
		
	    //导航条 start
		var topNav = $('#rx-topNav');
		$(window).scroll(function(){
			var scrollTop=$(window).scrollTop();
			if (scrollTop>=100) {
				topNav.addClass('rx-navbar-scroll');
			}else{
				topNav.removeClass('rx-navbar-scroll');
			}
		});
		//导航条 end

		//首页我们能做的事icon动画 start
		var weEach=$('.rx-we-each-inner');
		weEach.hover(function(){
			$(this).children('div.rx-we-each-ico').addClass('animated wobble');
		},function(){
			$(this).children('div.rx-we-each-ico').removeClass('animated wobble');
		});
		//首页我们能做的事icon动画 end
		
		//首页精选案例动画 start
		var caseEach=$('.rx-case-each a');
		caseEach.hover(function(){
			$(this).find('div.rx-case-each-hide-center h2').addClass('animated swing');
			$(this).find('div.rx-case-each-hide-center p').addClass('animated bounceIn');
		},function(){
			$(this).find('div.rx-case-each-hide-center h2').removeClass('animated swing');
			$(this).find('div.rx-case-each-hide-center p').removeClass('animated bounceIn');
		});
		//首页精选案例动画 end
		
		//技术培训页面 滚动到当前图标的动画 start
		$(window).scroll(function(){
			//获取可视区域
			var ks_area=$(window).height();
			//获取卷上去的部分
			var scrollheight=$(window).scrollTop();
			//获取元素
			var divtop=$('.rx-train-icon-hd img');
			//当可视区域高度+卷上去的高度>=当前元素距顶部的距离就addClass()
			divtop.each(function(){
				var thisdivtop=$(this).offset().top;
				if(ks_area+scrollheight>=thisdivtop){
					$(this).addClass('animated swing');
				}
			})
		})
		//技术培训页面 滚动到当前图标的动画 end
		
		//页面小于1000时的导航条 start
		//页面小于1000
		var ka_Width=$(window).width();
		if (ka_Width<=1000) {
			$('.rx-wrap .rx-nav').addClass('rx-navbar-adapt');
			$('.rx-nav .rx-navbar-toggle').css('display','block');
			$('.rx-menu').css('display','none');
		};
		//自适应宽度
		$(window).resize(function(){
			var ka_Width=$(window).width();
			if (ka_Width>=1000) {
				$('.rx-wrap .rx-nav').removeClass('rx-navbar-adapt');
				$('.rx-nav .rx-navbar-toggle').css('display','none');
				$('.rx-menu').css('display','block');
				$('.rx-nav-inner .rx-menu').removeClass('rx-respon-menu');
			}else{
				$('.rx-wrap .rx-nav').addClass('rx-navbar-adapt');
				$('.rx-nav .rx-navbar-toggle').css('display','block');
				$('.rx-menu').css('display','none');
			};
		});
		//切换按钮
		var navBtn=$('.rx-navbar-toggle');
		var Mask=$('.rx-mask');
		navBtn.click(function(){
			if($(this).next().css("display")=="none"){
				Mask.fadeIn();
				$(this).parents('div.rx-nav').addClass('rx-navbar-adapt');
				$(this).next().addClass('rx-respon-menu');
				$(this).next().slideDown("slow");
			}else{
				Mask.fadeOut();
				$(this).next('.rx-menu').css('display','none');
				$(this).parents('div.rx-nav').removeClass('rx-navbar-adapt');
				$(this).next().removeClass('rx-respon-menu');
				$(this).next().slideUp("slow");
			}
		});
		//点击蒙层区域
		Mask.click(function(){
			$(this).fadeOut();
			navBtn.next('.rx-menu').css('display','none');
			navBtn.parents('div.rx-nav').removeClass('rx-navbar-adapt');
			navBtn.next().removeClass('rx-respon-menu');
			navBtn.next().slideUp("slow");
		});
		//浏览器窗口改变的时候蒙层消失
		$(window).resize(function(){
			Mask.fadeOut();
		});
		//页面小于1000时的导航条 end
});