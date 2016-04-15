var navApp = angular.module('navigationsleiste',['ngRoute','ngAnimate']);

navApp.directive('navigationsleisteStepNavigation',function($timeout,$location){
	return {
		restrict:'A',
		$scope:{
			menuList:'=',			
		},
		controller:function($scope,$timeout,$location){
			$scope.updated = 0;		
			 $scope.$watch(function () {
				return location.hash
			}, function(locationPath) {
				
					angular.forEach($scope.menuList,function(value, key){
				if(value.url==$location.path())
					$scope.updateStatus(key);
			})	
			});			
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
		templateUrl:'templates/menuNav.html',
		link:function($scope,elem,attr,ctrl){			
			var list = $scope.$eval(attr.menuList)
			var liWidth = 100/list.length;
			var initMargin = liWidth/2
			$scope.liWidth = liWidth+'%';
			$scope.initMargin = initMargin+'%';	
			   $scope.$on('delayIt',function(event, data){
					$scope.updateStatus(data.indx);
				 });
		}
	}
});
navApp.animation('.separate',function(){
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
});

navApp.service('delayedUrlUpdate',function($rootScope){
	this.delayIt = function(indx){
		$rootScope.$broadcast('delayIt',{'indx':indx});
	}
});

