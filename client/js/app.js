var config = {
    apiKey: "AIzaSyA_ECTvmFcCLgJdgWVflcRtMkEszNmloOQ",
    authDomain: "mydata-d5748.firebaseapp.com",
    databaseURL: "https://mydata-d5748.firebaseio.com",
    projectId: "mydata-d5748",
    storageBucket: "mydata-d5748.appspot.com",
    messagingSenderId: "1097794308491"
  };
 firebase.initializeApp(config);



        var app =  angular.module('firstApplication',['firebase',"ngRoute"])
        app.config(['$locationProvider','$routeProvider',($locationProvider,$routeProvider)=>{
            $routeProvider
                    
                    .when("/", {
                        templateUrl : "./views/jeansView.html"
                          })
                    .when("/shirts", {
                        templateUrl : "./views/shirtsView.html"
                          })

                    .when("/dress", {
                        templateUrl : "./views/dressView.html"
                          })   
                     .when("/contact", {
                        templateUrl : "./views/contactView.html"
                          })     
                          
                    
                    $locationProvider.html5Mode(true)
                    $locationProvider.hashPrefix("")
        }])
         app.controller('myctrl',['$scope','$log','$firebaseObject','$firebaseArray','$rootScope',
         ($scope,$log,$firebaseObject,$firebaseArray,$rootScope)=>{

            $scope.dev = " daxesh mehra" 
            $rootScope.cart = []

             $scope.addToCart = (productName,productPrice,size,color,quantity)=>{

                    let itemToAdd = {

                        "productName":productName,
                        "productPrice":productPrice,
                        "size":size,
                        "color":color,
                        "quantity":quantity

                    }
                            // $log.info(JSON.stringify(itemToAdd)) 
                  if(isNaN(itemToAdd.quantity ))
                  {
                      itemToAdd.quantity = 1
                  }          

                $rootScope.cart.push(itemToAdd)
                $log.info(JSON.stringify($rootScope.cart)) 

                $scope.loginToast("item added to cart") 
             }

             $scope.removeItem = (index)=>{

                //  let index = $rootScope.cart.indexOf(item)
                 $rootScope.cart.splice(index, 1)
                 $scope.loginToast("item removed from cart") 
             }

             $scope.showOrders = ()=>{

                 $scope.showOrder = !$scope.showOrder

                 if($rootScope.cart)
                 {
                     $scope.cartStatus = $rootScope.cart.length
                     
                 }
                 else
                 {
                     $scope.cartStatus = "empty"
                 }
                 
                 let getTotal = ()=>{

                     $scope.cartTotal = 0
                    $rootScope.cart.forEach((item,index)=>{
                        
                        $scope.cartTotal = $scope.cartTotal + ( item.quantity * item.productPrice )

                    })
                    $log.info($scope.cartTotal)
                 }
                 
                 getTotal()
                }




         }])

        app.controller("shirtsCtrl",($scope,$rootScope)=>{

            let shirtItem1 = [
            {
                "itemName":"Ripped shirt",
                "itemImage":"./assets/images/shirt/casual.jpg",
                "itemPrice":"11.99",
                "itemDesc":"it is a denium ripped shirt",
                "itemSize":["small","medium","large"],
                "itemColor":["blue","green","white","black","pink"],
                "itemQuantity":['1','2','3','4','5']
            },
            {
                "itemName":"checks shirt",
                "itemImage":"./assets/images/shirt/casual.jpg",
                "itemPrice":"14.99",
                "itemDesc":"it is a gap checked shirt",
                "itemSize":["small","medium","large"],
                "itemColor":["blue","green","white","black","pink"],
                "itemQuantity":['1','2','3','4','5']
            },
            ]

            let shirtItem2 = [
            {
                "itemName":"Ripped shirt",
                "itemImage":"./assets/images/shirt/casual.jpg",
                "itemPrice":"11.99",
                "itemDesc":"it is a denium ripped shirt",
                "itemSize":["small","medium","large"],
                "itemColor":["blue","green","white","black","pink"],
                "itemQuantity":['1','2','3','4','5']
            },
            {
                "itemName":"checks shirt",
                "itemImage":"./assets/images/shirt/casual.jpg",
                "itemPrice":"14.99",
                "itemDesc":"it is a gap checked shirt",
                "itemSize":["small","medium","large"],
                "itemColor":["blue","green","white","black","pink"],
                "itemQuantity":['1','2','3','4','5']
            },
            ]

            $scope.allshirt = [shirtItem1,shirtItem2]
             $scope.shirtItem1 = shirtItem1
        })

         app.directive("shopMain",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/shopMain.html"
     // controller:"viewsCtrl"
        
    }
})
app.directive("orders",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/orders.html"
     // controller:"viewsCtrl"
        
    }
})

app.directive("margin",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/margin.html"
     // controller:"viewsCtrl"
        
    }
})
app.directive("jeans",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/jeans.html"
     // controller:"viewsCtrl"
        
    }
})

app.directive("shirts",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/shirts.html"
     // controller:"viewsCtrl"
        
    }
})

app.directive("shirtCol1",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/shirtCol1.html"
     // controller:"viewsCtrl"
        
    }
})
app.directive("shirtCol2",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/shirtCol2.html"
     // controller:"viewsCtrl"
        
    }
})

app.directive("shopContactUs",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/contact.html"
     // controller:"viewsCtrl"
        
    }
})

app.directive("newsLetter",function(){

      return {

         restrict:"ACE",
       templateUrl:"views/newsLetter.html"
     // controller:"viewsCtrl"
        
    }
})