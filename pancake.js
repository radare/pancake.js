P.onOrientationChange=function(e){var t=undefined,n=window.innerWidth,r=function(){var i=window.innerWidth;if(i!=n){const s=i>window.innerHeight?"landscape":"portrait";if(!t||t!=s)e(s),t=s;n=i}window.addEventListener("resize",r)};window.addEventListener("resize",r),r()};