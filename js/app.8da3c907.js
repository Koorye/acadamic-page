(function(){"use strict";var n={9361:function(n,i,e){var o=e(9242),a=e(3396);const t={id:"container"};function r(n,i,e,o,r,l){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.Wm)(s)])}var l={name:"App",components:{}},s=e(89);const g=(0,s.Z)(l,[["render",r]]);var p=g,u=e(2483),c=e(7139);const d=n=>((0,a.dD)("data-v-903e6dce"),n=n(),(0,a.Cn)(),n),h={class:"container"},f={class:"info-box"},m={class:"avatar-box"},v=["src"],S={class:"info"},U={class:"job-title"},b=d((()=>(0,a._)("div",{class:"pad"},null,-1)));function A(n,i,e,o,t,r){const l=(0,a.up)("SimpleContent"),s=(0,a.up)("LinkBox"),g=(0,a.up)("SimpleList"),p=(0,a.up)("ListWithCover");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("div",f,[(0,a._)("div",m,[(0,a._)("img",{src:t.avatarUrl},null,8,v)]),(0,a._)("div",S,[(0,a._)("h1",null,(0,c.zw)(t.name),1),(0,a._)("div",U,(0,c.zw)(t.jobTitle),1),(0,a.Wm)(l,{list:t.intros},null,8,["list"]),(0,a.Wm)(s,{list:t.links},null,8,["list"])]),b]),(0,a.Wm)(g,{list:t.news},null,8,["list"]),(0,a.Wm)(p,{title:"Highlighted Papers",list:t.highlights},null,8,["list"])])}const L={class:"sc-container"},x=["innerHTML"];function C(n,i,e,o,t,r){return(0,a.wg)(),(0,a.iD)("div",L,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id},[(0,a._)("div",{class:"sc-item",innerHTML:n},null,8,x)])))),128))])}var k={name:"SimpleContent",props:{list:{type:Array,default:()=>[]}}};const y=(0,s.Z)(k,[["render",C],["__scopeId","data-v-ae616934"]]);var w=y;const I={class:"sl-container"},H=["innerHTML"];function T(n,i,e,o,t,r){return(0,a.wg)(),(0,a.iD)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id},[(0,a._)("li",{innerHTML:n},null,8,H)])))),128))])}var G={name:"SimpleList",props:{list:{type:Array,default:()=>[]}}};const J=(0,s.Z)(G,[["render",T],["__scopeId","data-v-5c230712"]]);var Z=J;const _={class:"lc-container"},X={class:"lc-box"},P={class:"lc-cover"},M=["src"],E={class:"lc-title"},D={class:"lc-info"},R={class:"lc-link-box"},N={class:"lc-publish"},W=["href"],Y=["href"];function B(n,i,e,o,t,r){return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("h2",null,(0,c.zw)(e.title),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id},[(0,a._)("div",X,[(0,a._)("div",P,[(0,a._)("img",{src:n.coverUrl},null,8,M)]),(0,a._)("div",null,[(0,a._)("div",E,(0,c.zw)(n.title),1),(0,a._)("div",D,(0,c.zw)(n.info),1),(0,a._)("div",R,[(0,a._)("div",N,(0,c.zw)(n.publish),1),null!=n.pdfUrl?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"lc-link",href:n.pdfUrl},"PDF",8,W)):(0,a.kq)("",!0),null!=n.codeUrl?((0,a.wg)(),(0,a.iD)("a",{key:1,class:"lc-link",href:n.codeUrl},"CODE",8,Y)):(0,a.kq)("",!0)])])])])))),128))])}var V={name:"ListWithCover",props:{title:{type:String,default:()=>"title"},list:{type:Array,default:()=>[]}}};const F=(0,s.Z)(V,[["render",B],["__scopeId","data-v-039ac2f7"]]);var Q=F;const j=n=>((0,a.dD)("data-v-edb9e9d0"),n=n(),(0,a.Cn)(),n),z={class:"l-box"},O=["href"],K={key:0,class:"sep"},q=j((()=>(0,a._)("div",{style:{clear:"both"}},null,-1)));function $(n,i,e,o,t,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("p",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,((n,i)=>((0,a.wg)(),(0,a.iD)("span",z,[(0,a._)("a",{href:n.url,class:"l-link"},(0,c.zw)(n.name),9,O),i!=e.list.length-1?((0,a.wg)(),(0,a.iD)("span",K," | ")):(0,a.kq)("",!0)])))),256))]),q],64)}var nn={name:"LinkBox",props:{list:{type:Array,default:()=>[]}}};const en=(0,s.Z)(nn,[["render",$],["__scopeId","data-v-edb9e9d0"]]);var on=en,an={name:"IndexPage",components:{SimpleContent:w,SimpleList:Z,ListWithCover:Q,LinkBox:on},data(){return{avatarUrl:e(8308),name:"JingKuan Song",jobTitle:"Professor",intros:["University of Electronic Science and Technology of China<br/>Email: jingkuan.song@gmail.com<br/>Office: No.A304 Innovation center","Jingkuan Song is a full professor with University of Electronic Science and Technology of China (UESTC) . He joined Columbia University as a Postdoc Research Scientist (2016-2017), and University of Trento as a Research Fellow (2014-2016). He obtained his PhD degree in 2014 from The University of Queensland (UQ), Australia (advised by Prof. Heng Tao Shen). His research interest includes large-scale multimedia retrieval, image/video segmentation and image/video understading using hashing, graph learning and deep learning techniques. He was the winner of the Best Paper Award in ICPR (2016, Mexico), Best Student Paper Award in Australian Database Conference (2017, Australia), and Best Paper Honorable Mention Award (2017, Japan). He is Guest Editor of TMM, WWWJ and he is PC member of CVPR’18, MM'18, IJCAI'18, etc.","<b>I am looking for highly motivated PhD students, Postdoctorals and Assistant Professors to conduct world-class research in my team. Please send your CV or enquiries to my email.</b>"],links:[{name:"Our Group",url:"#/our-group"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"},{name:"Google Scholar",url:"https://scholar.google.com/citations?hl=en&user=F5Zy9V4AAAAJ"},{name:"DBLP",url:"https://dblp.uni-trier.de/pid/70/10575.html"}],news:['<span style="color: red; font-weight: bold;">NEW</span> May 2021: I will serve as Technical Demo Chairs for ACM MM 21!',"May 2021: 2 IJCAI & 1 AAAI are accepted!","Aug 2020: 4 ACM MM & 2 IJCAI & 1 ECCV & 1 AAAI are accepted!","Jun 2019: I will serve as Associate Editor for TOMM!","May 2019: 5 IJCAI papers are accepted!","Feb 2019: 4 AAAI & 1 TPAMI & 1 TIP papers are accepted!"],highlights:[{coverUrl:e(3585),title:"A Lower Bound of Hash Codes' Performance",info:"Xiaosu Zhu, Jingkuan Song, Yu Lei, Lianli Gao, Heng Tao Shen",publish:"NeurIPS 2022",codeUrl:" https://github.com/VL-Group/LBHash",pdfUrl:"https://arxiv.org/pdf/2210.05899.pdf"},{coverUrl:e(9809),title:"Unified Binary Generative Adversarial Network for Image Retrieval and Compression",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Alan Hanjalic, Heng Tao Shen:",publish:"IJCV 2020",codeUrl:null,pdfUrl:"https://link.springer.com/content/pdf/10.1007/s11263-020-01305-2.pdf?pdf=button"},{coverUrl:e(9560),title:"Label-Guided Generative Adversarial Network for Realistic Image Synthesis",info:"Junchen Zhu, Lianli Gao, Jingkuan Song, Yuan-Fang Li, Feng Zheng, Xuelong Li, Heng Tao Shen",publish:"TPAMI, 2022",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9810175"},{coverUrl:e(6518),title:"Hierarchical LSTMs with Adaptive Attention for Visual Captioning",info:"Jingkuan Song, Xiangpeng Li, Lianli Gao, Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1812.11004v1.pdf"},{coverUrl:e(118),title:"Natural Color Fool: Towards Boosting Black-box Unrestricted Attacks",info:"Shengming Yuan, Qilong Zhang, Lianli Gao, Yaya Cheng, Jingkuan Song",publish:"NeurIPS 2022",codeUrl:"https://github.com/ylhz/Natural-Color-Fool",pdfUrl:"https://arxiv.org/pdf/2210.02041v1.pdf"},{coverUrl:e(2671),title:"Beyond ImageNet Attack: Towards Crafting Adversarial Examples for Black-box Domains",info:"Qilong Zhang, Xiaodan Li, Yuefeng Chen, Jingkuan Song, Lianli Gao, Yuan He, Hui Xue",publish:"ICLR 2022",codeUrl:"https://github.com/Alibaba-AAIG/Beyond-ImageNet-Attack",pdfUrl:"https://arxiv.org/pdf/2201.11528v4.pdf"}]}}};const tn=(0,s.Z)(an,[["render",A],["__scopeId","data-v-903e6dce"]]);var rn=tn;const ln={class:"container"};function sn(n,i,e,o,t,r){const l=(0,a.up)("LinkBox"),s=(0,a.up)("ListWithTitleNoShadow");return(0,a.wg)(),(0,a.iD)("div",ln,[(0,a.Wm)(l,{list:t.links},null,8,["list"]),(0,a.Wm)(s,{title:"Staff",list:t.staff},null,8,["list"]),(0,a.Wm)(s,{title:"Postdoctor | Research Assistant",list:t.postDoctor},null,8,["list"]),(0,a.Wm)(s,{title:"PhD Students",list:t.phd},null,8,["list"]),(0,a.Wm)(s,{title:"Master students",list:t.master},null,8,["list"]),(0,a.Wm)(s,{title:"Visiting Students",list:t.visiting},null,8,["list"]),(0,a.Wm)(s,{title:"Graduate Students | Study Abroad",list:t.graduate},null,8,["list"])])}const gn={class:"lt-no-shadow-container"};function pn(n,i,e,o,t,r){const l=(0,a.up)("SimpleListNoShadow");return(0,a.wg)(),(0,a.iD)("div",gn,[(0,a._)("h1",null,(0,c.zw)(e.title),1),(0,a.Wm)(l,{list:e.list},null,8,["list"])])}const un={class:"sl-no-shadow-container"},cn=["innerHTML"];function dn(n,i,e,o,t,r){return(0,a.wg)(),(0,a.iD)("div",un,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id},[(0,a._)("li",{innerHTML:n},null,8,cn)])))),128))])}var hn={name:"SimpleListNoShadow",props:{list:{type:Array,default:()=>[]}}};const fn=(0,s.Z)(hn,[["render",dn],["__scopeId","data-v-0cb4e07e"]]);var mn=fn,vn={name:"ListWithTitleNoShadow",components:{SimpleListNoShadow:mn},props:{title:{type:String,default:()=>"msg"},list:{type:Array,default:()=>[]}}};const Sn=(0,s.Z)(vn,[["render",pn],["__scopeId","data-v-5747a2ec"]]);var Un=Sn,bn={name:"OurGroup",components:{LinkBox:on,ListWithTitleNoShadow:Un},data(){return{links:[{name:"Back",url:"#/"}],staff:["JingKuan Song","Lianli Gao"],postDoctor:["Shuaiqi Jing","Lei Zhao"],phd:["Yan Dai","Pengpeng Zeng","Xuanhan Wang","Xinyu Lv","Ji Zhang","Xiaosu Zhu","Junchen Zhu","Sitong Su","Hao Ni","Shuai Zhang","Xovee Xu","Haonan Zhang","Cheng Chen","Xu Luo"],master:["Zhixin Zhai","Zhibin Zhang","Lanxin Miao","Chaoqun Li","Kai Xing","Sen Yang","Yu Liu","Yuyang Long","Jinkuan Zhu","Xiaoya Chen","Boheng Zeng","Xiaopeng Luo","Jingwei Liu","Tianyu Zhong","Shengming Yuan","Wenxue Shen","Jiahui Li","Zehua Qi","Min Chen","Hao Wu","Yukun Zhang","Chaofan Zheng","Yue Xia","Jiaxin Deng","Shuang Wang","Yifan Zhan","Yuke Li","Fuchun Wang","Hao Li","Jiayang Gu","Xiaojia Chen","Shiyue Huang","Beitao Chen","Yeyu Luo","Yixin Qin","Jiaqi Guo","Hangyu Guo","Wenshuo Zhao","Peng Yin","Hanglin Li","Junjie Yang","Qisheng Chen","Jianzhi Liu","Youheng Sun","Shulei Jing","Zhanpeng Qiu","Han Wang","Xianjun Luo (2019.6 ~ 2020.6)","Su Yang (2019.6 ~ 2020.6)","Qun Zhao (2019.6 ~ 2020.6)","Haitao Chen (2019.6 ~ 2020.6)","Diwen Xiong (2020.9 ~ 2021.2)","Daiyuan Chen","Kaixuan Fan","Ziming Fang","Tao Li","Liyang Zhang","Qingsong Zhang","Yiyue Zhang","Hao He","Zijie Huang","Ning Kang","Ruimin Lang","Shuo Xie","Jingqiu Zhang","Zhilong Zhou","Haowei Zhang","Zheng Ning(Notre Dame)","Yixuan Zhou(Ph.D candidate in UESTC)","Tao He","Yuyu Guo","Xiangpeng Li","Haoyu Wang"],visiting:[],graduate:[]}}};const An=(0,s.Z)(bn,[["render",sn],["__scopeId","data-v-7370d0ee"]]);var Ln=An;const xn={class:"container"};function Cn(n,i,e,o,t,r){const l=(0,a.up)("LinkBox"),s=(0,a.up)("ListWithCover");return(0,a.wg)(),(0,a.iD)("div",xn,[(0,a.Wm)(l,{list:t.links},null,8,["list"]),(0,a.Wm)(s,{title:"Compact Reports",list:t.papers},null,8,["list"])])}var kn={name:"CompactReport",components:{ListWithCover:Q,LinkBox:on},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:e(3910),title:"Deep region hashing for generic instance search from images",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Heng Tao Shen",publish:"AAAI 2018",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/pdf/10.5555/3504035.3504085"},{coverUrl:e(4145),title:"Binary Generative Adversarial Networks for Image Retrieval",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Alan Hanjalic, Heng Tao Shen",publish:"AAAI 2018",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1708.04150v1.pdf"},{coverUrl:e(7614),title:"3D Self-Attention for Unsupervised Video Quantization",info:"Jingkuan Song, Ruimin Lang, Xiaosu Zhu, Xing Xu, Lianli Gao, Heng Tao Shen",publish:"SIGIR 2020",codeUrl:"https://github.com/brownwolf/3D-UVQ",pdfUrl:"https://dl.acm.org/doi/pdf/10.1145/3397271.3401122"},{coverUrl:e(6424),title:"Self-Supervised Video Hashing With Hierarchical Binary Auto-Encoder",info:"Jingkuan Song, Hanwang Zhang, Xiangpeng Li, Lianli Gao, Meng Wang, Richang Hong",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1802.02305v1.pdf"},{coverUrl:e(7540),title:"Quantization-based hashing: a general framework for scalable image and video retrieval",info:"Jingkuan Song, Lianli Gao, Li Liu, Xiaofeng Zhu, Nicu Sebe",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:"https://www.sciencedirect.com/science/article/pii/S0031320317301322"},{coverUrl:e(2773),title:"One Network for Multi-Domains: Domain Adaptive Hashing with Intersectant Generative Adversarial Networks",info:"Tao He, Yuan-Fang Li, Lianli Gao, Dongxiang Zhang, Jingkuan Song",publish:"IJCAI 2019",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1907.00612v1.pdf"},{coverUrl:e(5841),title:"Deep Recurrent Quantization for Generating Sequential Binary Codes",info:"Jingkuan Song, Xiaosu Zhu, Lianli Gao, Xin-Shun Xu, Wu Liu, Heng Tao Shen",publish:"IJCAI 2019",codeUrl:"https://github.com/cfm-uestc/DRQ",pdfUrl:"https://arxiv.org/pdf/1906.06699v2.pdf"},{coverUrl:e(7873),title:"Beyond Product Quantization: Deep Progressive Quantization for Image Retrieval",info:"Lianli Gao, Xiaosu Zhu, Jingkuan Song, Zhou Zhao, Heng Tao Shen",publish:"IJCAI 2019",codeUrl:"https://github.com/cfm-uestc/DPQ",pdfUrl:"https://arxiv.org/pdf/1906.06698.pdf"},{coverUrl:e(1166),title:"Learning Efficient Hash Codes for Fast Graph-Based Data Similarity Retrieval",info:"Jinbao Wang, Shuo Xu, Feng Zheng, Ke Lu, Jingkuan Song, Ling Shao",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9474952"},{coverUrl:e(9370),title:"Binary neural networks: A survey",info:"Haotong Qin, Ruihao Gong, Xianglong Liu, Xiao Bai, Jingkuan Song, Nicu Sebe",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2004.03333.pdf"},{coverUrl:e(5736),title:"A Survey on Learning to Hash",info:"Jingdong Wang, Ting Zhang, Jingkuan Song, Nicu Sebe, and Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1606.00185.pdf"},{coverUrl:e(4640),title:"Unified Multivariate Gaussian Mixture for Efficient Neural Image Compression",info:"Xiaosu Zhu, Jingkuan Song, Lianli Gao, Feng Zheng, Heng Tao Shen",publish:"CVPR 2022",codeUrl:"https://github.com/xiaosu-zhu/McQuic",pdfUrl:"https://arxiv.org/pdf/2203.10897.pdf"},{coverUrl:e(3747),title:"Cross-Paced Representation Learning With Partial Curricula for Sketch-Based Image Retrieval",info:"Dan Xu, Xavier Alameda-Pineda, Jingkuan Song, Elisa Ricci, Nicu Sebe:",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1803.01504.pdf"},{coverUrl:e(2055),title:"SNEQ: Semi-Supervised Attributed Network Embedding with Attention-Based Quantisation",info:"Tao He, Lianli Gao, Jingkuan Song, Xin Wang, Kejie Huang, Yuanfang Li",publish:"AAAI 2020",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/5832"},{coverUrl:e(4552),title:"3D Self-Attention for Unsupervised Video Quantization",info:"Zhu Zhang, Zhou Zhao, Zhijie Lin, Jingkuan Song, Deng Cai",publish:"IJCAI 2019",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1906.12165.pdf"},{coverUrl:e(3233),title:"NAIS: Neural Attentive Item Similarity Model for Recommendation",info:"Jingkuan Song, Ruimin Lang, Xiaosu Zhu, Xing Xu, Lianli Gao, Heng Tao Shen",publish:"IEEE Trans. Knowl. Data Eng.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1809.07053.pdf"},{coverUrl:e(5611),title:"Deep Self-Taught Hashing for Image Retrieval",info:"Yu Liu, Jingkuan Song, Ke Zhou, Lingyu Yan, Li Liu, Fuhao Zou, Ling Shao",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8354809"},{coverUrl:e(2765),title:"Salience-Guided Cascaded Suppression Network for Person Re-Identification",info:"Xuesong Chen, Canmiao Fu, Yong Zhao, Feng Zheng, Jingkuan Song, Rongrong Ji, Yi Yang",publish:"CVPR 2020",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_Salience-Guided_Cascaded_Suppression_Network_for_Person_Re-Identification_CVPR_2020_paper.pdf"},{coverUrl:e(1599),title:"Forward and Backward Information Retention for Accurate Binary Neural Networks",info:"Haotong Qin, Ruihao Gong, Xianglong Liu, Mingzhu Shen, Ziran Wei, Fengwei Yu, Jingkuan Song",publish:"CVPR 2020",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Qin_Forward_and_Backward_Information_Retention_for_Accurate_Binary_Neural_Networks_CVPR_2020_paper.pdf"},{coverUrl:e(7189),title:"Camera-Agnostic Person Re-Identification via Adversarial Disentangling Learning",info:"Hao Ni, Jingkuan Song, Xiaosu Zhu, Feng Zheng, Lianli Gao",publish:"ACM Multimedia 2021",codeUrl:"https://github.com/luckyaci/ADL_ReID",pdfUrl:"https://dl.acm.org/doi/pdf/10.1145/3474085.3475361"},{coverUrl:e(4805),title:"Meta Distribution Alignment for Generalizable Person Re-Identification",info:"Hao Ni, Jingkuan Song, Xiaopeng Luo, Feng Zheng, Wen Li, Heng Tao Shen",publish:"CVPR 2022",codeUrl:"https://github.com/haoni0812/MDA.git",pdfUrl:"https://openaccess.thecvf.com/content/CVPR2022/papers/Ni_Meta_Distribution_Alignment_for_Generalizable_Person_Re-Identification_CVPR_2022_paper.pdf"},{coverUrl:e(4784),title:"Complementary Binary Quantization for Joint Multiple Indexing",info:"Qiang Fu, Xu Han, Xianglong Liu, Jingkuan Song, Cheng Deng",publish:"IJCAI 2018",codeUrl:null,pdfUrl:"https://www.ijcai.org/proceedings/2018/0292.pdf"},{coverUrl:e(5034),title:"Continual Referring Expression Comprehension via Dual Modular Memorization",info:"Heng Tao Shen, Cheng Chen, Peng Wang, Lianli Gao, Meng Wang, Jingkuan Song",publish:"IEEE Trans. Image Process.",codeUrl:"https://github.com/zackschen/DMM",pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9916159"},{coverUrl:e(2722),title:"Towards Accurate Georeferenced Video Search With Camera Field of View Modeling",info:"Jie Shao, Gang Hu, Jingkuan Song, Xueliang Liu, Heng Tao Shen",publish:"IEEE Trans. Circuits Syst. Video Technol.",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_Salience-Guided_Cascaded_Suppression_Network_for_Person_Re-Identification_CVPR_2020_paper.pdf"}]}}};const yn=(0,s.Z)(kn,[["render",Cn],["__scopeId","data-v-4401c1d7"]]);var wn=yn;const In={class:"container"};function Hn(n,i,e,o,t,r){const l=(0,a.up)("LinkBox"),s=(0,a.up)("ListWithCover");return(0,a.wg)(),(0,a.iD)("div",In,[(0,a.Wm)(l,{list:t.links},null,8,["list"]),(0,a.Wm)(s,{title:"Cross Media Analysis",list:t.papers},null,8,["list"])])}var Tn={name:"crossmedia",components:{ListWithCover:Q,LinkBox:on},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:e(6159),title:"Progressive Meta-Learning With Curriculum",info:"Ji Zhang, Jingkuan Song, Lianli Gao, Ye Liu, Heng Tao Shen",publish:"IEEE Trans. Circuits Syst. Video Technol.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/9745972"},{coverUrl:e(6314),title:"Learning Cross-Modal Common Representations by Private-Shared Subspaces Separation",info:"Xing Xu, Kaiyi Lin, Lianli Gao, Huimin Lu, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/abstract/document/9165187"},{coverUrl:e(1452),title:"Relation Regularized Scene Graph Generation",info:"Yuyu Guo, Lianli Gao, Jingkuan Song, Peng Wang, Nicu Sebe, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/9376912"},{coverUrl:e(4211),title:"Hierarchical Representation Network With Auxiliary Tasks for Video Captioning and Video Question Answering",info:"Lianli Gao, Yu Lei, Pengpeng Zeng, Jingkuan Song, Meng Wang, Heng Tao Shen",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/9592722"},{coverUrl:e(4172),title:"Video Question Answering With Prior Knowledge and Object-Sensitive Learning",info:"Pengpeng Zeng, Haonan Zhang, Lianli Gao, Jingkuan Song, Heng Tao Shen",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/9882977/"},{coverUrl:e(2060),title:"Fine-Grained Predicates Learning for Scene Graph Generation",info:"Xinyu Lyu, Lianli Gao, Yuyu Guo, Zhou Zhao, Hao Huang, Heng Tao Shen, Jingkuan Song",publish:"CVPR 2022",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2204.02597.pdf"},{coverUrl:e(8263),title:"Towards Open-Vocabulary Scene Graph Generation with Prompt-Based Finetuning",info:"Tao He, Lianli Gao, Jingkuan Song, Yuan-Fang Li",publish:"ECCV 2022",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2208.08165v3.pdf"},{coverUrl:e(5183),title:"S2 Transformer for Image Captioning",info:"Pengpeng Zeng, Haonan Zhang, Jingkuan Song, Lianli Gao",publish:"IJCAI 2022",codeUrl:"https://github.com/zchoi/S2-Transformer",pdfUrl:"https://www.ijcai.org/proceedings/2022/0224.pdf"},{coverUrl:e(2366),title:"DHHN: Dual Hierarchical Hybrid Network for Weakly-Supervised Audio-Visual Video Parsing",info:"Xun Jiang, Xing Xu, Zhiguo Chen, Jingran Zhang, Jingkuan Song, Fumin Shen, Huimin Lu, Heng Tao Shen",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/10.1145/3503161.3548309"},{coverUrl:e(7982),title:"Prompting for Multi-Modal Tracking",info:"Jinyu Yang, Zhe Li, Feng Zheng, Ales Leonardis, Jingkuan Song",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2207.14571.pdf"},{coverUrl:e(2575),title:"Progressive Tree-Structured Prototype Network for End-to-End Image Captioning",info:"Pengpeng Zeng, Jinkuan Zhu, Jingkuan Song, Lianli Gao",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2211.09460.pdf"},{coverUrl:e(4785),title:"Dynamic Scene Graph Generation via Temporal Prior Inference",info:"Shuang Wang, Lianli Gao, Xinyu Lyu, Yuyu Guo, Pengpeng Zeng, Jingkuan Song",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/10.1145/3503161.3548324"},{coverUrl:e(6639),title:"GuessWhich? Visual dialog with attentive memory network",info:"Lei Zhao, Xinyu Lyu, Jingkuan Song, Lianli Gao",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:"https://www.sciencedirect.com/science/article/pii/S0031320321000108"},{coverUrl:e(569),title:"Conceptual and Syntactical Cross-modal Alignment with Cross-level Consistency for Image-Text Matching",info:"Pengpeng Zeng, Lianli Gao, Xinyu Lyu, Shuaiqi Jing, Jingkuan Song",publish:"ACM Multimedia 2021",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/10.1145/3474085.3475380"},{coverUrl:e(9430),title:"BATCH: A Scalable Asymmetric Discrete Cross-Modal Hashing",info:"Yongxin Wang, Xin Luo, Liqiang Nie, Jingkuan Song, Wei Zhang, Xin-Shun Xu",publish:"IEEE Trans. Knowl. Data Eng.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/9001235"},{coverUrl:e(8007),title:"Rich Visual Knowledge-Based Augmentation Network for Visual Question Answering",info:"Liyang Zhang, Shuaicheng Liu, Donghao Liu, Pengpeng Zeng, Xiangpeng Li, Jingkuan Song, Lianli Gao",publish:"IEEE Trans. Neural Networks Learn. Syst.",codeUrl:"https://github.com/yyyanglz/KAN",pdfUrl:"https://ieeexplore.ieee.org/document/9199272"},{coverUrl:e(1051),title:"Exploiting Scene Graphs for Human-Object Interaction Detection",info:"Tao He, Lianli Gao, Jingkuan Song, Yuan-Fang Li",publish:"ICCV 2021",codeUrl:"https://github.com/ht014/%20SG2HOI",pdfUrl:"https://arxiv.org/pdf/2108.08584.pdf"},{coverUrl:e(4024),title:"From General to Specific: Informative Scene Graph Generation via Balance Adjustment",info:"Yuyu Guo, Lianli Gao, Xuanhan Wang, Yuxuan Hu, Xing Xu, Xu Lu, Heng Tao Shen, Jingkuan Song",publish:"ICCV 2021",codeUrl:"https://github.com/ZhuGeKongKong/SGG-G2S",pdfUrl:"https://openaccess.thecvf.com/content/ICCV2021/html/Guo_From_General_to_Specific_Informative_Scene_Graph_Generation_via_Balance_ICCV_2021_paper.html"},{coverUrl:e(9085),title:"A System for Interactive and Intelligent AD Auxiliary Screening",info:"Sen Yang, Qike Zhao, Lanxin Miao, Min Chen, Lianli Gao, Jingkuan Song, Weidong Le",publish:"ACM Multimedia 2021",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/abs/10.1145/3474085.3478549"},{coverUrl:e(2317),title:"Exploring Contextual-Aware Representation and Linguistic-Diverse Expression for Visual Dialog",info:"Xiangpeng Li, Lianli Gao, Lei Zhao, Jingkuan Song",publish:"ACM Multimedia 2021",codeUrl:"https://github.com/lixiangpengcs/CARE",pdfUrl:"https://dl.acm.org/doi/10.1145/3474085.3475360"},{coverUrl:e(2884),title:"Hierarchical LSTMs with Adaptive Attention for Visual Captioning",info:"Lianli Gao, Xiangpeng Li, Jingkuan Song, Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:"https://github.com/lixiangpengcs/Spatial-Temporal-Adaptive-Attention-for-Video-Captioning",pdfUrl:"https://ieeexplore.ieee.org/abstract/document/8620348"},{coverUrl:e(454),title:"Ternary Adversarial Networks With Self-Supervision for Zero-Shot Cross-Modal Retrieval",info:"Xing Xu, Huimin Lu, Jingkuan Song, Yang Yang, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/document/8771379"},{coverUrl:e(2641),title:"Learning from the Scene and Borrowing from the Rich: Tackling the Long Tail in Scene Graph Generation",info:"Tao He, Lianli Gao, Jingkuan Song, Jianfei Cai, Yuan-Fang Li",publish:"IJCAI 2020",codeUrl:null,pdfUrl:"https://www.ijcai.org/proceedings/2020/0082.pdf"},{coverUrl:e(7259),title:"One-shot Scene Graph Generation",info:"Yuyu Guo, Jingkuan Song, Lianli Gao, Heng Tao Shen",publish:"ACM Multimedia 2020",codeUrl:"https://github.com/gyy8426/OS-SGG",pdfUrl:"https://dl.acm.org/doi/abs/10.1145/3394171.3414025"},{coverUrl:e(2278),title:"From Deterministic to Generative: Multimodal Stochastic RNNs for Video Captioning",info:"Jingkuan Song, Yuyu Guo, Lianli Gao, Xuelong Li, Alan Hanjalic, Heng Tao Shen",publish:"IEEE Trans. Neural Networks Learn. Syst.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8438512"},{coverUrl:e(6857),title:"Structured Two-Stream Attention Network for Video Question Answering",info:"Lianli Gao, Pengpeng Zeng, Jingkuan Song, Yuan-Fang Li, Wu Liu, Tao Mei, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/4602"},{coverUrl:e(6620),title:"Perceptual Pyramid Adversarial Networks for Text-to-Image Synthesis",info:"Lianli Gao, Daiyuan Chen, Jingkuan Song, Xing Xu, Dongxiang Zhang, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/4844"},{coverUrl:e(4931),title:"Deliberate Attention Networks for Image Captioning",info:"Lianli Gao, Kaixuan Fan, Jingkuan Song, Xianglong Liu, Xing Xu, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/4845"},{coverUrl:e(6757),title:"Beyond RNNs: Positional Self-Attention with Co-Attention for Video Question Answering",info:"Xiangpeng Li, Jingkuan Song, Lianli Gao, Xianglong Liu, Wenbing Huang, Xiangnan He, Chuang Gan",publish:"AAAI 2019",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/4887"},{coverUrl:e(2132),title:"Open-Ended Long-Form Video Question Answering via Hierarchical Convolutional Self-Attention Networks",info:"Zhu Zhang, Zhou Zhao, Zhijie Lin, Jingkuan Song, Xiaofei He",publish:"IJCAI 2019",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1906.12158.pdf"},{coverUrl:e(5996),title:"Matching Images and Text with Multi-modal Tensor Fusion and Re-ranking",info:"Tan Wang, Xing Xu, Yang Yang, Alan Hanjalic, Heng Tao Shen, Jingkuan Song",publish:"ACM Multimedia 2019",codeUrl:"https://github.com/Wangt-CN/MTFN-RR-PyTorch-Code",pdfUrl:"https://arxiv.org/pdf/1908.04011.pdf"},{coverUrl:e(51),title:"Learnable Aggregating Net with Diversity Learning for Video Question Answering",info:"Xiangpeng Li, Lianli Gao, Xuanhan Wang, Wu Liu, Xing Xu, Heng Tao Shen, Jingkuan Song",publish:"ACM Multimedia 2019",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/abs/10.1145/3343031.3350971"},{coverUrl:e(1289),title:"From Pixels to Objects: Cubic Visual Attention for Visual Question Answering",info:"Jingkuan Song, Pengpeng Zeng, Lianli Gao, Heng Tao Shen",publish:"IJCAI 2018",codeUrl:null,pdfUrl:"https://www.ijcai.org/proceedings/2018/0126.pdf"},{coverUrl:e(4387),title:"Modal-adversarial Semantic Learning Network for Extendable Cross-modal Retrieval",info:"Xing Xu, Jingkuan Song, Huimin Lu, Yang Yang, Fumin Shen, Zi Huang",publish:"ICMR 2018",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/abs/10.1145/3206025.3206033"},{coverUrl:e(6141),title:"Examine before You Answer: Multi-task Learning with Adaptive-attentions for Multiple-choice VQA",info:"Lianli Gao, Pengpeng Zeng, Jingkuan Song, Xianglong Liu, Heng Tao Shen",publish:"ACM Multimedia 2018",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/10.1145/3240508.3240687"}]}}};const Gn=(0,s.Z)(Tn,[["render",Hn],["__scopeId","data-v-3891ab14"]]);var Jn=Gn;const Zn={class:"container"};function _n(n,i,e,o,t,r){const l=(0,a.up)("LinkBox"),s=(0,a.up)("ListWithCover");return(0,a.wg)(),(0,a.iD)("div",Zn,[(0,a.Wm)(l,{list:t.links},null,8,["list"]),(0,a.Wm)(s,{title:"AI Safety",list:t.papers},null,8,["list"])])}var Xn={name:"CompactReport",components:{ListWithCover:Q,LinkBox:on},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:e(733),title:"Patch-wise Attack for Fooling Deep Neural Network",info:"Lianli Gao, Qilong Zhang, Jingkuan Song, Xianglong Liu, Heng Tao Shen",publish:"ECCV 2020",codeUrl:"https://github.com/qilong-zhang/Patch-wise-iterative-attack",pdfUrl:"https://arxiv.org/pdf/2007.06765.pdf"},{coverUrl:e(3110),title:"Staircase Sign Method for Boosting Adversarial Attacks",info:"Qilong Zhang, Xiaosu Zhu, Jingkuan Song, Lianli Gao, Heng Tao Shen",publish:"CoRR abs/2104.09722 (2021)",codeUrl:"https://github.com/qilong-zhang/Staircase-sign-method",pdfUrl:"https://arxiv.org/pdf/2104.09722.pdf"},{coverUrl:e(6370),title:"Practical No-box Adversarial Attacks with Training-free Hybrid Image Transformation",info:"Qilong Zhang, Chaoning Zhang, Chaoqun Li, Jingkuan Song, Lianli Gao",publish:"CoRR abs/2203.04607 (2022)",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2203.04607.pdf"},{coverUrl:e(3795),title:"Frequency Domain Model Augmentation for Adversarial Attack",info:"Yuyang Long, Qilong Zhang, Boheng Zeng, Lianli Gao, Xianglong Liu, Jian Zhang, Jingkuan Song",publish:"ECCV 2022",codeUrl:"https://github.com/yuyang-long/SSA",pdfUrl:"https://arxiv.org/pdf/2207.05382v1.pdf"},{coverUrl:e(9006),title:"Practical Evaluation of Adversarial Robustness via Adaptive Auto Attack",info:"Ye Liu, Yaya Cheng, Lianli Gao, Xianglong Liu, Qilong Zhang, Jingkuan Song",publish:"CVPR 2022",codeUrl:"https://github.com/liuye6666/adaptive_auto_attack",pdfUrl:"https://arxiv.org/pdf/2203.05154.pdf"},{coverUrl:e(2193),title:"Push & Pull: Transferable Adversarial Examples With Attentive Attack",info:"Lianli Gao, Zijie Huang, Jingkuan Song, Yang Yang, Heng Tao Shen",publish:"IEEE Trans. Multim. ",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9430730"},{coverUrl:e(937),title:"Feature Space Targeted Attacks by Statistic Alignment",info:"Lianli Gao, Yaya Cheng, Qilong Zhang, Xing Xu, Jingkuan Song",publish:"IJCAI 2021 ",codeUrl:"https://github.com/yaya-cheng/PAA-GAA",pdfUrl:"https://arxiv.org/pdf/2105.11645.pdf"},{coverUrl:e(3251),title:"Natural Color Fool: Towards Boosting Black-box Unrestricted Attacks",info:"Shengming Yuan, Qilong Zhang, Lianli Gao, Yaya Cheng, Jingkuan Song",publish:"NeurIPS 2022 ",codeUrl:"https://github.com/ylhz/Natural-Color-Fool",pdfUrl:"https://arxiv.org/pdf/2210.02041v1.pdf"},{coverUrl:e(1007),title:"Beyond ImageNet Attack: Towards Crafting Adversarial Examples for Black-box Domains",info:"Qilong Zhang, Xiaodan Li, Yuefeng Chen, Jingkuan Song, Lianli Gao, Yuan He, Hui Xue",publish:"ICLR 2022",codeUrl:"https://github.com/Alibaba-AAIG/Beyond-ImageNet-Attack",pdfUrl:"https://arxiv.org/pdf/2201.11528.pdf"},{coverUrl:e(4707),title:"Explainable deep learning for efficient and robust pattern recognition: A survey of recent developments",info:"Xiao Bai, Xiang Wang, Xianglong Liu, Qiang Liu, Jingkuan Song, Nicu Sebe, Been Kim",publish:"Pattern Recognit. ",codeUrl:null,pdfUrl:"https://www.sciencedirect.com/science/article/pii/S0031320321002892"}]}}};const Pn=(0,s.Z)(Xn,[["render",_n],["__scopeId","data-v-c2f2ffa2"]]);var Mn=Pn;const En=[{path:"/",redirect:"/index"},{path:"/index",component:rn},{path:"/our-group",component:Ln},{path:"/compact-report",component:wn},{path:"/cross-media-analysis",component:Jn},{path:"/ai-safety",component:Mn}],Dn=(0,u.p7)({history:(0,u.r5)(),routes:En,scrollBehavior(){return{left:0,top:0}}}),Rn=(0,o.ri)(p);Rn.use(Dn),Rn.mount("#app")},733:function(n,i,e){n.exports=e.p+"img/aisafety1.ab967552.png"},4707:function(n,i,e){n.exports=e.p+"img/aisafety10.1d6fdba4.png"},3110:function(n,i,e){n.exports=e.p+"img/aisafety2.6c4159d5.png"},6370:function(n,i,e){n.exports=e.p+"img/aisafety3.e418d312.png"},3795:function(n,i,e){n.exports=e.p+"img/aisafety4.76e4345a.png"},9006:function(n,i,e){n.exports=e.p+"img/aisafety5.6efb3a12.png"},2193:function(n,i,e){n.exports=e.p+"img/aisafety6.22ea89ca.png"},937:function(n,i,e){n.exports=e.p+"img/aisafety7.7ffe93e3.png"},3251:function(n,i,e){n.exports=e.p+"img/aisafety8.ee567f82.png"},1007:function(n,i,e){n.exports=e.p+"img/aisafety9.14f13655.png"},8308:function(n,i,e){n.exports=e.p+"img/avatar.8f49a9ae.png"},3910:function(n,i,e){n.exports=e.p+"img/compactreport1.ebab9a34.png"},9370:function(n,i,e){n.exports=e.p+"img/compactreport10.a293f1c0.png"},5736:function(n,i,e){n.exports=e.p+"img/compactreport11.c9946f8d.png"},4640:function(n,i,e){n.exports=e.p+"img/compactreport12.07fac307.png"},3747:function(n,i,e){n.exports=e.p+"img/compactreport13.8c8ddba6.png"},2055:function(n,i,e){n.exports=e.p+"img/compactreport14.7b62d2ff.png"},4552:function(n,i,e){n.exports=e.p+"img/compactreport15.660e6d17.png"},3233:function(n,i,e){n.exports=e.p+"img/compactreport16.c48a7fe1.png"},5611:function(n,i,e){n.exports=e.p+"img/compactreport17.85785284.png"},2765:function(n,i,e){n.exports=e.p+"img/compactreport18.44a63dca.png"},1599:function(n,i,e){n.exports=e.p+"img/compactreport19.14a002a3.png"},4145:function(n,i,e){n.exports=e.p+"img/compactreport2.c23e0941.png"},7189:function(n,i,e){n.exports=e.p+"img/compactreport20.087301fa.png"},4805:function(n,i,e){n.exports=e.p+"img/compactreport21.e3dad006.png"},4784:function(n,i,e){n.exports=e.p+"img/compactreport22.b098ae93.png"},5034:function(n,i,e){n.exports=e.p+"img/compactreport23.e8aacd88.png"},2722:function(n,i,e){n.exports=e.p+"img/compactreport24.d6116c53.png"},7614:function(n,i,e){n.exports=e.p+"img/compactreport3.8a220c35.png"},6424:function(n,i,e){n.exports=e.p+"img/compactreport4.28978424.png"},7540:function(n,i,e){n.exports=e.p+"img/compactreport5.e94889b5.png"},2773:function(n,i,e){n.exports=e.p+"img/compactreport6.bbd07bd3.png"},5841:function(n,i,e){n.exports=e.p+"img/compactreport7.451d3093.png"},7873:function(n,i,e){n.exports=e.p+"img/compactreport8.d3ac5e9e.png"},1166:function(n,i,e){n.exports=e.p+"img/compactreport9.1f5d6816.png"},6159:function(n,i,e){n.exports=e.p+"img/crossmedia0.82b0f9a4.png"},6314:function(n,i,e){n.exports=e.p+"img/crossmedia1.a3dfe63c.png"},2575:function(n,i,e){n.exports=e.p+"img/crossmedia10.eecead76.png"},4785:function(n,i,e){n.exports=e.p+"img/crossmedia11.8bc5cdaf.png"},6639:function(n,i,e){n.exports=e.p+"img/crossmedia12.cd548304.png"},569:function(n,i,e){n.exports=e.p+"img/crossmedia13.548d7bc9.png"},9430:function(n,i,e){n.exports=e.p+"img/crossmedia14.fc9f752b.png"},8007:function(n,i,e){n.exports=e.p+"img/crossmedia15.053d94ce.png"},1051:function(n,i,e){n.exports=e.p+"img/crossmedia16.515b9f07.png"},4024:function(n,i,e){n.exports=e.p+"img/crossmedia17.bc5d4754.png"},9085:function(n,i,e){n.exports=e.p+"img/crossmedia18.520ec4cd.png"},2317:function(n,i,e){n.exports=e.p+"img/crossmedia19.425a4e5e.png"},1452:function(n,i,e){n.exports=e.p+"img/crossmedia2.bf06d34e.png"},2884:function(n,i,e){n.exports=e.p+"img/crossmedia20.f600a564.png"},454:function(n,i,e){n.exports=e.p+"img/crossmedia21.bc756d57.png"},2641:function(n,i,e){n.exports=e.p+"img/crossmedia22.b444c026.png"},7259:function(n,i,e){n.exports=e.p+"img/crossmedia23.a4396055.png"},2278:function(n,i,e){n.exports=e.p+"img/crossmedia24.fd66a8f8.png"},6857:function(n,i,e){n.exports=e.p+"img/crossmedia25.4487b233.png"},6620:function(n,i,e){n.exports=e.p+"img/crossmedia26.a7775ce2.png"},4931:function(n,i,e){n.exports=e.p+"img/crossmedia27.a4cc8314.png"},6757:function(n,i,e){n.exports=e.p+"img/crossmedia28.8117ae52.png"},2132:function(n,i,e){n.exports=e.p+"img/crossmedia29.1492bc02.png"},4211:function(n,i,e){n.exports=e.p+"img/crossmedia3.b837d60b.png"},5996:function(n,i,e){n.exports=e.p+"img/crossmedia30.0db0ab3e.png"},51:function(n,i,e){n.exports=e.p+"img/crossmedia31.27cfab1e.png"},1289:function(n,i,e){n.exports=e.p+"img/crossmedia32.64ff82f9.png"},4387:function(n,i,e){n.exports=e.p+"img/crossmedia33.c4a9a6a2.png"},6141:function(n,i,e){n.exports=e.p+"img/crossmedia34.9a49fad0.png"},4172:function(n,i,e){n.exports=e.p+"img/crossmedia4.ff36076f.png"},2060:function(n,i,e){n.exports=e.p+"img/crossmedia5.ffa43147.png"},8263:function(n,i,e){n.exports=e.p+"img/crossmedia6.e205f486.png"},5183:function(n,i,e){n.exports=e.p+"img/crossmedia7.fe8fbf22.png"},2366:function(n,i,e){n.exports=e.p+"img/crossmedia8.167319a9.png"},7982:function(n,i,e){n.exports=e.p+"img/crossmedia9.af3c1ff7.png"},3585:function(n,i,e){n.exports=e.p+"img/highlight1.b249c2a8.png"},9809:function(n,i,e){n.exports=e.p+"img/highlight2.68597392.png"},9560:function(n,i,e){n.exports=e.p+"img/highlight3.ca2744ae.png"},6518:function(n,i,e){n.exports=e.p+"img/highlight4.996bfe6a.png"},118:function(n,i,e){n.exports=e.p+"img/highlight5.a24b97fb.png"},2671:function(n,i,e){n.exports=e.p+"img/highlight6.cbe1e454.png"}},i={};function e(o){var a=i[o];if(void 0!==a)return a.exports;var t=i[o]={exports:{}};return n[o](t,t.exports,e),t.exports}e.m=n,function(){var n=[];e.O=function(i,o,a,t){if(!o){var r=1/0;for(p=0;p<n.length;p++){o=n[p][0],a=n[p][1],t=n[p][2];for(var l=!0,s=0;s<o.length;s++)(!1&t||r>=t)&&Object.keys(e.O).every((function(n){return e.O[n](o[s])}))?o.splice(s--,1):(l=!1,t<r&&(r=t));if(l){n.splice(p--,1);var g=a();void 0!==g&&(i=g)}}return i}t=t||0;for(var p=n.length;p>0&&n[p-1][2]>t;p--)n[p]=n[p-1];n[p]=[o,a,t]}}(),function(){e.n=function(n){var i=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(i,{a:i}),i}}(),function(){e.d=function(n,i){for(var o in i)e.o(i,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:i[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)}}(),function(){e.p=""}(),function(){var n={143:0};e.O.j=function(i){return 0===n[i]};var i=function(i,o){var a,t,r=o[0],l=o[1],s=o[2],g=0;if(r.some((function(i){return 0!==n[i]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(s)var p=s(e)}for(i&&i(o);g<r.length;g++)t=r[g],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(p)},o=self["webpackChunksongjingkuan"]=self["webpackChunksongjingkuan"]||[];o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9361)}));o=e.O(o)})();
//# sourceMappingURL=app.8da3c907.js.map