import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{z as o,u as _,R as s,I as a,T as A,C as M,t as B}from"./TextArea-29cbc2bf.js";import{C as I}from"./ContactCard-1a4b3368.js";import{B as R,Z as L}from"./ZsdButton-feed32f4.js";import{L as U}from"./Layout-c161d79b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-cfbbaaf2.js";import"./jsx-runtime-6f6342d7.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index.es24-26db34bb.js";import"./index.es34-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const m=({onSubmit:l,title:z,contact:j,subtitle:v})=>{var i,n,p,u,f,d,h,b;const{fullName:y,address:F,email:C,fax:D,phone:V,image:E,role:T,languages:w}=j,S=o.object({sex:o.string().min(1,{message:"Req"}),lastName:o.string().min(1,{message:"Dieses Feld ist erforderlich"}),firstName:o.string().min(1,{message:"Dieses Feld ist erforderlich"}),company:o.string().min(1,{message:"Dieses Feld ist erforderlich"}),message:o.string().optional(),privacyCheck:o.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),email:o.string().min(1,{message:"Dieses Feld ist erforderlich"}).email({message:"Email is not in valid format"})}),{handleSubmit:k,register:r,formState:{errors:t}}=_({resolver:B(S)}),q=async P=>{alert(JSON.stringify(P)),l()};return e.jsxDEV(U,{wrapperClassname:"zep-bg-primary-default",children:[e.jsxDEV("h2",{className:"zep-typography-headlineLG-fluid-cqi zep-text-typography-light-100 zep-text-center zep-mb-1.5",children:z},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:47,columnNumber:7},globalThis),e.jsxDEV("p",{className:"zep-text-typography-light-100 zep-typography-bodyText zep-text-center zep-mb-1.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:v},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:50,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-w-full zep-mx-auto zep-bg-greyscale-0 zep-p-1 sm:zep-p-1.5 md:zep-p-2.5 lg:zep-p-7.5 zep-flex zep-flex-col md:zep-flex-row sm:zep-gap-2 md:zep-gap-2.5 lg:zep-gap-5 zep-overflow-auto",children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mb-1 sm:zep-mb-1.5",children:"Unser Ansprechpartner für Sie"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:55,columnNumber:11},globalThis),e.jsxDEV(I,{fullName:y,address:F,email:C,fax:D,phone:V,image:E,role:T,languages:w},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:58,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:54,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-w-full",children:[e.jsxDEV("h3",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-mb-1.5 zep-mt-2 sm:zep-mt-[unset]",children:"Nehmen Sie direkt Kontakt auf"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:70,columnNumber:11},globalThis),e.jsxDEV("form",{onSubmit:k(q),children:[e.jsxDEV("p",{className:"zep-mb-0.5 zep-text-typography-dark-100",children:"Anrede"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:74,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-flex zep-gap-1 sm:zep-gap-2 zep-mb-1.5",children:[e.jsxDEV(s,{id:"Frau",label:"Frau",...r("sex"),error:!!((i=t.sex)!=null&&i.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:76,columnNumber:15},globalThis),e.jsxDEV(s,{id:"Herr",label:"Herr",...r("sex"),error:!!((n=t.sex)!=null&&n.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:77,columnNumber:15},globalThis),e.jsxDEV(s,{id:"Divers",label:"Divers",...r("sex"),error:!!((p=t.sex)!=null&&p.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:78,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:75,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-flex zep-flex-col lg:zep-flex-row lg:zep-gap-1.5",children:[e.jsxDEV(a,{className:"zep-w-full",label:"Vorname",...r("lastName"),error:(u=t.lastName)==null?void 0:u.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:81,columnNumber:15},globalThis),e.jsxDEV(a,{className:"zep-w-full",label:"Name",...r("firstName"),error:(f=t.firstName)==null?void 0:f.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:88,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:80,columnNumber:13},globalThis),e.jsxDEV(a,{className:"zep-w-full",label:"Firma",...r("company"),error:(d=t.company)==null?void 0:d.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:96,columnNumber:13},globalThis),e.jsxDEV(a,{error:(h=t.email)==null?void 0:h.message,className:"zep-w-full",label:"E-Mail-Adresse",...r("email"),required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:103,columnNumber:13},globalThis),e.jsxDEV(A,{label:"Nachricht",...r("message"),className:"zep-h-[126px]"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:110,columnNumber:13},globalThis),e.jsxDEV(M,{...r("privacyCheck"),error:(b=t.privacyCheck)==null?void 0:b.message,labelhtml:'<p>Ich habe die <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u> gelesen  und willige in die Verwendung meiner Daten ein.</p>'},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:111,columnNumber:13},globalThis),e.jsxDEV(R,{variant:L.PrimaryDark,className:"!zep-w-full",type:"submit",children:"Nachricht absenden"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:116,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:73,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:69,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:53,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:46,columnNumber:5},globalThis)};try{m.displayName="ContactForm",m.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},contact:{defaultValue:null,description:"",name:"contact",required:!0,type:{name:"ContactCardProps"}}}}}catch{}const ce={title:"Patterns/ContactForm",component:m,tags:["autodocs"],argTypes:{}},c={args:{title:"Mehr Details? Sprechen Sie uns an",subtitle:"Unsere Experten für alle Fragen rund um Intensivmischer stehen Ihnen gerne persönlich zur Verfügung.",contact:{fullName:"Michael Pfrieger",image:"https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png",role:"Business Unit Leiter Polyolefin Plants",phone:"+49 7541 202 1861",fax:"+49 7541 202 1861",email:"michaell.pfrieger@zeppelin.com",address:"Zeppelin Systems GmbH Musteradresse Rödermark",languages:["Deutsch","English"]},onSubmit:()=>null}};var g,N,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Mehr Details? Sprechen Sie uns an',
    subtitle: 'Unsere Experten für alle Fragen rund um Intensivmischer stehen Ihnen gerne persönlich zur Verfügung.',
    contact: {
      fullName: 'Michael Pfrieger',
      image: 'https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Beautiful-African-American-Brown-Skin-Woman-Avatar-47788434-1.png',
      role: 'Business Unit Leiter Polyolefin Plants',
      phone: '+49 7541 202 1861',
      fax: '+49 7541 202 1861',
      email: 'michaell.pfrieger@zeppelin.com',
      address: 'Zeppelin Systems GmbH Musteradresse Rödermark',
      languages: ['Deutsch', 'English']
    },
    onSubmit: () => null
  } as ContactFormProps
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const se=["Default"];export{c as Default,se as __namedExportsOrder,ce as default};
