<!--
  Title: Navigationsleiste
  Description: An app to show step navigation progress using angular js.A step navigation using angularjs.
  Author: Varada Sajan
  -->

# navigationsleiste
An app to show step navigation using angular js. 

<p>
Adding progress bar on mouse click is something different and this custom directive will do the trick for you. When a user clicks a "save" or "next" button, this navigation progress bar will animated and updated accordingly.
This visually appealing progress bar is easy to configure and will look great on any design. you could add more links to the step navigation and also you can customize the style of the progressbar if you want. Shall we dive in to Navigationsleiste?
</p>

<h4 class="headerH">Usage</h4>
<h5 class="headerH">Requirements</h5>
<ul>
<li>AngularJS v1.2.0+ is currently required.</li>
<li>angular route js</li>
<li>angular animate js</li>
<li>jQuery</li>
</ul>
<h5 class="headerH">Installation</h5>
<p>Include the above javascript files and the css file inside the html </p>
<pre>
	&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"&gt;&lt;/script&gt;
	&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-route.min.js"&gt;&lt;/script&gt;
	&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.js"&gt;&lt;/script&gt;
	&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"&gt;&lt;/script&gt;
	&lt;script src="navigationsleiste.js"&gt;&lt;/script&gt;
	
	&lt;link rel="stylesheet" href="css/navStyle.css"/&gt;
</pre>
<p>You could copy and paste the navigationsleiste.js from js/navigationsleiste/ folder. Include the module 'navigationsleiste' along with your app.</p>
<pre>
angular.module('myApp',['ngRoute','navigationsleiste']);
</pre>
<p>Inside your main controller that is going to use the Navigationsleiste, you need to set a scope variable named 'menuList' with the details of the navigation steps. Sample data is included here.</p>

<pre>
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
		]
</pre>
<p>I have included the template for this directive in template folder in the example given. If you want to change that path, please open the js\navigationsleiste\navigationsleiste.js and replace the text 'templates/menuNav.html' accordingly. 
Finally add the directive to you html page before the ng-view
<pre>
&lt;div navigationsleiste-step-navigation menu-list="menuList"&gt;&lt;/div&gt;
</pre>
</p>
Here we go......Our awesome navigation is ready
<h5 class="headerH">Customisation</h5>
<p>You need to include only the navStyle css to make the directive display properly. Please feel free to play with this css to make it suitable for your website</p>


<p>Thank you.</p>
<br/>
