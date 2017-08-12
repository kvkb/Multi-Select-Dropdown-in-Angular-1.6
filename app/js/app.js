var app = angular.module("MSA",[]);

var SelectedCities = [];

$(document).on("click",".msd-trigger",function(){
    $('.msd-list').addClass("hidden");
    $(this).next('.msd-list').removeClass("hidden");
});

//--------- HIDE DROPDOWN IF THE CLICKED TARGET ELEMENT IS NOT PART OF MULTI-SELECT-DROPDOWN
$(document).on("click",function(event) {

    var NodeList = ["form-control","msd","multi-select-dropdown","msd-li","msd-ul","msd-filter"];

    if(event.target.nodeName != "HTML"){
        if(event.target.hasAttribute("class")){
            var NodeClassName = event.target.getAttribute("class").split(' ');
            var NodeIndex = NodeList.indexOf(NodeClassName[0]);
        }
        if(event.target.parentNode.hasAttribute("class")){
            var ParentNodeClassName = event.target.parentNode.getAttribute("class").split(' ');
            var ParentNodeIndex = NodeList.indexOf(ParentNodeClassName[0]);
        }
    }else{
        $(".msd-list").addClass("hidden");
    }

    if(ParentNodeIndex == -1 && NodeIndex == -1){
        $(".msd-list").addClass("hidden");
    }
});

app.run(function ($rootScope,$location) {

    //------- MULTISELECT DROPDOWN ---------------

    //------ NG-CHANGE IN THE LIST ITEM modelBOX
    $rootScope.SelectOption = function(arr){
        if(arr.model == true){
            // alert(123);
            // console.log("SelectOption() returning - ");
            console.log(arr);

            return arr;
        }
    };

    //------ NG-CHANGE IN APPENDED ELEMENTS modelBOX
    $rootScope.ChildSelectOption = function(arr){
        //console.log("ChildSelectOption returning - ");
        //console.log(arr);
        if(arr.model == true){
            //console.log(arr.name);
            // SelectedCities.push(arr.malls);
            // console.log(SelectedCities);
            return arr;
        }
    };

    //-------- TO SELECT ALL THE OPTIONS

    $rootScope.SelectAllOptions = function(arr){
        console.log(arr);
        angular.forEach(arr,function(val,key){
            val.model = true;
            //console.log();
        });
        $(".msd-list").addClass("hidden");
        //SelectedCities.push(arr.malls);
        return arr;
    };

    //--------- TO UNSELECT ALL THE OPTIONS

    $rootScope.UnSelectAllOptions = function(arr){
        angular.forEach(arr,function(val,key){
            val.model = false;
        });
    };

    //------- TO DELETE APPENDED ROW

    $rootScope.DeleteRow = function(item){
        item.model=false;
        $("#section-"+item.text).remove();
    };

});


