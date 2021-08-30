(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),i=c.n(a),s=(c(9),c(2)),r=(c(10),c(0)),o=function(e){var t=e.eightDayWeather,c=e.incrementedDate,n=e.incrementedDay,a=e.tempSymbol,i=new Date;i.setDate(i.getDate()+c);var s=i.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"future-forecast__single-day",children:[Object(r.jsxs)("div",{className:"future-forecast__section",children:[Object(r.jsx)("div",{children:s}),Object(r.jsx)("div",{style:{textTransform:"capitalize"},children:t.daily[n].weather[0].description})]}),Object(r.jsxs)("div",{className:"future-forecast__2ndsection",children:[Object(r.jsxs)("div",{children:[Math.round(t.daily[n].temp.day),a]}),Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.daily[n].weather[0].icon,"@2x.png"),alt:"weather_icon"})]})]})})},l=function(e){var t=e.fourCities,c=e.number,n=e.tempSymbol;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"location-box",children:[Object(r.jsxs)("div",{className:"location-box__section",children:[Object(r.jsxs)("div",{className:"location-box__location",children:[t.list[c].name,", ",t.list[c].sys.country]}),Object(r.jsxs)("div",{className:"location-box__temp",children:[Math.round(t.list[c].main.temp),n]}),Object(r.jsx)("div",{className:"location-box__city-name",children:t.list[c].weather[0].description})]}),Object(r.jsx)("img",{className:"weather_icon",src:"https://openweathermap.org/img/wn/".concat(t.list[c].weather[0].icon,"@2x.png"),alt:"weather_icon"})]})})},d=function(e){var t=e.fourCities,c=e.number,n=e.tempSymbol;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"location-box",children:[Object(r.jsx)("img",{className:"weather_icon",src:"https://openweathermap.org/img/wn/".concat(t.list[c].weather[0].icon,"@2x.png"),alt:"weather_icon"}),Object(r.jsxs)("div",{className:"location-box__section",children:[Object(r.jsxs)("div",{className:"location-box__location reversed",children:[t.list[c].name,", ",t.list[c].sys.country]}),Object(r.jsxs)("div",{className:"location-box__temp reversed",children:[Math.round(t.list[c].main.temp),n]}),Object(r.jsx)("div",{className:"location-box__city-name reversed",children:t.list[c].weather[0].description})]})]})})},j=function(e){var t=e.weather,c=e.slicedDate,n=e.tempSymbol;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"location-box__big",children:[Object(r.jsx)("img",{className:"weather_icon__big",src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"weather_icon"}),Object(r.jsxs)("div",{className:"location-box__location__big ",children:[t.name,", ",t.sys.country]}),Object(r.jsx)("div",{className:"location-box__date__big",children:c})]}),Object(r.jsxs)("div",{className:"info-box",children:[Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Weather"}),Object(r.jsx)("div",{className:"info-box__name",children:t.weather[0].description})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Temperature"}),Object(r.jsxs)("div",{children:[Math.round(t.main.temp),n]})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Pressure"}),Object(r.jsxs)("div",{children:[t.main.pressure,"hPa"]})]}),Object(r.jsxs)("div",{className:"splitter",children:[Object(r.jsx)("div",{children:"Cloudiness"}),Object(r.jsxs)("div",{children:[t.clouds.all,"%"]})]}),Object(r.jsxs)("div",{className:"splitter last",children:[Object(r.jsx)("div",{children:"Wind speed"}),Object(r.jsxs)("div",{children:[t.wind.speed,"km/h"]})]})]})]})};var m=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)("metric"),m=Object(s.a)(i,2),h=m[0],b=m[1],u=Object(n.useState)("\xb0C"),x=Object(s.a)(u,2),p=x[0],O=x[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),y=v[0],_=v[1],g=Object(n.useState)(""),w=Object(s.a)(g,2),N=w[0],D=w[1],S=Object(n.useState)(""),C=Object(s.a)(S,2),F=C[0],W=C[1],k="3f6a2c018fef788f6169811808fd60d3",M="api.openweathermap.org/data/2.5/";Object(n.useEffect)((function(){fetch("https://".concat(M,"group?id=2643743,2950159,2988507,3117735&units=").concat(h,"&appid=").concat(k)).then((function(e){return e.json()})).then((function(e){W(e)}))}),[]);var E=String(new window.Date).slice(3,21);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)("div",{className:"search-box",children:Object(r.jsxs)("div",{className:"search-box-container",children:[Object(r.jsx)("input",{className:"search-box__search-bar",type:"text",placeholder:"Find a city...",onChange:function(e){return a(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("https://".concat(M,"weather?q=").concat(c,"&units=").concat(h,"&appid=").concat(k)).then((function(e){return e.json()})).then((function(e){return a(""),_(e),fetch("https://".concat(M,"onecall?lat=").concat(e.coord.lat,"7&lon=").concat(e.coord.lon,"&exclude=minutely,hourly&units=").concat(h,"&appid=3f6a2c018fef788f6169811808fd60d3"))})).then((function(e){return e.json()})).then((function(e){D(e)}))}}),Object(r.jsx)("button",{onClick:function(){b("imperial"),O("\xb0F"),fetch("https://".concat(M,"group?id=2643743,2950159,2988507,3117735&units=imperial&appid=").concat(k)).then((function(e){return e.json()})).then((function(e){W(e)}))},className:"unit-button ",children:"\xb0F"}),Object(r.jsx)("button",{onClick:function(){b("metric"),O("\xb0C"),fetch("https://".concat(M,"group?id=2643743,2950159,2988507,3117735&units=metric&appid=").concat(k)).then((function(e){return e.json()})).then((function(e){W(e)}))},className:"unit-button unit-button-active",children:"\xb0C"})]})}),Object(r.jsx)("div",{className:"container",children:"undefined"!==typeof y.main?Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(j,{weather:y,slicedDate:E,tempSymbol:p}),"undefined"!==typeof N.current?Object(r.jsxs)("div",{className:"future-forecast shadow",children:[Object(r.jsxs)("p",{className:"future-forecast__header",style:{fontSize:"30px",textAlign:"center"},children:["7 Day Forecast for ",y.name," "]}),Object(r.jsx)(o,{eightDayWeather:N,incrementedDate:1,incrementedDay:1,tempSymbol:p}),Object(r.jsx)(o,{eightDayWeather:N,incrementedDate:2,incrementedDay:2,tempSymbol:p}),Object(r.jsx)(o,{eightDayWeather:N,incrementedDate:3,incrementedDay:3,tempSymbol:p}),Object(r.jsx)(o,{eightDayWeather:N,incrementedDate:4,incrementedDay:4,tempSymbol:p}),Object(r.jsx)(o,{eightDayWeather:N,incrementedDate:5,incrementedDay:5,tempSymbol:p})]}):""]}):"undefined"!==typeof F.list?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{fourCities:F,number:0,tempSymbol:p}),Object(r.jsx)(d,{fourCities:F,number:1,tempSymbol:p}),Object(r.jsx)(l,{fourCities:F,number:2,tempSymbol:p}),Object(r.jsx)(d,{fourCities:F,number:3,tempSymbol:p})]}):""})]})})};i.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.39867733.chunk.js.map