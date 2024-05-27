import{L as V}from"./Admin.8493bbaa.js";import{H as g,L as N,r as j,a as h,o as n,c as l,b as v,w as b,d as s,e as S,f as _,v as w,t as i,g as r,s as c,F as u,p as f,h as q,i as k}from"./app.7571266b.js";import{S as M}from"./sweetalert2.all.f2c6c037.js";import{T as A}from"./TextEditor.cc5846a9.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:V,components:{Head:g,Link:N,TextEditor:A},props:{errors:Object,exam:Object,schools:Array,lessons:Array,classrooms:Array},setup(d){const o=j({title:d.exam.title,school_id:d.exam.school_id,lesson_id:d.exam.lesson_id,classroom_id:d.exam.classroom_id,duration:d.exam.duration,description:d.exam.description,random_question:d.exam.random_question,random_answer:d.exam.random_answer,show_answer:d.exam.show_answer});return{form:o,submit:()=>{q.Inertia.put(`/admin/exams/${d.exam.id}`,{title:o.title,school_id:o.school_id,lesson_id:o.lesson_id,classroom_id:o.classroom_id,duration:o.duration,description:o.description,random_question:o.random_question,random_answer:o.random_answer,show_answer:o.show_answer},{onSuccess:()=>{M.fire({title:"Success!",text:"Ujian Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},T=s("title",null,"Edit Ujian - Aplikasi Ujian Online",-1),D={class:"container-fluid mb-5 mt-5"},Y={class:"row"},B={class:"col-md-12"},H=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),C=k(" Kembali"),O={class:"card border-0 shadow"},F={class:"card-body"},K=s("h5",null,[s("i",{class:"fa fa-edit"}),k(" Edit Ujian")],-1),I=s("hr",null,null,-1),J={class:"row"},P={class:"col-md-6"},R={class:"mb-4"},z=s("label",null,"Nama Ujian",-1),G={key:0,class:"alert alert-danger mt-2"},Q={class:"col-md-6"},W={class:"mb-4"},X=s("label",null,"Sekolah",-1),Z=["value"],p={key:0,class:"alert alert-danger mt-2"},$={class:"row"},ss={class:"col-md-6"},os={class:"mb-4"},es=s("label",null,"Mata Pelajaran",-1),ts=["value"],as={key:0,class:"alert alert-danger mt-2"},ns={class:"col-md-6"},ls={class:"mb-4"},is=s("label",null,"Kelas",-1),ds=["value"],rs={key:0,class:"alert alert-danger mt-2"},_s={class:"mb-4"},cs=s("label",null,"Deskripsi",-1),ms={key:0,class:"alert alert-danger mt-2"},us={class:"row"},hs={class:"col-md-6"},vs={class:"mb-4"},fs=s("label",null,"Acak Soal",-1),bs=s("option",{value:"Y"},"Y",-1),ws=s("option",{value:"N"},"N",-1),ks=[bs,ws],ys={key:0,class:"alert alert-danger mt-2"},xs={class:"col-md-6"},Us={class:"mb-4"},Vs=s("label",null,"Acak Jawaban",-1),gs=s("option",{value:"Y"},"Y",-1),Ns=s("option",{value:"N"},"N",-1),js=[gs,Ns],Ss={key:0,class:"alert alert-danger mt-2"},qs={class:"row"},Ms={class:"col-md-6"},As={class:"mb-4"},Es=s("label",null,"Tampilkan Hasil",-1),Ls=s("option",{value:"Y"},"Y",-1),Ts=s("option",{value:"N"},"N",-1),Ds=[Ls,Ts],Ys={key:0,class:"alert alert-danger mt-2"},Bs={class:"col-md-6"},Hs={class:"mb-4"},Cs=s("label",null,"Durasi (Menit)",-1),Os={key:0,class:"alert alert-danger mt-2"},Fs=s("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),Ks=s("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Is(d,o,t,a,Js,Ps){const y=h("Head"),x=h("Link"),U=h("TextEditor");return n(),l(u,null,[v(y,null,{default:b(()=>[T]),_:1}),s("div",D,[s("div",Y,[s("div",B,[v(x,{href:"/admin/exams",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:b(()=>[H,C]),_:1}),s("div",O,[s("div",F,[K,I,s("form",{onSubmit:o[9]||(o[9]=S((...e)=>a.submit&&a.submit(...e),["prevent"]))},[s("div",J,[s("div",P,[s("div",R,[z,_(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Ujian","onUpdate:modelValue":o[0]||(o[0]=e=>a.form.title=e)},null,512),[[w,a.form.title]]),t.errors.title?(n(),l("div",G,i(t.errors.title),1)):r("",!0)])]),s("div",Q,[s("div",W,[X,_(s("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=e=>a.form.school_id=e)},[(n(!0),l(u,null,f(t.schools,(e,m)=>(n(),l("option",{key:m,value:e.id},i(e.title),9,Z))),128))],512),[[c,a.form.school_id]]),t.errors.school_id?(n(),l("div",p,i(t.errors.school_id),1)):r("",!0)])])]),s("div",$,[s("div",ss,[s("div",os,[es,_(s("select",{class:"form-select","onUpdate:modelValue":o[2]||(o[2]=e=>a.form.lesson_id=e)},[(n(!0),l(u,null,f(t.lessons,(e,m)=>(n(),l("option",{key:m,value:e.id},i(e.title),9,ts))),128))],512),[[c,a.form.lesson_id]]),t.errors.lesson_id?(n(),l("div",as,i(t.errors.lesson_id),1)):r("",!0)])]),s("div",ns,[s("div",ls,[is,_(s("select",{class:"form-select","onUpdate:modelValue":o[3]||(o[3]=e=>a.form.classroom_id=e)},[(n(!0),l(u,null,f(t.classrooms,(e,m)=>(n(),l("option",{key:m,value:e.id},i(e.title),9,ds))),128))],512),[[c,a.form.classroom_id]]),t.errors.classroom_id?(n(),l("div",rs,i(t.errors.classroom_id),1)):r("",!0)])])]),s("div",_s,[cs,v(U,{modelValue:a.form.description,"onUpdate:modelValue":o[4]||(o[4]=e=>a.form.description=e)},null,8,["modelValue"]),t.errors.description?(n(),l("div",ms,i(t.errors.description),1)):r("",!0)]),s("div",us,[s("div",hs,[s("div",vs,[fs,_(s("select",{class:"form-select","onUpdate:modelValue":o[5]||(o[5]=e=>a.form.random_question=e)},ks,512),[[c,a.form.random_question]]),t.errors.random_question?(n(),l("div",ys,i(t.errors.random_question),1)):r("",!0)])]),s("div",xs,[s("div",Us,[Vs,_(s("select",{class:"form-select","onUpdate:modelValue":o[6]||(o[6]=e=>a.form.random_answer=e)},js,512),[[c,a.form.random_answer]]),t.errors.random_answer?(n(),l("div",Ss,i(t.errors.random_answer),1)):r("",!0)])])]),s("div",qs,[s("div",Ms,[s("div",As,[Es,_(s("select",{class:"form-select","onUpdate:modelValue":o[7]||(o[7]=e=>a.form.show_answer=e)},Ds,512),[[c,a.form.show_answer]]),t.errors.show_answer?(n(),l("div",Ys,i(t.errors.show_answer),1)):r("",!0)])]),s("div",Bs,[s("div",Hs,[Cs,_(s("input",{type:"number",min:"1",class:"form-control",placeholder:"Masukkan Durasi Ujian (Menit)","onUpdate:modelValue":o[8]||(o[8]=e=>a.form.duration=e)},null,512),[[w,a.form.duration]]),t.errors.duration?(n(),l("div",Os,i(t.errors.duration),1)):r("",!0)])])]),Fs,Ks],32)])])])])])],64)}const Xs=E(L,[["render",Is]]);export{Xs as default};
