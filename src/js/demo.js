var msgConfig = {
	color:"red",
	timeOut:2000,
	fontSize:"16px"
};
function Message(obj){
	this.color = obj.color || "#fff";
	this.timeOut = obj.timeOut || 2000;
	this.fontSize = obj.fontSize || "18px";
	this.init();
}
Message.prototype = {
	create:function(){
		//创建DOM，并设置样式
		this.div = document.createElement('div');
		this.p = document.createElement('p');
		this.div.appendChild(this.p);
		window.document.body.appendChild(this.div);
		this.div.style.cssText = `position: fixed;
	    width: 60%;
	    margin-left: -30%;
	    left: 50%;
	    top: 50%;
	    padding: .4rem .2rem;
	    line-height: .4rem;
	    border:1px solid #737373;
	    background-color: rgba(200,200,200,.8);
	    text-align: center;
	    border-radius: .05rem;
	    font-size:${this.fontSize};
	    color: ${this.color};
	    display: none;`
	},
	show:function(msg){
		var that = this;
		this.div.style.display = "block";
		this.p.innerHTML = msg;
		var t = setTimeout(function(){
			// window.body.removeChild(that.div);
			that.div.style.display = "none";
		},this.timeOut)
	},
	init:function(){
		this.create();
	}
}
//初始化
var message = new Message(msgConfig);