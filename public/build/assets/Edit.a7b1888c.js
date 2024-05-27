import{L as c}from"./Admin.8493bbaa.js";import{H as f,L as b,r as p,a,o as w,c as h,b as i,w as r,d as o,e as V,f as q,s as v,F as y,h as x,i as m,j as S}from"./app.7571266b.js";import{S as U}from"./sweetalert2.all.f2c6c037.js";import{T as E}from"./TextEditor.cc5846a9.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";const B={layout:c,components:{Head:f,Link:b,TextEditor:E},props:{errors:Object,exam:Object,question:Object},setup(l){const t=p({question:l.question.question,option_1:l.question.option_1,option_2:l.question.option_2,option_3:l.question.option_3,option_4:l.question.option_4,option_5:l.question.option_5,answer:l.question.answer});return{form:t,submit:()=>{x.Inertia.put(`/admin/exams/${l.exam.id}/questions/${l.question.id}/update`,{question:t.question,option_1:t.option_1,option_2:t.option_2,option_3:t.option_3,option_4:t.option_4,option_5:t.option_5,answer:t.answer},{onSuccess:()=>{U.fire({title:"Success!",text:"Soal Ujian Berhasil Dipdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},k=o("title",null,"Edit Soal Ujian - Aplikasi Ujian Online",-1),L={class:"container-fluid mb-5 mt-5"},C={class:"row"},P={class:"col-md-12"},T=o("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=m(" Kembali"),D={class:"card border-0 shadow"},H={class:"card-body"},N=o("h5",null,[o("i",{class:"fa fa-question-circle"}),m(" Edit Soal Ujian")],-1),O=o("hr",null,null,-1),g={class:"table-responsive mb-4"},F={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=o("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),I=o("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),J=o("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),K=o("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),R=o("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),z=o("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan E",-1),G=o("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),Q=S('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),W=[Q],X=o("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Y=o("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Z(l,t,d,n,$,oo){const u=a("Head"),_=a("Link"),s=a("TextEditor");return w(),h(y,null,[i(u,null,{default:r(()=>[k]),_:1}),o("div",L,[o("div",C,[o("div",P,[i(_,{href:`/admin/exams/${d.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:r(()=>[T,A]),_:1},8,["href"]),o("div",D,[o("div",H,[N,O,o("form",{onSubmit:t[7]||(t[7]=V((...e)=>n.submit&&n.submit(...e),["prevent"]))},[o("div",g,[o("table",F,[o("tbody",null,[o("tr",null,[M,o("td",null,[i(s,{modelValue:n.form.question,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.question=e)},null,8,["modelValue"])])]),o("tr",null,[I,o("td",null,[i(s,{modelValue:n.form.option_1,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.option_1=e)},null,8,["modelValue"])])]),o("tr",null,[J,o("td",null,[i(s,{modelValue:n.form.option_2,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.option_2=e)},null,8,["modelValue"])])]),o("tr",null,[K,o("td",null,[i(s,{modelValue:n.form.option_3,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.option_3=e)},null,8,["modelValue"])])]),o("tr",null,[R,o("td",null,[i(s,{modelValue:n.form.option_4,"onUpdate:modelValue":t[4]||(t[4]=e=>n.form.option_4=e)},null,8,["modelValue"])])]),o("tr",null,[z,o("td",null,[i(s,{modelValue:n.form.option_5,"onUpdate:modelValue":t[5]||(t[5]=e=>n.form.option_5=e)},null,8,["modelValue"])])]),o("tr",null,[G,o("td",null,[q(o("select",{class:"form-control","onUpdate:modelValue":t[6]||(t[6]=e=>n.form.answer=e)},W,512),[[v,n.form.answer]])])])])])]),X,Y],32)])])])])])],64)}const so=j(B,[["render",Z]]);export{so as default};