app.controller("MainController",function($scope){

    $scope.RegionList = [
        {
            text:"MSD-ITEM-1",
            id:1,
            name:"arg",
            model:false,
            list:{
                cities:[
                    {
                        text:"Item - A",
                        id:11,
                        name:"itema",
                        model:true,
                        malls:[
                            {
                                text:"Item - B",
                                id:89,
                                name:"ItemB",
                                model:true,
                                stores:[
                                    {
                                        text:"Item - C",
                                        id:3445,
                                        name:"ItemC",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - D",
                                                id:6667,
                                                name:"Item - D",
                                                model:false,
                                            },
                                            {
                                                text:"Item - E",
                                                id:89777,
                                                name:"ItemE",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - F",
                                        id:665544,
                                        name:"ItemF",
                                        model:true,
                                        brands:[
                                            {
                                                text:"Item - G",
                                                id:6666,
                                                name:"ItemG",
                                                model:false,
                                            },
                                            {
                                                text:"Item - H",
                                                id:41,
                                                name:"ItemH",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            },
                            {
                                text:"Item - I",
                                id:54,
                                name:"ItemI",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - J",
                                        id:34,
                                        name:"ItemJ",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - K",
                                                id:78,
                                                name:"ItemK",
                                                model:false,
                                            },
                                            {
                                                text:"Item - L",
                                                id:41,
                                                name:"ItemL",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - M",
                                        id:678,
                                        name:"ItemM",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - N",
                                                id:78,
                                                name:"ItemN",
                                                model:false,
                                            },
                                            {
                                                text:"Item - O",
                                                id:41,
                                                name:"ItemO",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        text:"Item - P",
                        id:12,
                        name:"ItemP",
                        model:false,
                        malls:[
                            {
                                text:"Item - Q",
                                id:89,
                                name:"ItemQ",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - R",
                                        id:34,
                                        name:"ItemR",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - S",
                                                id:78,
                                                name:"ItemS",
                                                model:false,
                                            },
                                            {
                                                text:"Item - T",
                                                id:41,
                                                name:"ItemT",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - U",
                                        id:678,
                                        name:"ItemU",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - V",
                                                id:78,
                                                name:"ItemV",
                                                model:false,
                                            },
                                            {
                                                text:"Item - W",
                                                id:41,
                                                name:"ItemW",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            },
                            {
                                text:"Item - X",
                                id:54,
                                name:"ItemX",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - Y",
                                        id:34,
                                        name:"ItemY",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - Z",
                                                id:78,
                                                name:"ItemZ",
                                                model:false,
                                            },
                                            {
                                                text:"Item - A1",
                                                id:41,
                                                name:"ItemA1",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - B1",
                                        id:678,
                                        name:"ItemB1",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - C1",
                                                id:78,
                                                name:"ItemC1",
                                                model:false,
                                            },
                                            {
                                                text:"Item - D1",
                                                id:41,
                                                name:"ItemD1",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            }
                        ],
                    }

                ]

            }
        },
        {
            text:"Fizi",text:"MSD-ITEM-2",
            id:1,
            name:"fiz",
            model:false,
            list:{
                cities:[
                    {
                        text:"Item - A2",
                        id:112,
                        name:"itema2",
                        model:true,
                        malls:[
                            {
                                text:"Item - B2",
                                id:892,
                                name:"ItemB2",
                                model:true,
                                stores:[
                                    {
                                        text:"Item - C2",
                                        id:34425,
                                        name:"ItemC2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - D2",
                                                id:66672,
                                                name:"Item - D2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - E2",
                                                id:897727,
                                                name:"ItemE2",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - F2",
                                        id:6655424,
                                        name:"ItemF2",
                                        model:true,
                                        brands:[
                                            {
                                                text:"Item - G2",
                                                id:66662,
                                                name:"ItemG2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - H2",
                                                id:412,
                                                name:"ItemH2",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            },
                            {
                                text:"Item - I2",
                                id:524,
                                name:"ItemI2",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - J2",
                                        id:342,
                                        name:"ItemJ2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - K2",
                                                id:782,
                                                name:"ItemK2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - L2",
                                                id:412,
                                                name:"ItemL2",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - M2",
                                        id:6782,
                                        name:"ItemM2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - N2",
                                                id:728,
                                                name:"ItemN2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - O2",
                                                id:4221,
                                                name:"ItemO2",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        text:"Item - P2",
                        id:122,
                        name:"ItemP2",
                        model:false,
                        malls:[
                            {
                                text:"Item - Q2",
                                id:8922,
                                name:"ItemQ2",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - R2",
                                        id:3422,
                                        name:"ItemR2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - S2",
                                                id:78222,
                                                name:"ItemS2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - T2",
                                                id:4122,
                                                name:"ItemT2",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - U2",
                                        id:678222,
                                        name:"ItemU2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - V2",
                                                id:78222,
                                                name:"ItemV2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - W2",
                                                id:42221,
                                                name:"ItemW2",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            },
                            {
                                text:"Item - X2",
                                id:54222,
                                name:"ItemX2",
                                model:false,
                                stores:[
                                    {
                                        text:"Item - Y2",
                                        id:34222,
                                        name:"ItemY2",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - Z2",
                                                id:72228,
                                                name:"ItemZ2",
                                                model:false,
                                            },
                                            {
                                                text:"Item - A12",
                                                id:4122,
                                                name:"ItemA122",
                                                model:false,
                                            }
                                        ],
                                    },
                                    {
                                        text:"Item - B122",
                                        id:678222,
                                        name:"ItemB12",
                                        model:false,
                                        brands:[
                                            {
                                                text:"Item - C12",
                                                id:78233,
                                                name:"ItemC12",
                                                model:false,
                                            },
                                            {
                                                text:"Item - D12",
                                                id:4122,
                                                name:"ItemD12",
                                                model:false,
                                            }
                                        ],
                                    }
                                ]
                            }
                        ],
                    }

                ]

            }
        }
    ];



});
