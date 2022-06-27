import SMERouter from "sme-router";

//引入视图,如果引入的是html，则得到是字符串,直接供路由的render方法使用
//如果引入的是ejs,则得到一个函数,调用函数就能得到内部的html字符串,调用时候还可以传参作为ejs的变量
import loginView from '$v/login'
import advView from '$v/adv'

//实例化路由器对象,并且传入一级路由的作用区域(是一个id)
//默认是hash路由模式 访问如下:http://XX.xX.XX.xx:XXXX/#/login
//如果要配置history路由模式,可以添加第二个参数"html5" 此外还需要服务端的配合
const router = new SMERouter("app", "html5")

//配置路由
router.route("/login", (req, res) => {
  /* 
    req:请求对象,主要包含了请求的路径地址和其他传参的参数
    res:响应对象,只要包含了响应的方法 比如render方法,响应一个渲染
  */
  res.render(loginView({
    name: "laoliu"
  }))
})

router.route("/adv", (req, res) => {
  res.render(advView({
    person: ["张三", "李四", "李博"]
  }))
})