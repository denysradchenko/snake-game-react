(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(23)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),l=(t(16),t(1)),i=t(2),u=t(4),s=t(3),m=t(5),v=t(9),d=t(6),p=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getNewApple",value:function(e,n,t){var a=null,r=function(e){return Math.floor(Math.random()*e)},o=r(e),c=r(n);return a=[o,c],t.some(function(e){return e.column===o&&e.row===c})&&(a=this.getNewApple(e,n,t)),a}},{key:"getActualBoard",value:function(e,n,t,a,r){if("ArrowUp"===r&&0===a[0].row)return"gameover";if("ArrowDown"===r&&a[0].row===n-1)return"gameover";if("ArrowLeft"===r&&0===a[0].column)return"gameover";if("ArrowRight"===r&&a[0].column===e-1)return"gameover";var o=Object(d.a)(a),c=Object(v.a)({},o[0]),l=t;o[0].head=!1,"ArrowUp"===r&&(c.row-=1),"ArrowDown"===r&&(c.row+=1),"ArrowLeft"===r&&(c.column-=1),"ArrowRight"===r&&(c.column+=1);var i=Object(d.a)(o.slice(0,-1));return c.column===t[0]&&c.row===t[1]&&(i.push(o.slice(-1)[0]),l=this.getNewApple(e,n,[c].concat(Object(d.a)(i)))),{colSize:e,rowSize:n,apple:l,snake:[c].concat(Object(d.a)(i))}}},{key:"getInitGame",value:function(){return{colSize:arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,rowSize:arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,apple:[9,7],snake:[{column:4,row:7,head:!0},{column:3,row:7},{column:2,row:7}]}}}]),e}(),w=(t(17),function(e){var n=e.value,t="Field";return"apple"===n?t+=" field-apple":"snake"===n?t+=" field-snake":"snakehead"===n&&(t+=" field-snakehead"),r.a.createElement("div",{className:t})}),f=(t(18),function(e){for(var n=e.colSize,t=e.rowSize,a=e.snake,o=e.apple,c=[],l=function(e){c[e]=[];for(var n=function(n){var t="".concat(e+n);e===o[0]&&n===o[1]?c[e][n]=r.a.createElement(w,{value:"apple",key:t}):a.some(function(t){return t.column===e&&t.row===n})?a.find(function(t){return t.column===e&&t.row===n}).head?c[e][n]=r.a.createElement(w,{value:"snakehead",key:t}):c[e][n]=r.a.createElement(w,{value:"snake",key:t}):c[e][n]=r.a.createElement(w,{value:"empty",key:t})},l=0;l<t;l++)n(l)},i=0;i<n;i++)l(i);var u=c.map(function(e,n){var t="col".concat(n+1);return r.a.createElement("div",{className:"column",key:t},e)});return r.a.createElement("div",{className:"GameBoard"},u)}),h=(t(19),t(20),function(e){var n=e.newGame;return r.a.createElement("div",{className:"GameOver"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("h4",null,"Game Over"),r.a.createElement("button",{onClick:n,className:"btn btn-success"},"Restart")))}),k=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).interval=null,t.SnakeService=new p,t.state=t.SnakeService.getInitGame(),t.refreshApple=function(){var e=t.state,n=e.colSize,a=e.rowSize,r=e.snake,o=t.SnakeService.getNewApple(n,a,r);t.setState({apple:o})},t.snakeMovement=function(){console.log("Moves");var e=t.state,n=e.colSize,a=e.rowSize,r=e.snake,o=e.apple,c=t.SnakeService.getActualBoard(n,a,o,r,t.props.direction);if("gameover"===c)return clearInterval(t.interval),void t.setState({gameOver:!0});t.setState(c)},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("component <Game /> did Mount"),document.addEventListener("keydown",this.props.handleKeyDown),this.interval=setInterval(this.snakeMovement,150)}},{key:"componentWillUnmount",value:function(){console.log("component <Game /> did Unmount"),clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,n=e.colSize,t=e.rowSize,a=e.snake,o=e.apple,c=e.gameOver;return r.a.createElement("div",{className:"Game"},r.a.createElement(f,{colSize:n,rowSize:t,snake:a,apple:o}),c?r.a.createElement(h,{newGame:this.props.newGame}):null)}}]),n}(a.Component),y=(t(21),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).SnakeService=new p,t.state=t.SnakeService.getInitGame(),t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.props.handleKeyDown),console.log("component <GameFreeze /> did Mount")}},{key:"componentWillUnmount",value:function(){console.log("component <GameFreeze /> did Unmount")}},{key:"render",value:function(){var e=this.state,n=e.colSize,t=e.rowSize,a=e.snake,o=e.apple;return r.a.createElement("div",{className:"GameFreeze"},r.a.createElement(f,{colSize:n,rowSize:t,snake:a,apple:o}))}}]),n}(a.Component)),S=(t(22),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={direction:null},t.handleKeyDown=function(e){27!==e.keyCode?e.keyCode<37||e.keyCode>40||(e.preventDefault(),t.setState(function(n){if(("ArrowUp"!==n.direction||"ArrowDown"!==e.key)&&("ArrowDown"!==n.direction||"ArrowUp"!==e.key)&&("ArrowLeft"!==n.direction||"ArrowRight"!==e.key)&&("ArrowRight"!==n.direction||"ArrowLeft"!==e.key))return{direction:e.key}})):t.setState({direction:null})},t.newGame=function(){t.setState({direction:null})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state.direction;return r.a.createElement(r.a.Fragment,null,null!==e?r.a.createElement(k,{direction:e,handleKeyDown:this.handleKeyDown,newGame:this.newGame}):r.a.createElement(y,{handleKeyDown:this.handleKeyDown}))}}]),n}(a.Component));c.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.aa2da3c0.chunk.js.map