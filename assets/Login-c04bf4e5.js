import{_ as p,r as m,a as _,o as u,c as g,b as o,w as i,v as c,d as f,e as h,f as w,g as S,p as b,h as v}from"./index-e8d065c9.js";import{_ as y}from"./black-snkr-5a846b1a.js";const I={data(){return{email:"",password:""}},methods:{async fetchData(){const t={email:this.email,password:this.password};try{const s=await fetch("http://localhost:8080/users/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),e=await s.json();s.ok&&(localStorage.setItem("id",e.id),console.log(e.id),localStorage.setItem("firstname",e.firstname),console.log(e.firstname),localStorage.setItem("lastname",e.lastname),console.log(e.lastname),localStorage.setItem("email",e.email),console.log(e.email),localStorage.setItem("password",e.password),console.log(e.password),localStorage.setItem("accessToken",e.accessToken),console.log(e.accessToken),m.push("/"))}catch(s){console.error(s)}}}},a=t=>(b("data-v-e1d5c744"),t=t(),v(),t),k=a(()=>o("div",{id:"bg"},[o("img",{src:y,alt:""})],-1)),x={id:"container"},T=a(()=>o("h1",null,"Log in",-1)),D=a(()=>o("label",{for:"email"},[o("b",null,"Email")],-1)),V=a(()=>o("label",{for:"psw"},[o("b",null,"Password")],-1)),L=a(()=>o("button",{type:"submit",class:"signinbtn"},"Log in",-1)),N=a(()=>o("div",{class:"line"},null,-1));function j(t,s,e,B,l,r){const d=_("router-link");return u(),g("form",{onSubmit:s[2]||(s[2]=w((...n)=>r.fetchData&&r.fetchData(...n),["prevent"]))},[k,o("section",x,[T,D,i(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>l.email=n),name:"email",required:""},null,512),[[c,l.email]]),V,i(o("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=n=>l.password=n),name:"psw",required:""},null,512),[[c,l.password]]),L,N,f(d,{to:"/register",class:"register"},{default:h(()=>[S("Register")]),_:1})])],32)}const E=p(I,[["render",j],["__scopeId","data-v-e1d5c744"]]);export{E as default};
