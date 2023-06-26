"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),k=a,m=y["".concat(p,".").concat(k)]||y[k]||u[k]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Secrets Encryption"},o=void 0,s={unversionedId:"security/secrets_encryption",id:"security/secrets_encryption",title:"Secrets Encryption",description:"Secrets Encryption Config",source:"@site/docs/security/secrets_encryption.md",sourceDirName:"security",slug:"/security/secrets_encryption",permalink:"/security/secrets_encryption",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/secrets_encryption.md",tags:[],version:"current",lastUpdatedAt:1687808968,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"Secrets Encryption"},sidebar:"mySidebar",previous:{title:"SELinux",permalink:"/security/selinux"},next:{title:"Architecture",permalink:"/architecture"}},p={},l=[{value:"Secrets Encryption Config",id:"secrets-encryption-config",level:2},{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2},{value:"Single-Server Encryption Key Rotation",id:"single-server-encryption-key-rotation",level:3},{value:"Multi-Server Encryption Key Rotation",id:"multi-server-encryption-key-rotation",level:3},{value:"Secrets Encryption Status",id:"secrets-encryption-status",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"secrets-encryption-config"},"Secrets Encryption Config"),(0,a.kt)("p",null,"RKE2 supports ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"encrypting secrets at rest"),", and will do the following automatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate an AES-CBC key"),(0,a.kt)("li",{parentName:"ul"},"Generate an encryption config file with the generated key:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pass the config to the Kubernetes APIServer as encryption-provider-config")),(0,a.kt)("p",null,"Once enabled any created secret will be encrypted with this key. Note that if you disable encryption then any encrypted secrets will not be readable until you enable encryption again using the same key."),(0,a.kt)("h2",{id:"secrets-encryption-tool"},"Secrets Encryption Tool"),(0,a.kt)("admonition",{title:"Version Gate",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Available as of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.8%2Brke2r1"},"v1.21.8+rke2r1"))),(0,a.kt)("p",null,"RKE2 contains a utility ",(0,a.kt)("a",{parentName:"p",href:"/reference/subcommands#secrets-encrypt"},"subcommand")," ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),", which allows administrators to perform the following tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding new encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Rotating and deleting encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Reencrypting secrets")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Failure to follow proper procedure when rotating secrets encryption keys can cause permanent data loss. ",(0,a.kt)("a",{parentName:"p",href:"/backup_restore"},"Creating a snapshot")," before rotating is recommended. Proceed with caution.")),(0,a.kt)("h3",{id:"single-server-encryption-key-rotation"},"Single-Server Encryption Key Rotation"),(0,a.kt)("p",null,"To rotate secrets encryption keys on a single-node cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," pod:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# Get the kube-apiserver container ID\nexport CONTAINER_RUNTIME_ENDPOINT="unix:///var/run/k3s/containerd/containerd.sock"\ncrictl ps --name kube-apiserver\n# Stop the pod\ncrictl stop <CONTAINER_ID>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," pod again")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt reencrypt\n")))),(0,a.kt)("h3",{id:"multi-server-encryption-key-rotation"},"Multi-Server Encryption Key Rotation"),(0,a.kt)("p",null,"To rotate secrets encryption keys on HA setups:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In this example, 3 servers are used to for a HA cluster, referred to as S1, S2, S3. While not required, it is recommended that you pick one server node from which to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," commands.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sequentially Restart S1, S2, S3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"systemctl restart rke2-server.service\n")),(0,a.kt)("p",{parentName:"li"},"Wait for the systemctl command to return before restarting the next server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sequentially Restart S1, S2, S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt reencrypt\n")),(0,a.kt)("p",{parentName:"li"},"Wait until reencryption is finished, either via server logs ",(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-server")," or via ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 secrets-encrypt status"),". The status will return ",(0,a.kt)("inlineCode",{parentName:"p"},"reencrypt_finished")," when done.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sequentially Restart S1, S2, S3"))),(0,a.kt)("h3",{id:"secrets-encryption-status"},"Secrets Encryption Status"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt status")," subcommand displays information about the current status of secrets encryption on the node."),(0,a.kt)("p",null,"An example of the command on a single-server node:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke2 secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Another example on HA cluster, after rotating the keys, but before restarting the servers:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke2 secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Details on each section are as follows:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encryption Status"),": Displayed whether secrets encryption is disabled or enabled on the node  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Current Rotation Stage"),": Indicates the current rotation stage on the node.",(0,a.kt)("br",{parentName:"li"}),"Stages are: ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"prepare"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rotate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_finished"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),": Useful for HA clusters, this indicates whether all servers are on the same stage with their local files. This can be used to identify whether a restart of servers is required before proceeding to the next stage. In the HA example above, node-1 and node-2 have different hashes, indicating that they currently do not have the same encryption configuration. Restarting the servers will sync up their configuration.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key Table"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," indicates which, if any, of the keys are currently used for secrets encryption. The active key is used by Kubernetes to encrypt any new secrets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Key Type"),(0,a.kt)("td",{parentName:"tr",align:null},"RKE2 only supports the ",(0,a.kt)("inlineCode",{parentName:"td"},"AES-CBC")," key type. Find more info ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"here."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the encryption key. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"aescbckey-<DATE_AND_TIME>"),".")))))}u.isMDXComponent=!0}}]);