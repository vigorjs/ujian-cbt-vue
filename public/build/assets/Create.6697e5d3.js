import{L as g}from"./Admin.8493bbaa.js";import{H as S,L,r as V,a as f,o as n,c as r,b,w as v,d as s,e as x,f as d,v as m,t as i,g as c,s as u,F as h,p as w,h as N,i as k}from"./app.7571266b.js";import{S as U}from"./sweetalert2.all.f2c6c037.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:g,components:{Head:S,Link:L},props:{errors:Object,schools:Array,classrooms:Array},setup(){const l=V({nisn:"",name:"",school_id:"",classroom_id:"",gender:"",password:"",password_confirmation:""});return{form:l,submit:()=>{N.Inertia.post("/admin/students",{nisn:l.nisn,name:l.name,school_id:l.school_id,classroom_id:l.classroom_id,gender:l.gender,password:l.password,password_confirmation:l.password_confirmation},{onSuccess:()=>{U.fire({title:"Success!",text:"Siswa Berhasil Disimpan.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},B=s("title",null,"Tambah Siswa - Aplikasi Ujian Online",-1),C={class:"container-fluid mb-5 mt-5"},K={class:"row"},A={class:"col-md-12"},H=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),T=k(" Kembali"),D={class:"card border-0 shadow"},j={class:"card-body"},F=s("h5",null,[s("i",{class:"fa fa-user"}),k(" Tambah Siswa")],-1),O=s("hr",null,null,-1),E={class:"row"},I={class:"col-md-6"},J={class:"mb-4"},R=s("label",null,"Nisn",-1),q={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-6"},G={class:"mb-4"},Q=s("label",null,"Nama Lengkap",-1),W={key:0,class:"alert alert-danger mt-2"},X={class:"row"},Y={class:"col-md-6"},Z={class:"mb-4"},$=s("label",null,"Sekolah",-1),ss=["value"],os={key:0,class:"alert alert-danger mt-2"},es={class:"col-md-6"},ts={class:"mb-4"},as=s("label",null,"Kelas",-1),ns=["value"],rs={key:0,class:"alert alert-danger mt-2"},ls={class:"col-md-6"},is={class:"mb-4"},ds=s("label",null,"Jenis Kelamin",-1),cs=s("option",{value:"L"},"Laki - Laki",-1),ms=s("option",{value:"P"},"Perempuan",-1),_s=[cs,ms],us={key:0,class:"alert alert-danger mt-2"},hs={class:"row"},fs={class:"col-md-6"},bs={class:"mb-4"},vs=s("label",null,"Password",-1),ws={key:0,class:"alert alert-danger mt-2"},ks={class:"col-md-6"},ps={class:"mb-4"},ys=s("label",null,"Konfirmasi Password",-1),gs=s("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Ss=s("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Ls(l,e,a,t,Vs,xs){const p=f("Head"),y=f("Link");return n(),r(h,null,[b(p,null,{default:v(()=>[B]),_:1}),s("div",C,[s("div",K,[s("div",A,[b(y,{href:"/admin/students",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:v(()=>[H,T]),_:1}),s("div",D,[s("div",j,[F,O,s("form",{onSubmit:e[7]||(e[7]=x((...o)=>t.submit&&t.submit(...o),["prevent"]))},[s("div",E,[s("div",I,[s("div",J,[R,d(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nisn Siswa","onUpdate:modelValue":e[0]||(e[0]=o=>t.form.nisn=o)},null,512),[[m,t.form.nisn]]),a.errors.nisn?(n(),r("div",q,i(a.errors.nisn),1)):c("",!0)])]),s("div",z,[s("div",G,[Q,d(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Siswa","onUpdate:modelValue":e[1]||(e[1]=o=>t.form.name=o)},null,512),[[m,t.form.name]]),a.errors.name?(n(),r("div",W,i(a.errors.name),1)):c("",!0)])])]),s("div",X,[s("div",Y,[s("div",Z,[$,d(s("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=o=>t.form.school_id=o)},[(n(!0),r(h,null,w(a.schools,(o,_)=>(n(),r("option",{key:_,value:o.id},i(o.title),9,ss))),128))],512),[[u,t.form.school_id]]),a.errors.school_id?(n(),r("div",os,i(a.errors.school_id),1)):c("",!0)])]),s("div",es,[s("div",ts,[as,d(s("select",{class:"form-select","onUpdate:modelValue":e[3]||(e[3]=o=>t.form.classroom_id=o)},[(n(!0),r(h,null,w(a.classrooms,(o,_)=>(n(),r("option",{key:_,value:o.id},i(o.title),9,ns))),128))],512),[[u,t.form.classroom_id]]),a.errors.classroom_id?(n(),r("div",rs,i(a.errors.classroom_id),1)):c("",!0)])]),s("div",ls,[s("div",is,[ds,d(s("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=o=>t.form.gender=o)},_s,512),[[u,t.form.gender]]),a.errors.gender?(n(),r("div",us,i(a.errors.gender),1)):c("",!0)])])]),s("div",hs,[s("div",fs,[s("div",bs,[vs,d(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":e[5]||(e[5]=o=>t.form.password=o)},null,512),[[m,t.form.password]]),a.errors.password?(n(),r("div",ws,i(a.errors.password),1)):c("",!0)])]),s("div",ks,[s("div",ps,[ys,d(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":e[6]||(e[6]=o=>t.form.password_confirmation=o)},null,512),[[m,t.form.password_confirmation]])])])]),gs,Ss],32)])])])])])],64)}const Bs=M(P,[["render",Ls]]);export{Bs as default};