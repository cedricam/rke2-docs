"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[2753],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,N=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3132:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Requirements"},i=void 0,o={unversionedId:"install/requirements",id:"install/requirements",title:"Requirements",description:"RKE2 is very lightweight, but has some minimum requirements as outlined below.",source:"@site/docs/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/install/requirements",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1687808968,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"Requirements"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/install/quickstart"},next:{title:"Configuration Options",permalink:"/install/configuration"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Linux/Windows",id:"linuxwindows",level:3},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Inbound Network Rules",id:"inbound-network-rules",level:3},{value:"Windows Specific Inbound Network Rules",id:"windows-specific-inbound-network-rules",level:3}],p={toc:u};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RKE2 is very lightweight, but has some minimum requirements as outlined below."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Two nodes cannot have the same hostname."),(0,r.kt)("p",null,"If all your nodes have the same hostname, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-name")," parameter in the RKE2 config file for each node you add to the cluster to have a different node name."),(0,r.kt)("h2",{id:"operating-systems"},"Operating Systems"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"RKE2 has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Distro"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"18.04, 20.04, 22.04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS/RHEL"),(0,r.kt)("td",{parentName:"tr",align:null},"7.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky/RHEL"),(0,r.kt)("td",{parentName:"tr",align:null},"8.5, 9.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"8.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SLES"),(0,r.kt)("td",{parentName:"tr",align:null},"15 SP3, SP4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenSUSE, SLE Micro"),(0,r.kt)("td",{parentName:"tr",align:null},"5.1, 5.2, 5.3, 5.4")))),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("admonition",{title:"Version Gate",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Experimental as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.3%2Brke2r1"},"v1.21.3+rke2r1"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,r.kt)("p",null,"The RKE2 Windows Node (Worker) agent has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"),(0,r.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC (amd64) (OS Build 20348.169)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," The Windows Server Containers feature needs to be enabled for the RKE2 Windows agent to work."),(0,r.kt)("p",null,"Open a new Powershell window with Administrator privileges"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,r.kt)("p",null,"In the new Powershell window, run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName Containers \u2013All\n")),(0,r.kt)("p",null,"This will require a reboot for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Containers")," feature to properly function."),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."),(0,r.kt)("h3",{id:"linuxwindows"},"Linux/Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM: 4GB Minimum (we recommend at least 8GB)"),(0,r.kt)("li",{parentName:"ul"},"CPU: 2 Minimum (we recommend at least 4CPU)")),(0,r.kt)("h4",{id:"disks"},"Disks"),(0,r.kt)("p",null,"RKE2 performance depends on the performance of the database, and since RKE2 runs etcd embeddedly and it stores the data dir on disk, we recommend using an SSD when possible to ensure optimal performance."),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("admonition",{title:"Important",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your node has NetworkManager installed and enabled, ",(0,r.kt)("a",{parentName:"p",href:"/known_issues#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces."),". If your node has Wicked installed and enabled, ",(0,r.kt)("a",{parentName:"p",href:"/known_issues#wicked"},"ensure that the forwarding sysctl config is enabled"))),(0,r.kt)("p",null,"The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster."),(0,r.kt)("p",null,"All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used."),(0,r.kt)("p",null,"If you wish to utilize the metrics server, you will need to open port 10250 on each node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472."),(0,r.kt)("h3",{id:"inbound-network-rules"},"Inbound Network Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9345"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"6443"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Required only for Flannel VXLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"10250"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"2379"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd client port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"2380"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd peer port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"30000-32767"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"NodePort port range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI VXLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"4240"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ICMP"),(0,r.kt)("td",{parentName:"tr",align:null},"8/0"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"179"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico CNI with BGP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"4789"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico CNI with VXLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"5473"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9098"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico Typha health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9099"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"5473"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Canal CNI with VXLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9099"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Canal CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51820"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51821"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv6/dual-stack")))),(0,r.kt)("h3",{id:"windows-specific-inbound-network-rules"},"Windows Specific Inbound Network Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"4789"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for Calico and Flannel VXLAN")))),(0,r.kt)("p",null,"Typically, all outbound traffic will be allowed."))}s.isMDXComponent=!0}}]);