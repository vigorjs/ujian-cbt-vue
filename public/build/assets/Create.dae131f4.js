import{L as b}from"./Admin.8493bbaa.js";import{H as u,L as f,r as p,a as i,o as r,c as l,b as c,w as d,d as t,e as k,f as v,v as w,t as S,g as y,F as x,h as g,i as m}from"./app.7571266b.js";import{S as L}from"./sweetalert2.all.f2c6c037.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const B={layout:b,components:{Head:u,Link:f},props:{errors:Object},setup(){const o=p({title:""});return{form:o,submit:()=>{g.Inertia.post("/admin/schools",{title:o.title},{onSuccess:()=>{L.fire({title:"Success!",text:"Sekolah Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},C=t("title",null,"Tambah Sekolah - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},H={class:"row"},T={class:"col-md-12"},D=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),M=m(" Kembali"),j={class:"card border-0 shadow"},A={class:"card-body"},F=t("h5",null,[t("i",{class:"fa fa-bookmark"}),m(" Tambah Sekolah")],-1),O=t("hr",null,null,-1),U={class:"mb-4"},E=t("label",null,"Nama Sekolah",-1),I={key:0,class:"alert alert-danger mt-2"},K=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Simpan ",-1),R=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function q(o,s,n,e,z,G){const _=i("Head"),h=i("Link");return r(),l(x,null,[c(_,null,{default:d(()=>[C]),_:1}),t("div",V,[t("div",H,[t("div",T,[c(h,{href:"/admin/schools",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:d(()=>[D,M]),_:1}),t("div",j,[t("div",A,[F,O,t("form",{onSubmit:s[1]||(s[1]=k((...a)=>e.submit&&e.submit(...a),["prevent"]))},[t("div",U,[E,v(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sekolah","onUpdate:modelValue":s[0]||(s[0]=a=>e.form.title=a)},null,512),[[w,e.form.title]]),n.errors.title?(r(),l("div",I,S(n.errors.title),1)):y("",!0)]),K,R],32)])])])])])],64)}const X=N(B,[["render",q]]);export{X as default};
