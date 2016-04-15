var app = angular.module('myApp',['ngRoute','navigationsleiste']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
      .when('/firstpage', {
        templateUrl: 'templates/first.html',
        controller: 'firstCtrl'
      })
	  .when('/secondpagetest', {
        templateUrl: 'templates/second.html',       
      })
	  .when('/thirdpage', {
        templateUrl: 'templates/third.html',       
      })
	  .when('/forthpage', {
        templateUrl: 'templates/forth.html',       
      })
	  .when('/fifth', {
        templateUrl: 'templates/fifth.html',       
      })
	  .when('/sixth', {
        templateUrl: 'templates/sixth.html',       
      })
	  .when('/sevnth', {
        templateUrl: 'templates/first.html',       
      })
	  .otherwise({
        redirectTo: 'firstpage',       
      })
  }]);
app.controller('myCtrl',function($scope,delayedUrlUpdate){
		$scope.test='test';
		$scope.menuList=[
			{ 
			item:'first page',
			url:'/firstpage',
			status:''
			},
			{ 
			item:'second page',
			url:'/secondpagetest',
			status:''
			},
			{ 
			item:'third page',
			url:'/thirdpage',
			status:''
			},
			{ 
			item:'forth page',
			url:'/forthpage',
			status:''
			},
			{ 
			item:'fifth page',
			url:'/fifth',
			status:''
			},
			{ 
			item:'sixth page',
			url:'/sixth',
			status:''
			},
		];
	
		$scope.delayedUrl = function(indx){
			delayedUrlUpdate.delayIt(indx);
		}
});
/*
app.directive('myStepNavigation',function($timeout,$location){
	return {
		restrict:'A',
		$scope:{
			menuList:'=',
		},
		controller:function($scope,$timeout,$location){
			$scope.updated = 0;
			$scope.updateStatus = function(indx){
				$scope.updated=0;
				//allow the call only if the existing one is finished.
				if($scope.porocessStatus!=true){
					$scope.porocessStatus=true;				
				setStatus('',indx,$scope.menuList.length,indx);
				$timeout(function(){			
					setStatus('complete',indx,-1,indx);		
				},200);
				//$scope.menuList[indx].status = 'active';
				
				}
			}
			function setStatus(statusName,indx,i,current){
				$scope.updated=$scope.updated+1;
				if($scope.menuList[i])
				$scope.menuList[i].status = statusName;
				
				
			   
				if(i<indx-1){
					i++;
					if($scope.menuList[i].status == 'complete')
					setStatus('complete',indx,i,current);
					else
					$timeout(function(){
					setStatus('complete',indx,i,current);
					},200);
				}
				else if(i>indx){
				i--;
				$timeout(function(){
				setStatus('',indx,i,current);
				},200);
				}
				if(i==indx){
					$scope.porocessStatus=false;					
				}				
				if($scope.updated==$scope.menuList.length+2){
					$location.path($scope.menuList[current].url);
				}
			}
		},		
		templateUrl:'menuNav.html',
		link:function($scope,elem,attr,ctrl){
			var liWidth = 100/$scope.menuList.length;
			var initMargin = liWidth/2
			$scope.liWidth = liWidth+'%';
			$scope.initMargin = initMargin+'%';
			angular.forEach($scope.menuList,function(value, key){
				if(value.url==$location.path())
					$scope.updateStatus(key);
			})
		}
	}
});
app.animation('.separate',function(){
	 return {
		removeClass   : function(element, className, done) {
			  if (className === 'ng-hide') {        
					$(element).animate({width: "100%"},200);	
					$(element).parent().addClass('progressDone');
				 }
		 },
		 beforeAddClass : function(element, className, done) {
			  if (className === 'ng-hide') { 
				$(element).animate({width: "0px"},200,function(){
					$(element).parent().removeClass('progressDone');
				});				
			  }			 
		}
	 }
})
*/
app.controller('firstCtrl',function($scope,$location){
		$scope.test='First controller';
		$scope.gotoNext = function(){
		$location.replace();
		$location.path('/secondpagetest');			
		}
});