(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),a=c.n(s),i=(c(9),c(2)),r=(c(10),c(0)),o=function(e){var t=e.eightDayWeather,c=e.incrementedDate,n=e.incrementedDay,s=e.tempSymbol,a=e.conversion,i=e.add,o=new Date;o.setDate(o.getDate()+c);var d=o.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).slice(0,3);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"future-forecast-daily__single-day",children:[Object(r.jsxs)("div",{className:"future-forecast-daily__section",children:[Object(r.jsx)("div",{children:d}),Object(r.jsx)("div",{style:{textTransform:"capitalize"},children:t.daily[n].weather[0].description})]}),Object(r.jsxs)("div",{className:"future-forecast-daily__2ndsection",children:[Object(r.jsxs)("div",{children:[parseInt(Math.round(t.daily[n].temp.day))*a+i,s]}),Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[n].weather[0].icon,"@2x.png"),alt:"weather_icon",className:"weather_icon"})]})]})})},d=function(e){var t=e.fourCities,c=e.number,n=e.tempSymbol,s=e.conversion,a=e.add;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"location-box",children:[Object(r.jsxs)("div",{className:"location-box__section",children:[Object(r.jsxs)("div",{className:"location-box__location",children:[t.list[c].name,", ",t.list[c].sys.country]}),Object(r.jsxs)("div",{className:"location-box__temp",children:[parseInt(Math.round(t.list[c].main.temp))*s+a,n]}),Object(r.jsx)("div",{className:"location-box__city-name",children:t.list[c].weather[0].description})]}),Object(r.jsx)("img",{className:"weather_icon",src:"https://openweathermap.org/img/wn/".concat(t.list[c].weather[0].icon,"@2x.png"),alt:"weather_icon"})]})})},l=function(e){var t=e.fourCities,c=e.number,n=e.tempSymbol,s=e.conversion,a=e.add;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"location-box",children:[Object(r.jsx)("img",{className:"weather_icon",src:"https://openweathermap.org/img/wn/".concat(t.list[c].weather[0].icon,"@2x.png"),alt:"weather_icon"}),Object(r.jsxs)("div",{className:"location-box__section",children:[Object(r.jsxs)("div",{className:"location-box__location reversed",children:[t.list[c].name,", ",t.list[c].sys.country]}),Object(r.jsxs)("div",{className:"location-box__temp reversed",children:[parseInt(Math.round(t.list[c].main.temp))*s+a,n]}),Object(r.jsx)("div",{className:"location-box__city-name reversed",children:t.list[c].weather[0].description})]})]})})},j=function(e){var t=e.weather,c=e.tempSymbol,n=e.conversion,s=e.add,a=String(new window.Date).slice(3,21);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"location-box__big",children:[Object(r.jsx)("img",{className:"weather_icon__big",src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"weather_icon"}),Object(r.jsxs)("div",{className:"location-box__location__big ",children:[t.name,", ",t.sys.country]}),Object(r.jsx)("div",{className:"location-box__date__big",children:a})]}),Object(r.jsxs)("div",{className:"info-box",children:[Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Weather"}),Object(r.jsx)("div",{className:"info-box__name",children:t.weather[0].description})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Temperature"}),Object(r.jsxs)("div",{children:[parseInt(Math.round(t.main.temp))*n+s,c]})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Pressure"}),Object(r.jsxs)("div",{children:[t.main.pressure,"hPa"]})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Cloudiness"}),Object(r.jsxs)("div",{children:[t.clouds.all,"%"]})]}),Object(r.jsxs)("div",{className:"splitter last",children:[Object(r.jsx)("div",{children:"Wind speed"}),Object(r.jsxs)("div",{children:[t.wind.speed,"km/h"]})]})]})]})},h=function(e){var t=e.eightDayWeather,c=e.incrementedDay,n=e.tempSymbol,s=e.conversion,a=e.add,i=t.hourly[c].dt,o=new Date(1e3*i).toLocaleString().slice(10,16);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"future-forecast-daily__single-day",children:[Object(r.jsxs)("div",{className:"future-forecast-daily__section",children:[Object(r.jsx)("div",{children:o}),Object(r.jsx)("div",{style:{textTransform:"capitalize"},children:t.hourly[c].weather[0].description})]}),Object(r.jsxs)("div",{className:"future-forecast-daily__2ndsection",children:[Object(r.jsxs)("div",{children:[parseInt(Math.round(t.hourly[c].temp))*s+a,n]}),Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.hourly[c].weather[0].icon,"@2x.png"),alt:"weather_icon",className:"weather_icon"})]})]})})};var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1),b=Object(i.a)(a,2),u=b[0],m=b[1],x=Object(n.useState)(0),p=Object(i.a)(x,2),f=p[0],O=p[1],v=Object(n.useState)("\xb0C"),y=Object(i.a)(v,2),_=y[0],w=y[1],g=Object(n.useState)(""),N=Object(i.a)(g,2),S=N[0],C=N[1],D=Object(n.useState)(""),k=Object(i.a)(D,2),F=k[0],I=k[1],M=Object(n.useState)(""),W=Object(i.a)(M,2),P=W[0],T=W[1],E=Object(n.useState)(""),L=Object(i.a)(E,2),q=L[0],z=L[1],B="3f6a2c018fef788f6169811808fd60d3",J="api.openweathermap.org/data/2.5/";Object(n.useEffect)((function(){fetch("https://".concat(J,"group?id=2643743,2950159,2988507,3117735&units=metric&appid=").concat(B)).then((function(e){return e.json()})).then((function(e){T(e)}))}),[]);for(var A=function(e){fetch("https://".concat(J,"weather?q=").concat(e,"&units=metric&appid=").concat(B)).then((function(e){return e.json()})).then((function(e){return s(""),C(e),fetch("https://".concat(J,"onecall?lat=").concat(e.coord.lat,"7&lon=").concat(e.coord.lon,"&exclude=minutely&units=metric&appid=3f6a2c018fef788f6169811808fd60d3"))})).then((function(e){return e.json()})).then((function(e){I(e)}))},H=[],K=1;K<8;K++)H.push(Object(r.jsx)(o,{eightDayWeather:F,incrementedDate:K,incrementedDay:K,tempSymbol:_,conversion:u,add:f}));for(var U=[],G=1;G<13;G++)U.push(Object(r.jsx)(h,{eightDayWeather:F,incrementedDay:G,tempSymbol:_,conversion:u,add:f}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)("div",{className:"search-box",children:Object(r.jsxs)("div",{className:"search-box-container",children:[Object(r.jsx)("button",{className:"unit-button icon",style:{margin:"0 5px 0 0"},onClick:function(){C("")},children:Object(r.jsx)("span",{children:"\u279d"})}),Object(r.jsx)("input",{className:"search-box__search-bar",type:"text",placeholder:"Find a city...",onChange:function(e){return s(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("https://".concat(J,"weather?q=").concat(c,"&units=metric&appid=").concat(B)).then((function(e){return e.json()})).then((function(e){return s(""),C(e),fetch("https://".concat(J,"onecall?lat=").concat(e.coord.lat,"7&lon=").concat(e.coord.lon,"&exclude=minutely&units=metric&appid=3f6a2c018fef788f6169811808fd60d3"))})).then((function(e){return e.json()})).then((function(e){I(e)}))}}),Object(r.jsx)("button",{onClick:function(){m(2),O(32),w("\xb0F"),z("false")},className:"unit-button ".concat(q?"unit-button-active":""),children:"\xb0F"}),Object(r.jsx)("button",{onClick:function(){m(1),O(0),w("\xb0C"),z("")},className:"unit-button ".concat(q?"":"unit-button-active"),children:"\xb0C"})]})}),Object(r.jsx)("div",{className:"container",children:"undefined"!==typeof S.main?Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(j,{weather:S,tempSymbol:_,conversion:u,add:f}),"undefined"!==typeof F.current?Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"future-forecast-daily shadow",children:[Object(r.jsx)("p",{className:"future-forecast-daily__header",children:"12 Hour Forecast"}),Object(r.jsx)("div",{className:"future-forecast-daily__wrapper",children:U})]}),Object(r.jsxs)("div",{className:"future-forecast-daily shadow",children:[Object(r.jsxs)("p",{className:"future-forecast-daily__header",children:["7 Day Forecast for ",S.name," "]}),Object(r.jsx)("div",{className:"future-forecast-daily__wrapper",children:H})]})]}):Object(r.jsxs)("div",{className:"future-forecast",style:{textAlign:"center"},children:["There's no daily forecast for ",S.name,". "]})]}):"undefined"!==typeof P.list?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{onClick:function(){return A("London")},style:{width:"100%"},children:Object(r.jsx)(d,{fourCities:P,number:0,tempSymbol:_,conversion:u,add:f})}),Object(r.jsx)("div",{onClick:function(){return A("Berlin")},style:{width:"100%"},children:Object(r.jsx)(l,{fourCities:P,number:1,tempSymbol:_,conversion:u,add:f})}),Object(r.jsx)("div",{onClick:function(){return A("Paris")},style:{width:"100%"},children:Object(r.jsx)(d,{fourCities:P,number:2,tempSymbol:_,conversion:u,add:f})}),Object(r.jsx)("div",{onClick:function(){return A("Madrid")},style:{width:"100%"},children:Object(r.jsx)(l,{fourCities:P,number:3,tempSymbol:_,conversion:u,add:f})})]}):""})]})})};a.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f41f40b1.chunk.js.map