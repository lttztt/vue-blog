(function(e){function t(t){for(var n,o,a=t[0],l=t[1],c=t[2],f=0,d=[];f<a.length;f++)o=a[f],s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0e3b":function(e,t,r){},"150b":function(e,t,r){},"1d51":function(e,t,r){},"21bb":function(e,t,r){"use strict";var n=r("bcc9"),s=r.n(n);s.a},"2d59":function(e,t,r){},"444e":function(e,t,r){"use strict";var n=r("bc5a"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("i-header")],1),r("main",[r("router-view")],1),e._m(0),r("vue-progress-bar")],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v("\n    ©"),r("span",[e._v("design by lttztt")])])}],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"container"},[r("el-menu",{staticClass:"el-menu-header",attrs:{"default-active":e.active,router:!0,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[r("el-menu-item",{attrs:{index:"/"}},[r("i",{staticClass:"el-icon-s-home"}),r("span",[e._v("主页")])]),r("el-menu-item",{attrs:{index:"/article"}},[r("i",{staticClass:"el-icon-tickets"}),r("span",[e._v("列表")])]),e.user?[r("el-menu-item",{staticClass:"right",attrs:{index:"#"},on:{click:e.handleExit}},[r("span",[e._v("注销")])]),r("el-submenu",{staticClass:"right",attrs:{index:"5"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-monitor"}),r("span",[e._v(e._s(e.user.getUsername()))])]),r("el-menu-item",{staticClass:"myHome"},[r("router-link",{attrs:{to:{name:"User",params:{id:e.user.id}}}},[e._v("我的主页")])],1),r("el-menu-item",{attrs:{index:"/friend"}},[e._v("我的朋友圈")]),r("el-menu-item",{attrs:{index:"/article/create"}},[e._v("发布文章")]),r("el-menu-item",{attrs:{index:"/followee"}},[e._v("我的关注")]),r("el-menu-item",{attrs:{index:"/follower"}},[e._v("我的粉丝")]),r("el-menu-item",{attrs:{index:"/message"}},[e._v("消息")])],2)]:[r("el-menu-item",{staticClass:"right",attrs:{index:"/signUp"}},[r("span",[e._v("注册")])]),r("el-menu-item",{staticClass:"right",attrs:{index:"/signIn"}},[r("span",[e._v("登录")])])]],2)],1)])},a=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={name:"i-header",data:function(){return{active:"/"}},computed:Object(c["d"])(["user"]),created:function(){var e=this;this.active=this.$route.path,this.$router.afterEach(function(t,r){e.active=t.path,console.log("========================"),console.log(e.active)})},methods:f({handleSelect:function(e,t){}},Object(c["b"])(["exit"]),{handleExit:function(){this.$router.push("/"),this.exit(),this.$api.SDK.User.logOut(),this.$message.success("成功退出"),this.active="/"}}),mounted:function(){}},m=d,p=(r("db93"),r("2877")),g=Object(p["a"])(m,o,a,!1,null,"4d331deb",null),h=g.exports,v={name:"app",components:{"i-header":h},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach(function(t,r,n){if(void 0!==t.meta.progress){var s=t.meta.progress;e.$Progress.parseMeta(s)}e.$Progress.start(),n()})},mounted:function(){this.$Progress.finish()}},b=v,_=(r("5c0b"),Object(p["a"])(b,s,i,!1,null,null,null)),y=_.exports,w=r("8c4f"),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._m(0),e.one?r("div",{staticClass:"one container clearfix"},[r("img",{staticClass:"one-img",attrs:{src:e.one.img_url,alt:e.one.vol}}),r("p",{staticClass:"word"},[e._v("\n      "+e._s(e.one.word)+"\n      "),r("br"),r("span",{staticClass:"right"},[e._v("--"+e._s(e.one.word_from))])])]):e._e()])},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"banner"},[r("p",{staticClass:"big"},[e._v("let's share")]),r("p",{staticClass:"small"},[e._v("精品博客")])])}],O=r("bc3a"),x=r.n(O),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"test container"},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categories,function(e){return r("el-option",{key:e.get("objectId"),attrs:{"value-key":e.get("objectId"),label:e.get("name"),value:e}})}),1),r("el-button",{on:{click:e.con}},[e._v("按钮")])],1)},k=[],P=(r("7514"),{name:"Test",data:function(){return{categories:[],form:{category:null,title:""}}},created:function(){this.getData(),console.log(this.categories)},mounted:function(){},methods:{JSONparse:function(e){return JSON.parse(JSON.stringify(e))},con:function(){console.log(this.form.category.get("name"))},getData:function(){var e=new this.$api.SDK.Query("Category");e.find().then(function(e){this.categories=e}.bind(this)).catch(function(e){return console.log(e)})}}}),S=P,A=Object(p["a"])(S,j,k,!1,null,"11a218d1",null),D=A.exports;x.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",x.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",x.a.defaults.transformRequest=[function(e){var t="";for(var r in e)t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t}];var E={name:"home",data:function(){return{one:null}},components:{Test:D},created:function(){this.getOne()},mounted:function(){this.$Progress.finish()},methods:{getOne:function(){var e=this;x()({method:"post",url:"https://api.hibai.cn/api/index/index",data:{TransCode:"030111",OpenId:"123456789"}}).then(function(t){var r=t.data,n=r.Body;e.one=n})}}},F=E,U=(r("21bb"),Object(p["a"])(F,C,$,!1,null,null,null)),K=U.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-container",[r("el-header",{staticClass:"page-header"},[e._v("\n      所有文章\n    ")]),r("el-main",{staticClass:"list-main"},e._l(e.articles,function(t){return r("article",{staticClass:"list-item"},[r("router-link",{staticClass:"item-user",attrs:{to:{name:"User",params:{id:t.get("author").id}}}},[r("div",{staticClass:"avatar"}),e._v("\n          "+e._s(t.get("author").get("username"))+"\n        ")]),r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.id}}}},[e._v("\n          "+e._s(t.get("title"))+"\n        ")])],1)}),0)],1)],1)},T=[],q={name:"List",data:function(){return{articles:[]}},created:function(){this.getAllArticles()},computed:Object(c["d"])(["user"]),methods:{getAllArticles:function(){var e=this.query();this.setArticles(e)},query:function(){var e=new this.$api.SDK.Query("Article");return e.include("category"),e.include("author"),e.include("cratedAt"),e},setArticles:function(e){var t=this;e.find().then(function(e){t.articles=e,t.$Progress.finish()}).catch(function(e){console.log(e),t.fail()})},fail:function(e){this.$message.error(e),this.$Progress.fail()}}},I=q,L=(r("e6bf"),Object(p["a"])(I,M,T,!1,null,"13007c54",null)),Q=L.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"page-header"},[e._v("登录")]),r("div",{staticClass:"form-panel"},[r("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,"label-width":"80px",rules:e.rules,model:e.user}},[r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}})],1),r("div",{staticClass:"operator"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("登陆")])],1)],1)],1)])},H=[],R=(r("7f7f"),{name:"SignIn",data:function(){return{labelPosition:"top",user:{name:"",pwd:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符之间",trigger:"blur"}],pwd:[{required:!0,message:"必须填写",trigger:"blur"}]}}},mounted:function(){this.$Progress.finish()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$message.error("错了哦，您填写的信息有错误，请按照提示修改。"),!1;t.$api.SDK.User.logIn(t.user.name,t.user.pwd).then(function(e){t.$store.dispatch("login",e),t.$router.push({path:"/"}),t.$message.success("登陆成功！")}).catch(function(e){console.error(e),t.$message.error(e.message)})})}}}),J=R,z=(r("daa8"),Object(p["a"])(J,V,H,!1,null,"5f57947e",null)),N=z.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"page-header"},[e._v("注册")]),r("div",{staticClass:"form-panel"},[r("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px",rules:e.rules,model:e.user}},[r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"cpwd"}},[r("el-input",{attrs:{type:"password"},model:{value:e.user.cpwd,callback:function(t){e.$set(e.user,"cpwd",t)},expression:"user.cpwd"}})],1),r("div",{staticClass:"operator"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("提交")])],1)],1)],1)])},B=[],X=(r("a481"),{name:"SignUp",mounted:function(){this.$Progress.finish()},data:function(){var e=this,t=function(t,r,n){""===r?n(new Error("请输入密码")):""!==e.user.cpwd&&(e.$refs.form.validateField("cpwd"),n())},r=function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.user.pwd?n(new Error("两次输入密码不一致")):n()};return{labelPosition:"top",user:{name:"",email:"",pwd:"",cpwd:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"长度在3-20个字符之间",trigger:"blur"}],email:[{required:!0,message:"请填入邮箱",trigger:"blur"},{type:"email",message:"必须是合法的邮箱格式"}],pwd:[{required:!0,message:"密码必须填写",trigger:"blur"},{validator:t,trigger:"blur"}],cpwd:[{required:!0,message:"必须填写",trigger:"blur"},{validator:r,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.$message.error("填错了, 安装提示修改."),!1;var r=new t.$api.SDK.User;r.setUsername(t.user.name),r.setPassword(t.user.pwd),r.setEmail(t.user.email),r.signUp().then(function(e){t.$store.commit("setUser",e),t.$router.replace("/"),t.$message.success("注册成功!")}).catch(function(e){console.error(e),t.$message.error(e.message)})})}}}),Y=X,G=(r("c5fc"),Object(p["a"])(Y,W,B,!1,null,"285a59e2",null)),Z=G.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",{staticClass:"title is-3"},[e._v("发布一篇新的文章")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{label:"文章分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择文章分类"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categories,function(t){return r("el-option",{key:t.objectId,attrs:{label:t.get("name"),value:t.get("name")}},[e._v(e._s(t.get("name"))+"\n        ")])}),1)],1),r("el-form-item",{staticClass:"title",attrs:{label:"文章标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("div",{staticClass:"el-form-item is-required item-editor",class:{"is-error":e.validate.error}},[r("label",{staticClass:"el-form-item__label"},[e._v("文章内容")]),r("div",{staticClass:"el-form-item__content"},[r("div",{staticClass:"editor-wrapper"},[r("div",{ref:"editor",class:{"error-border":e.validate.error},attrs:{id:"editor"}},[r("el-input",{attrs:{type:"textarea",resize:"none",rows:20,placeholder:"请输入markdown格式的文章正文"},model:{value:e.editorContent,callback:function(t){e.editorContent=t},expression:"editorContent"}})],1),r("div",{ref:"preview",staticClass:"editor-preview markdown-body",domProps:{innerHTML:e._s(e.getPreview)}})]),e.validate.error?r("div",{staticClass:"el-form-item__error"},[e._v("正文怎能没有内容呢？")]):e._e()])]),r("div",{staticClass:"oprator right"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.submit,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[e._v("发布文章")])],1)],1)],1)},te=[],re=(r("e4cb"),r("0e54")),ne=r.n(re);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var oe={name:"create",data:function(){return{categories:[],editorContent:"",form:{category:"",title:""},rules:{title:[{required:!0,message:"必须填写标题哦!",trigger:"blur"}],category:[{type:"string",required:!0,message:"必须填写分类哦!",trigger:"blur"}]},validate:{error:!1}}},computed:ie({},Object(c["d"])(["user"]),{getPreview:function(){return ne()(this.editorContent)}}),created:function(){this.getCategories()},mounted:function(){},methods:{getCategories:function(){var e=this,t=new this.$api.SDK.Query("Category");t.find().then(function(t){e.$Progress.finish(),e.categories=t}).catch(function(e){return console.error(e)})},validateContent:function(){return""===this.editorContent.trim()?(this.validate.error=!0,!1):(this.validate.error=!1,!0)},createArticle:function(){var e=new this.$api.SDK.Object("Article");return e.set("author",this.user),e.set("title",this.form.title),e.set("content",this.editorContent),e.set("category",this.form.category),e},setACL:function(e){var t=new this.$api.SDK.ACL;t.setPublicReadAccess(!0),t.setWriteAccess(this.user,!0),e.setACL(t)},save:function(e){var t=this;e.save().then(function(e){console.log("====================="),console.log(e);var r="文章《".concat(e.get("title"),"》发布成功"),n=new t.$api.SDK.Status;n.inboxType="friend",n.set("title",e.get("title")),n.set("type","create_article"),n.set("article",e),t.$api.SDK.Status.sendStatusToFollowers(n).then(function(e){console.log("发朋友圈成功")}).catch(function(e){return console.log(e)}),t.$message({message:r,type:"success"}),t.$router.replace({name:"ArticleShow",params:{id:e.id}})}).catch(function(e){return console.log(e)})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(e.validateContent()){if(!t)return e.$message.error("填写错误,请按照提示修改!"),!1;var r=e.createArticle();e.setACL(r),e.save(r)}})}}},ae=oe,le=(r("dde9"),Object(p["a"])(ae,ee,te,!1,null,"6eac2494",null)),ce=le.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.article?[r("h2",[e._v("标题: "+e._s(e.article.get("title")))]),e.uid===e.article.get("author").get("objectId")?r("div",{staticClass:"operator"},[r("router-link",{staticClass:"el-button el-button--info",attrs:{to:{name:"ArticleEdit",params:{id:e.article.id}},tag:"button",round:""}},[e._v("修改")]),r("el-button",{on:{click:e.articleDestroy}},[e._v("删除")])],1):e._e(),r("div",{staticClass:"content markdown-body",domProps:{innerHTML:e._s(e.getContent)}})]:e._e()],2)},fe=[];function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var pe={name:"MyArticle",data:function(){return{article:null}},created:function(){var e=this.$route.params.id;this.getArticle(e)},computed:me({},Object(c["c"])(["uid"]),{getContent:function(){return ne()(this.article.get("content"))}}),methods:{getArticle:function(e){var t=this,r=new this.$api.SDK.Query("Article");r.include("author"),r.include("category"),r.get(e).then(function(e){t.article=e,t.$Progress.finish()}).catch(function(e){return console.log(e)})},articleDestroy:function(){var e=this;this.article.destroy().then(function(){e.$message({type:"success",message:"删除成功"}),e.$router.replace({path:"/article?type=all"})})}}},ge=pe,he=(r("79b2"),Object(p["a"])(ge,ue,fe,!1,null,"49506a36",null)),ve=he.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",{staticClass:"title is-3"},[e._v("编辑文章")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{label:"文章分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择文章分类"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categories,function(t){return r("el-option",{key:t.objectId,attrs:{label:t.get("name"),value:t.get("name")}},[e._v(e._s(t.get("name"))+"\n        ")])}),1)],1),r("el-form-item",{staticClass:"title",attrs:{label:"文章标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("div",{staticClass:"el-form-item is-required item-editor",class:{"is-error":e.validate.error}},[r("label",{staticClass:"el-form-item__label"},[e._v("文章内容")]),r("div",{staticClass:"el-form-item__content"},[r("div",{staticClass:"editor-wrapper"},[r("div",{ref:"editor",class:{"error-border":e.validate.error},attrs:{id:"editor"}},[r("el-input",{attrs:{type:"textarea",resize:"none",rows:20,placeholder:"请输入markdown格式的文章正文"},model:{value:e.editorContent,callback:function(t){e.editorContent=t},expression:"editorContent"}})],1),r("div",{ref:"preview",staticClass:"editor-preview markdown-body",domProps:{innerHTML:e._s(e.getPreview)}})]),e.validate.error?r("div",{staticClass:"el-form-item__error"},[e._v("正文怎能没有内容呢？")]):e._e()])]),r("div",{staticClass:"oprator right"},[r("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.submit,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}}},[e._v("发布文章")])],1)],1)],1)},_e=[];function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(r,!0).forEach(function(t){Object(l["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ce={name:"edit",data:function(){return{article:null,categories:[],editorContent:"",form:{category:"",title:""},rules:{title:[{required:!0,message:"必须填写标题哦!",trigger:"blur"}],category:[{type:"string",required:!0,message:"必须填写分类哦!",trigger:"blur"}]},validate:{error:!1}}},created:function(){this.getCategory(),this.getArticle()},mounted:function(){},computed:we({},Object(c["d"])(["user"]),{getPreview:function(){return ne()(this.editorContent)}}),methods:{getCategory:function(){var e=this,t=new this.$api.SDK.Query("Category");t.find().then(function(t){e.categories=t}).catch(function(e){return console.log(e)})},getArticle:function(){var e=this,t=this.$route.params.id,r=new this.$api.SDK.Query("Article");r.include("category"),r.get(t).then(function(t){e.article=t,e.form.title=t.get("title"),e.form.category=t.get("category"),e.editorContent=t.get("content"),e.$Progress.finish()})},validateContent:function(){return""===this.editorContent.trim()?(this.validate.error=!0,!1):(this.validate.error=!1,!0)},setArticle:function(){var e=this.article;return e.set("author",this.user),e.set("title",this.form.title),e.set("content",this.editorContent),e.set("category",this.form.category),e},save:function(e){var t=this;e.save().then(function(e){var r="文章《".concat(e.get("title"),"》修改成功");t.$message({message:r,type:"success"}),t.$router.replace({name:"ArticleShow",params:{id:e.id}})}).catch(function(e){return console.log(e)})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(e.validateContent()){if(!t)return e.$message.error("填写错误,请按照提示修改!"),!1;var r=e.setArticle();e.save(r)}})}}},$e=Ce,Oe=(r("444e"),Object(p["a"])($e,be,_e,!1,null,"b0d73b86",null)),xe=Oe.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.current_user?r("div",{staticClass:"container"},[r("el-header",{staticClass:"page-header"},[e._v("\n    "+e._s(e.current_user.get("username"))+"\n  ")]),r("hr"),e.user?r("div",{staticClass:"operator"},[e.user.id!==e.current_user.id?r("el-button",{on:{click:e.toggleFollow}},[e._v(e._s(e.followed?"取消关注":"关注")+"该用户")]):e._e(),e.user.id!==e.current_user.id?r("el-button",{on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("发送私信")]):e._e()],1):e._e(),r("ul",e._l(e.articles,function(t){return r("li",[r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.id}}}},[e._v(e._s(t.get("title")))])],1)}),0),r("el-dialog",{attrs:{title:"发送私信给该用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top",rules:e.rules}},[r("el-form-item",{attrs:{label:"私信内容",prop:"msg"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{typeof:"primary"},on:{click:e.sendMsg}},[e._v("确定")])],1)],1)],1):e._e()},ke=[],Pe={name:"user",data:function(){var e=this.$route.params.id;return{current_user:null,articles:null,followed:!1,id:e,dialogFormVisible:!1,form:{msg:""},rules:{msg:[{require:!0,message:"必填项",trigger:"blur"}]}}},computed:Object(c["d"])(["user"]),created:function(){this.getCurrentUser()},methods:{getCurrentUser:function(){var e=this,t=this.id,r=new this.$api.SDK.Query("_User");r.get(t).then(function(t){return e.current_user=t,t}).then(function(t){e.getArticles(t),e.checkFollowed()})},getArticles:function(e){var t=this,r=new this.$api.SDK.Query("Article");r.equalTo("author",e),r.ascending("createAt"),r.find().then(function(e){t.articles=e,t.$Progress.finish()}).catch(function(e){return console.log(e)})},toggleFollow:function(){var e=this,t=this.id;this.followed?this.user.unfollow(t).then(function(){e.followed=!1,e.$message.success("取消关注成功")}).catch(function(e){return console.log(e)}):this.user.follow(t).then(function(){e.followed=!0,e.$message.success("关注成功")}).catch(function(e){return console.log(e)})},checkFollowed:function(){var e=this,t=this.id,r=this.user.flloweeQuery();r.include("followee"),r.find().then(function(r){r.length&&r.some(function(e){return e.id===t})&&(e.followed=!0)}).catch(function(e){return console.log(e)})},sendMsg:function(){var e=this;if(this.form.msg){var t=this.$api.SDK.Status,r=new t(null,this.form.msg);r.set("from",this.user),r.set("to",this.current_user),r.set("ACL",{"*":{read:!0,write:!0}}),t.sendPrivateStatus(r,this.current_user.id).then(function(t){t&&(e.dialogFormVisible=!1,e.$message({message:"发送私信成功！",type:"success"}))},function(t){e.$message.error(t)})}else this.$.error("信息不能为空")}}},Se=Pe,Ae=(r("f0e7"),Object(p["a"])(Se,je,ke,!1,null,"7784d2ff",null)),De=Ae.exports,Ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-header",{staticClass:"page-header"},[e._v("\n    我的关注\n  ")]),e.followees.length?r("ul",e._l(e.followees,function(t){return r("li",[r("router-link",{attrs:{to:{name:"User",params:{id:t.id}}}},[e._v(e._s(t.get("username")))])],1)}),0):r("span",[e._v("你没有关注任何人")])],1)},Fe=[],Ue={name:"myFollowee",data:function(){return{followees:[]}},computed:Object(c["d"])(["user"]),created:function(){this.getFollower()},methods:{getFollower:function(){var e=this,t=this.user.followeeQuery();t.include("followee"),t.find().then(function(t){e.followees=t,e.$Progress.finish()}).catch(function(e){return console.log(e)})}}},Ke=Ue,Me=Object(p["a"])(Ke,Ee,Fe,!1,null,"838c8cd6",null),Te=Me.exports,qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-header",{staticClass:"page-header"},[e._v("\n    我的粉丝\n  ")]),e.followers.length?r("ul",e._l(e.followers,function(t){return r("li",[r("router-link",{attrs:{to:{name:"User",params:{id:t.id}}}},[e._v(e._s(t.get("username")))])],1)}),0):r("span",[e._v("你没有粉丝")])],1)},Ie=[],Le={name:"myFollower",data:function(){return{followers:[]}},computed:Object(c["d"])(["user"]),created:function(){this.getFollower()},methods:{getFollower:function(){var e=this,t=this.user.followerQuery();t.include("follower"),t.find().then(function(t){e.followers=t,e.$Progress.finish()}).catch(function(e){return console.log(e)})}}},Qe=Le,Ve=Object(p["a"])(Qe,qe,Ie,!1,null,"582d4f46",null),He=Ve.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-header",{staticClass:"page-header"},[e._v("\n    我的消息\n  ")]),e.messages.length?r("ul",e._l(e.messages,function(t,n){return r("li",[r("router-link",{attrs:{to:{name:"User",params:{id:t.get("from").id}}}},[e._v(e._s(t.get("from").get("username"))+"\n      ")]),e._v("\n      给你发了一条信息\n      "),r("p",[r("el-button",{on:{click:function(t){return e.destroy(n)}}},[e._v("删除")]),r("el-button",{on:{click:function(r){e.send(t.get("from"))}}},[e._v("回复")])],1),r("p",[e._v(e._s(t.get("message")))])],1)}),0):r("span",[e._v("没有消息")]),r("el-dialog",{attrs:{title:"发送私信给该用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top",rules:e.rules}},[r("el-form-item",{attrs:{label:"私信内容",prop:"msg"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sendMsg()}}},[e._v("确 定")])],1)],1)],1)},Je=[],ze={name:"myMessage",data:function(){return{messages:[],sendTo:null,dialogFormVisible:!1,form:{msg:""},rules:{msg:[{require:!0,message:"必填项",trigger:"blur"}]}}},created:function(){this.getMessages()},methods:{getMessages:function(){var e=this,t=new this.$api.SDK.Query("_Status");t.include("from"),t.equalTo("to",this.$store.state.user),t.equalTo("inboxType","private"),t.find().then(function(t){e.messages=t,e.$Progress.finish()}).catch(function(t){return e.$message.error(t)})},send:function(e){this.sendTo=e,this.dialogFormVisible=!0},sendMsg:function(){var e=this;if(this.form.msg){var t=this.$api.SDK.Status,r=new t(null,this.form.msg),n=this.$store.state.user;r.set("from",n),r.set("to",this.sendTo),r.set("ACL",{"*":{read:!0,write:!0}}),t.sendPrivateStatus(r,n.id).then(function(t){t&&(e.dialogFormVisible=!1,e.$message({message:"发送私信成功！",type:"success"}),console.log(t))},function(t){e.$message.error(t)})}else this.$message.error("信息不能为空")},destroy:function(e){var t=this;console.log(e),this.messages[e].destroy().then(function(r){r&&(t.messages.splice(e,1),t.$message.success("删除成功"))}).catch(function(e){t.$message.error("出错了"),console.error(e)})}}},Ne=ze,We=Object(p["a"])(Ne,Re,Je,!1,null,"5880de55",null),Be=We.exports,Xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-header",{staticClass:"page-header"},[e._v("\n    我的朋友圈\n  ")]),e.statuses.length?r("ul",e._l(e.statuses,function(t){return r("li",[r("router-link",{attrs:{to:{name:"User",params:{id:t.get("source").id}}}},[e._v(e._s(t.get("source").get("username")))]),e._v(" 在 "+e._s(t.createdAt)+"\n      "),"create_article"==t.get("type")?r("span",[e._v("\n        创建了新的文章 "),r("router-link",{attrs:{to:{name:"ArticleShow",params:{id:t.get("article").id}}}},[e._v(e._s(t.get("article").get("title")))])],1):e._e()],1)}),0):e._e()],1)},Ye=[],Ge={name:"friend",data:function(){return{statuses:{}}},created:function(){this.getFriendMsg()},methods:{getFriendMsg:function(){var e=this,t=this.$store.state.user.followeeQuery();t.find().then(function(t){console.log("获取关注的人"),console.log(t);var r=new e.$api.SDK.Query("_status");return r.include("source"),r.include("article"),r.equalTo("inboxType","friend"),r.containedIn("source",t),r.find()}).then(function(t){e.statuses=t,e.$Progress.finish()},function(e){return console.log(e)})}}},Ze=Ge,et=Object(p["a"])(Ze,Xe,Ye,!1,null,"6b5bba9b",null),tt=et.exports;n["default"].use(w["a"]);var rt=new w["a"]({routes:[{path:"/",name:"home",component:K},{path:"/article",name:"ArticleList",component:Q},{path:"/signUp",name:"signUp",component:Z},{path:"/signIn",name:"signIn",component:N},{path:"/article/create",name:"ArticleCreate",component:ce,meta:{needLogin:!0}},{path:"/article/:id",name:"ArticleShow",component:ve},{path:"/article/:id/edit",name:"ArticleEdit",component:xe,meta:{needLogin:!0}},{path:"/user/:id",name:"User",component:De},{path:"/followee",name:"Followee",component:Te,meta:{needLogin:!0}},{path:"/follower",name:"Follower",component:He,meta:{needLogin:!0}},{path:"/message",name:"Message",component:Be,meta:{needLogin:!0}},{path:"/friend",name:"Friend",component:tt,meta:{needLogin:!0}}]});n["default"].use(c["a"]);var nt=new c["a"].Store({state:{user:null},mutations:{setUser:function(e,t){e.user=t}},getters:{uid:function(e){var t=e.user;return t?t.id:null}},actions:{exit:function(e){e.commit("setUser",null)},login:function(e,t){e.commit("setUser",t)}}}),st=(r("150b"),r("0631")),it=r.n(st),ot="TvRqQx6utxu5IELIsi8M94mv-MdYXbMMI",at="KWD1FbHra7rFt1aa6KFH9Dml";it.a.init({appId:ot,appKey:at});var lt={SDK:it.a},ct=r("26b9"),ut=r.n(ct),ft=r("5c96"),dt=r.n(ft);r("0fae");rt.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.needLogin})?nt.state.user?r():(n["default"].prototype.$message.error("请先登录"),r({path:"/signIn"})):r()}),n["default"].use(dt.a);var mt={color:"#bffaf3",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1};n["default"].use(ut.a,mt);var pt=lt.SDK.User.current();pt&&nt.commit("setUser",pt),n["default"].mixin({beforeCreate:function(){lt&&!this.$api&&(this.$api=lt)}}),n["default"].config.productionTip=!1;new n["default"]({router:rt,store:nt,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),s=r.n(n);s.a},"5e27":function(e,t,r){},"61dc":function(e,t,r){},"79b2":function(e,t,r){"use strict";var n=r("be2e"),s=r.n(n);s.a},"7cb3":function(e,t,r){},bc5a:function(e,t,r){},bcc9:function(e,t,r){},be2e:function(e,t,r){},c5fc:function(e,t,r){"use strict";var n=r("e794"),s=r.n(n);s.a},daa8:function(e,t,r){"use strict";var n=r("1d51"),s=r.n(n);s.a},db93:function(e,t,r){"use strict";var n=r("2d59"),s=r.n(n);s.a},dde9:function(e,t,r){"use strict";var n=r("7cb3"),s=r.n(n);s.a},e6bf:function(e,t,r){"use strict";var n=r("0e3b"),s=r.n(n);s.a},e794:function(e,t,r){},f0e7:function(e,t,r){"use strict";var n=r("61dc"),s=r.n(n);s.a}});
//# sourceMappingURL=app.371ca40e.js.map