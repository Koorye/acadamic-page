(function(){"use strict";var n={9211:function(n,e,i){var a=i(9242),o=i(3396);const t={id:"container"};function r(n,e,i,a,r,l){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",t,[(0,o.Wm)(s)])}var l={name:"App",components:{}},s=i(89);const u=(0,s.Z)(l,[["render",r]]);var p=u,g=i(2483),c=i(7139);const d=n=>((0,o.dD)("data-v-903e6dce"),n=n(),(0,o.Cn)(),n),f={class:"container"},h={class:"info-box"},m={class:"avatar-box"},v=["src"],U={class:"info"},S={class:"job-title"},b=d((()=>(0,o._)("div",{class:"pad"},null,-1)));function A(n,e,i,a,t,r){const l=(0,o.up)("SimpleContent"),s=(0,o.up)("LinkBox"),u=(0,o.up)("SimpleList"),p=(0,o.up)("ListWithCover");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",h,[(0,o._)("div",m,[(0,o._)("img",{src:t.avatarUrl},null,8,v)]),(0,o._)("div",U,[(0,o._)("h1",null,(0,c.zw)(t.name),1),(0,o._)("div",S,(0,c.zw)(t.jobTitle),1),(0,o.Wm)(l,{list:t.intros},null,8,["list"]),(0,o.Wm)(s,{list:t.links},null,8,["list"])]),b]),(0,o.Wm)(u,{list:t.news},null,8,["list"]),(0,o.Wm)(p,{title:"Highlighted Papers",list:t.highlights},null,8,["list"])])}const L={class:"sc-container"},k=["innerHTML"];function x(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.list,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id},[(0,o._)("div",{class:"sc-item",innerHTML:n},null,8,k)])))),128))])}var C={name:"SimpleContent",props:{list:{type:Array,default:()=>[]}}};const y=(0,s.Z)(C,[["render",x],["__scopeId","data-v-ae616934"]]);var I=y;const w={class:"sl-container"},T=["innerHTML"];function H(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.list,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id},[(0,o._)("li",{innerHTML:n},null,8,T)])))),128))])}var J={name:"SimpleList",props:{list:{type:Array,default:()=>[]}}};const G=(0,s.Z)(J,[["render",H],["__scopeId","data-v-5c230712"]]);var P=G;const M={class:"lc-container"},E={class:"lc-box"},X={class:"lc-cover"},Z=["src"],_={class:"lc-title"},R={class:"lc-info"},D={class:"lc-link-box"},W={class:"lc-publish"},N=["href"],B=["href"];function V(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("h2",null,(0,c.zw)(i.title),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.list,(n=>((0,o.wg)(),(0,o.iD)("div",{key:n.id},[(0,o._)("div",E,[(0,o._)("div",X,[(0,o._)("img",{src:n.coverUrl},null,8,Z)]),(0,o._)("div",null,[(0,o._)("div",_,(0,c.zw)(n.title),1),(0,o._)("div",R,(0,c.zw)(n.info),1),(0,o._)("div",D,[(0,o._)("div",W,(0,c.zw)(n.publish),1),null!=n.pdfUrl?((0,o.wg)(),(0,o.iD)("a",{key:0,class:"lc-link",href:n.pdfUrl},"PDF",8,N)):(0,o.kq)("",!0),null!=n.codeUrl?((0,o.wg)(),(0,o.iD)("a",{key:1,class:"lc-link",href:n.codeUrl},"CODE",8,B)):(0,o.kq)("",!0)])])])])))),128))])}var Y={name:"ListWithCover",props:{title:{type:String,default:()=>"title"},list:{type:Array,default:()=>[]}}};const q=(0,s.Z)(Y,[["render",V],["__scopeId","data-v-039ac2f7"]]);var F=q;const Q={class:"l-container"},j={class:"l-box"},z=["href"],O={key:0,class:"sep"};function K(n,e,i,a,t,r){return(0,o.wg)(),(0,o.iD)("p",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.list,((n,e)=>((0,o.wg)(),(0,o.iD)("span",j,[(0,o._)("a",{href:n.url,class:"l-link"},(0,c.zw)(n.name),9,z),e!=i.list.length-1?((0,o.wg)(),(0,o.iD)("span",O," | ")):(0,o.kq)("",!0)])))),256))])}var $={name:"LinkBox",props:{list:{type:Array,default:()=>[]}}};const nn=(0,s.Z)($,[["render",K],["__scopeId","data-v-1f9f0eb2"]]);var en=nn,an={name:"IndexPage",components:{SimpleContent:I,SimpleList:P,ListWithCover:F,LinkBox:en},data(){return{avatarUrl:i(8308),name:"JingKuan Song",jobTitle:"Professor",intros:["University of Electronic Science and Technology of China<br/>Email: jingkuan.song@gmail.com<br/>Office: No.A304 Innovation center","Jingkuan Song is a full professor with University of Electronic Science and Technology of China (UESTC) . He joined Columbia University as a Postdoc Research Scientist (2016-2017), and University of Trento as a Research Fellow (2014-2016). He obtained his PhD degree in 2014 from The University of Queensland (UQ), Australia (advised by Prof. Heng Tao Shen). His research interest includes large-scale multimedia retrieval, image/video segmentation and image/video understading using hashing, graph learning and deep learning techniques. He was the winner of the Best Paper Award in ICPR (2016, Mexico), Best Student Paper Award in Australian Database Conference (2017, Australia), and Best Paper Honorable Mention Award (2017, Japan). He is Guest Editor of TMM, WWWJ and he is PC member of CVPR’18, MM'18, IJCAI'18, etc.","<b>I am looking for highly motivated PhD students, Postdoctorals and Assistant Professors to conduct world-class research in my team. Please send your CV or enquiries to my email.</b>"],links:[{name:"Our Group",url:"#/our-group"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"},{name:"Google Scholar",url:"https://scholar.google.com/citations?hl=en&user=F5Zy9V4AAAAJ"},{name:"DBLP",url:"https://dblp.uni-trier.de/pid/70/10575.html"}],news:['<span style="color: red; font-weight: bold;">NEW</span> May 2021: I will serve as Technical Demo Chairs for ACM MM 21!',"May 2021: 2 IJCAI & 1 AAAI are accepted!","Aug 2020: 4 ACM MM & 2 IJCAI & 1 ECCV & 1 AAAI are accepted!","Jun 2019: I will serve as Associate Editor for TOMM!","May 2019: 5 IJCAI papers are accepted!","Feb 2019: 4 AAAI & 1 TPAMI & 1 TIP papers are accepted!"],highlights:[{coverUrl:i(3585),title:"A Lower Bound of Hash Codes' Performance",info:"Xiaosu Zhu, Jingkuan Song, Yu Lei, Lianli Gao, Heng Tao Shen",publish:"NeurIPS 2022",codeUrl:" https://github.com/VL-Group/LBHash",pdfUrl:"https://arxiv.org/pdf/2210.05899.pdf"},{coverUrl:i(9809),title:"Unified Binary Generative Adversarial Network for Image Retrieval and Compression",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Alan Hanjalic, Heng Tao Shen:",publish:"IJCV 2020",codeUrl:null,pdfUrl:"https://link.springer.com/content/pdf/10.1007/s11263-020-01305-2.pdf?pdf=button"},{coverUrl:i(9560),title:"Label-Guided Generative Adversarial Network for Realistic Image Synthesis",info:"Junchen Zhu, Lianli Gao, Jingkuan Song, Yuan-Fang Li, Feng Zheng, Xuelong Li, Heng Tao Shen",publish:"TPAMI, 2022",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9810175"},{coverUrl:i(6518),title:"Hierarchical LSTMs with Adaptive Attention for Visual Captioning",info:"Jingkuan Song, Xiangpeng Li, Lianli Gao, Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1812.11004v1.pdf"},{coverUrl:i(118),title:"Natural Color Fool: Towards Boosting Black-box Unrestricted Attacks",info:"Shengming Yuan, Qilong Zhang, Lianli Gao, Yaya Cheng, Jingkuan Song",publish:"NeurIPS 2022",codeUrl:"https://github.com/ylhz/Natural-Color-Fool",pdfUrl:"https://arxiv.org/pdf/2210.02041v1.pdf"},{coverUrl:i(2671),title:"Beyond ImageNet Attack: Towards Crafting Adversarial Examples for Black-box Domains",info:"Qilong Zhang, Xiaodan Li, Yuefeng Chen, Jingkuan Song, Lianli Gao, Yuan He, Hui Xue",publish:"ICLR 2022",codeUrl:"https://github.com/Alibaba-AAIG/Beyond-ImageNet-Attack",pdfUrl:"https://arxiv.org/pdf/2201.11528v4.pdf"}]}}};const on=(0,s.Z)(an,[["render",A],["__scopeId","data-v-903e6dce"]]);var tn=on;const rn={class:"container"};function ln(n,e,i,a,t,r){const l=(0,o.up)("LinkBox"),s=(0,o.up)("ListWithTitle");return(0,o.wg)(),(0,o.iD)("div",rn,[(0,o.Wm)(l,{list:t.links},null,8,["list"]),(0,o.Wm)(s,{title:"Staff 团队教师",list:t.staff},null,8,["list"]),(0,o.Wm)(s,{title:"Ph.D. students 博士生",list:t.phd},null,8,["title","list"]),(0,o.Wm)(s,{title:"Master students 硕士生",list:t.master},null,8,["list"]),(0,o.Wm)(s,{title:"Alumni 以往学生",list:t.alumui},null,8,["list"]),(0,o.Wm)(s,{title:"Outstanding undergraduate students 出色本科生",list:t.outstanding},null,8,["list"])])}const sn={class:"lt-container"};function un(n,e,i,a,t,r){const l=(0,o.up)("SimpleList");return(0,o.wg)(),(0,o.iD)("div",sn,[(0,o._)("h1",null,(0,c.zw)(i.title),1),(0,o.Wm)(l,{list:i.list},null,8,["list"])])}var pn={name:"ListWithTitle",components:{SimpleList:P},props:{title:{type:String,default:()=>"msg"},list:{type:Array,default:()=>[]}}};const gn=(0,s.Z)(pn,[["render",un],["__scopeId","data-v-bcfa0470"]]);var cn=gn,dn={name:"OurGroup",components:{ListWithTitle:cn,LinkBox:en},data(){return{links:[{name:"Back",url:"#/"}],staff:["2020: xxx","2021: xxx","2022: xxx"],phd:["2020: xxx","2021: xxx","2022: xxx"],master:["2020: xxx","2021: xxx","2022: xxx"],alumui:["2020: xxx","2021: xxx","2022: xxx"],outstanding:["2020: xxx","2021: xxx","2022: xxx"]}}};const fn=(0,s.Z)(dn,[["render",ln]]);var hn=fn;const mn={class:"container"};function vn(n,e,i,a,t,r){const l=(0,o.up)("LinkBox"),s=(0,o.up)("ListWithCover");return(0,o.wg)(),(0,o.iD)("div",mn,[(0,o.Wm)(l,{list:t.links},null,8,["list"]),(0,o.Wm)(s,{title:"Compact Reports",list:t.papers},null,8,["list"])])}var Un={name:"CompactReport",components:{ListWithCover:F,LinkBox:en},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:i(3910),title:"Deep region hashing for generic instance search from images",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Heng Tao Shen",publish:"AAAI 2018",codeUrl:null,pdfUrl:"https://dl.acm.org/doi/pdf/10.5555/3504035.3504085"},{coverUrl:i(4145),title:"Binary Generative Adversarial Networks for Image Retrieval",info:"Jingkuan Song, Tao He, Lianli Gao, Xing Xu, Alan Hanjalic, Heng Tao Shen",publish:"AAAI 2018",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1708.04150v1.pdf"},{coverUrl:i(7614),title:"3D Self-Attention for Unsupervised Video Quantization",info:"Jingkuan Song, Ruimin Lang, Xiaosu Zhu, Xing Xu, Lianli Gao, Heng Tao Shen",publish:"SIGIR 2020",codeUrl:"https://github.com/brownwolf/3D-UVQ",pdfUrl:"https://dl.acm.org/doi/pdf/10.1145/3397271.3401122"},{coverUrl:i(6424),title:"Self-Supervised Video Hashing With Hierarchical Binary Auto-Encoder",info:"Jingkuan Song, Hanwang Zhang, Xiangpeng Li, Lianli Gao, Meng Wang, Richang Hong",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1802.02305v1.pdf"},{coverUrl:i(7540),title:"Quantization-based hashing: a general framework for scalable image and video retrieval",info:"Jingkuan Song, Lianli Gao, Li Liu, Xiaofeng Zhu, Nicu Sebe",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:"https://www.sciencedirect.com/science/article/pii/S0031320317301322"},{coverUrl:i(2773),title:"One Network for Multi-Domains: Domain Adaptive Hashing with Intersectant Generative Adversarial Networks",info:"Tao He, Yuan-Fang Li, Lianli Gao, Dongxiang Zhang, Jingkuan Song",publish:"IJCAI 2019",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1907.00612v1.pdf"},{coverUrl:i(5841),title:"Deep Recurrent Quantization for Generating Sequential Binary Codes",info:"Jingkuan Song, Xiaosu Zhu, Lianli Gao, Xin-Shun Xu, Wu Liu, Heng Tao Shen",publish:"IJCAI 2019",codeUrl:"https://github.com/cfm-uestc/DRQ",pdfUrl:"https://arxiv.org/pdf/1906.06699v2.pdf"},{coverUrl:i(7873),title:"Beyond Product Quantization: Deep Progressive Quantization for Image Retrieval",info:"Lianli Gao, Xiaosu Zhu, Jingkuan Song, Zhou Zhao, Heng Tao Shen",publish:"IJCAI 2019",codeUrl:"https://github.com/cfm-uestc/DPQ",pdfUrl:"https://arxiv.org/pdf/1906.06698.pdf"},{coverUrl:i(1166),title:"Learning Efficient Hash Codes for Fast Graph-Based Data Similarity Retrieval",info:"Jinbao Wang, Shuo Xu, Feng Zheng, Ke Lu, Jingkuan Song, Ling Shao",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9474952"},{coverUrl:i(9370),title:"Binary neural networks: A survey",info:"Haotong Qin, Ruihao Gong, Xianglong Liu, Xiao Bai, Jingkuan Song, Nicu Sebe",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2004.03333.pdf"},{coverUrl:i(5736),title:"A Survey on Learning to Hash",info:"Jingdong Wang, Ting Zhang, Jingkuan Song, Nicu Sebe, and Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1606.00185.pdf"},{coverUrl:i(4640),title:"Unified Multivariate Gaussian Mixture for Efficient Neural Image Compression",info:"Xiaosu Zhu, Jingkuan Song, Lianli Gao, Feng Zheng, Heng Tao Shen",publish:"CVPR 2022",codeUrl:"https://github.com/xiaosu-zhu/McQuic",pdfUrl:"https://arxiv.org/pdf/2203.10897.pdf"},{coverUrl:i(3747),title:"Cross-Paced Representation Learning With Partial Curricula for Sketch-Based Image Retrieval",info:"Dan Xu, Xavier Alameda-Pineda, Jingkuan Song, Elisa Ricci, Nicu Sebe:",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1803.01504.pdf"},{coverUrl:i(2055),title:"SNEQ: Semi-Supervised Attributed Network Embedding with Attention-Based Quantisation",info:"Tao He, Lianli Gao, Jingkuan Song, Xin Wang, Kejie Huang, Yuanfang Li",publish:"AAAI 2020",codeUrl:null,pdfUrl:"https://ojs.aaai.org/index.php/AAAI/article/view/5832"},{coverUrl:i(4552),title:"3D Self-Attention for Unsupervised Video Quantization",info:"Zhu Zhang, Zhou Zhao, Zhijie Lin, Jingkuan Song, Deng Cai",publish:"IJCAI 2019",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1906.12165.pdf"},{coverUrl:i(3233),title:"NAIS: Neural Attentive Item Similarity Model for Recommendation",info:"Jingkuan Song, Ruimin Lang, Xiaosu Zhu, Xing Xu, Lianli Gao, Heng Tao Shen",publish:"IEEE Trans. Knowl. Data Eng.",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/1809.07053.pdf"},{coverUrl:i(5611),title:"Deep Self-Taught Hashing for Image Retrieval",info:"Yu Liu, Jingkuan Song, Ke Zhou, Lingyu Yan, Li Liu, Fuhao Zou, Ling Shao",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8354809"},{coverUrl:i(2765),title:"Salience-Guided Cascaded Suppression Network for Person Re-Identification",info:"Xuesong Chen, Canmiao Fu, Yong Zhao, Feng Zheng, Jingkuan Song, Rongrong Ji, Yi Yang",publish:"CVPR 2020",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_Salience-Guided_Cascaded_Suppression_Network_for_Person_Re-Identification_CVPR_2020_paper.pdf"},{coverUrl:i(1599),title:"Forward and Backward Information Retention for Accurate Binary Neural Networks",info:"Haotong Qin, Ruihao Gong, Xianglong Liu, Mingzhu Shen, Ziran Wei, Fengwei Yu, Jingkuan Song",publish:"CVPR 2020",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Qin_Forward_and_Backward_Information_Retention_for_Accurate_Binary_Neural_Networks_CVPR_2020_paper.pdf"},{coverUrl:i(7189),title:"Camera-Agnostic Person Re-Identification via Adversarial Disentangling Learning",info:"Hao Ni, Jingkuan Song, Xiaosu Zhu, Feng Zheng, Lianli Gao",publish:"ACM Multimedia 2021",codeUrl:"https://github.com/luckyaci/ADL_ReID",pdfUrl:"https://dl.acm.org/doi/pdf/10.1145/3474085.3475361"},{coverUrl:i(4805),title:"Meta Distribution Alignment for Generalizable Person Re-Identification",info:"Hao Ni, Jingkuan Song, Xiaopeng Luo, Feng Zheng, Wen Li, Heng Tao Shen",publish:"CVPR 2022",codeUrl:"https://github.com/haoni0812/MDA.git",pdfUrl:"https://openaccess.thecvf.com/content/CVPR2022/papers/Ni_Meta_Distribution_Alignment_for_Generalizable_Person_Re-Identification_CVPR_2022_paper.pdf"},{coverUrl:i(4784),title:"Complementary Binary Quantization for Joint Multiple Indexing",info:"Qiang Fu, Xu Han, Xianglong Liu, Jingkuan Song, Cheng Deng",publish:"IJCAI 2018",codeUrl:null,pdfUrl:"https://www.ijcai.org/proceedings/2018/0292.pdf"},{coverUrl:i(5034),title:"Continual Referring Expression Comprehension via Dual Modular Memorization",info:"Heng Tao Shen, Cheng Chen, Peng Wang, Lianli Gao, Meng Wang, Jingkuan Song",publish:"IEEE Trans. Image Process.",codeUrl:"https://github.com/zackschen/DMM",pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9916159"},{coverUrl:i(2722),title:"Towards Accurate Georeferenced Video Search With Camera Field of View Modeling",info:"Jie Shao, Gang Hu, Jingkuan Song, Xueliang Liu, Heng Tao Shen",publish:"IEEE Trans. Circuits Syst. Video Technol.",codeUrl:null,pdfUrl:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_Salience-Guided_Cascaded_Suppression_Network_for_Person_Re-Identification_CVPR_2020_paper.pdf"}]}}};const Sn=(0,s.Z)(Un,[["render",vn]]);var bn=Sn;const An={class:"container"};function Ln(n,e,i,a,t,r){const l=(0,o.up)("LinkBox"),s=(0,o.up)("ListWithCover");return(0,o.wg)(),(0,o.iD)("div",An,[(0,o.Wm)(l,{list:t.links},null,8,["list"]),(0,o.Wm)(s,{title:"Cross Media Analysis",list:t.papers},null,8,["list"])])}var kn={name:"CompactReport",components:{ListWithCover:F,LinkBox:en},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:"require(@/assets/compactreport0.png)",title:"Progressive Meta-Learning With Curriculum",info:"Ji Zhang, Jingkuan Song, Lianli Gao, Ye Liu, Heng Tao Shen",publish:"IEEE Trans. Circuits Syst. Video Technol.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport1.png)",title:"Learning Cross-Modal Common Representations by Private-Shared Subspaces Separation",info:"Xing Xu, Kaiyi Lin, Lianli Gao, Huimin Lu, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport2.png)",title:"Relation Regularized Scene Graph Generation",info:"Yuyu Guo, Lianli Gao, Jingkuan Song, Peng Wang, Nicu Sebe, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport3.png)",title:"Hierarchical Representation Network With Auxiliary Tasks for Video Captioning and Video Question Answering",info:"Lianli Gao, Yu Lei, Pengpeng Zeng, Jingkuan Song, Meng Wang, Heng Tao Shen",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport4.png)",title:"Video Question Answering With Prior Knowledge and Object-Sensitive Learning",info:"Pengpeng Zeng, Haonan Zhang, Lianli Gao, Jingkuan Song, Heng Tao Shen",publish:"IEEE Trans. Image Process.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport5.png)",title:"Fine-Grained Predicates Learning for Scene Graph Generation",info:"Xinyu Lyu, Lianli Gao, Yuyu Guo, Zhou Zhao, Hao Huang, Heng Tao Shen, Jingkuan Song",publish:"CVPR 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport6.png)",title:"Towards Open-Vocabulary Scene Graph Generation with Prompt-Based Finetuning",info:"Tao He, Lianli Gao, Jingkuan Song, Yuan-Fang Li",publish:"ECCV (28) 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport7.png)",title:"S2 Transformer for Image Captioning",info:"Pengpeng Zeng, Haonan Zhang, Jingkuan Song, Lianli Gao",publish:"IJCAI 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport8.png)",title:"DHHN: Dual Hierarchical Hybrid Network for Weakly-Supervised Audio-Visual Video Parsing",info:"Xun Jiang, Xing Xu, Zhiguo Chen, Jingran Zhang, Jingkuan Song, Fumin Shen, Huimin Lu, Heng Tao Shen",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport9.png)",title:"Prompting for Multi-Modal Tracking",info:"Jinyu Yang, Zhe Li, Feng Zheng, Ales Leonardis, Jingkuan Song",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport10.png)",title:"Progressive Tree-Structured Prototype Network for End-to-End Image Captioning",info:"Pengpeng Zeng, Jinkuan Zhu, Jingkuan Song, Lianli Gao",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport11.png)",title:"Dynamic Scene Graph Generation via Temporal Prior Inference",info:"Shuang Wang, Lianli Gao, Xinyu Lyu, Yuyu Guo, Pengpeng Zeng, Jingkuan Song",publish:"ACM Multimedia 2022",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport12.png)",title:"GuessWhich? Visual dialog with attentive memory network",info:"Lei Zhao, Xinyu Lyu, Jingkuan Song, Lianli Gao",publish:"Pattern Recognit.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport13.png)",title:"Conceptual and Syntactical Cross-modal Alignment with Cross-level Consistency for Image-Text Matching",info:"Pengpeng Zeng, Lianli Gao, Xinyu Lyu, Shuaiqi Jing, Jingkuan Song",publish:"ACM Multimedia 2021",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport14.png)",title:"BATCH: A Scalable Asymmetric Discrete Cross-Modal Hashing",info:"Yongxin Wang, Xin Luo, Liqiang Nie, Jingkuan Song, Wei Zhang, Xin-Shun Xu",publish:"IEEE Trans. Knowl. Data Eng.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport15.png)",title:"Rich Visual Knowledge-Based Augmentation Network for Visual Question Answering",info:"Liyang Zhang, Shuaicheng Liu, Donghao Liu, Pengpeng Zeng, Xiangpeng Li, Jingkuan Song, Lianli Gao",publish:"IEEE Trans. Neural Networks Learn. Syst.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport16.png)",title:"Exploiting Scene Graphs for Human-Object Interaction Detection",info:"Tao He, Lianli Gao, Jingkuan Song, Yuan-Fang Li",publish:"ICCV 2021",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport17.png)",title:"From General to Specific: Informative Scene Graph Generation via Balance Adjustment",info:"Yuyu Guo, Lianli Gao, Xuanhan Wang, Yuxuan Hu, Xing Xu, Xu Lu, Heng Tao Shen, Jingkuan Song",publish:"ICCV 2021",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport18.png)",title:"A System for Interactive and Intelligent AD Auxiliary Screening",info:"Sen Yang, Qike Zhao, Lanxin Miao, Min Chen, Lianli Gao, Jingkuan Song, Weidong Le",publish:"ACM Multimedia 2021",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport19.png)",title:"Exploring Contextual-Aware Representation and Linguistic-Diverse Expression for Visual Dialog",info:"Xiangpeng Li, Lianli Gao, Lei Zhao, Jingkuan Song",publish:"ACM Multimedia 2021",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport20.png)",title:"Hierarchical LSTMs with Adaptive Attention for Visual Captioning",info:"Lianli Gao, Xiangpeng Li, Jingkuan Song, Heng Tao Shen",publish:"IEEE Trans. Pattern Anal. Mach. Intell.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport21.png)",title:"Ternary Adversarial Networks With Self-Supervision for Zero-Shot Cross-Modal Retrieval",info:"Xing Xu, Huimin Lu, Jingkuan Song, Yang Yang, Heng Tao Shen, Xuelong Li",publish:"IEEE Trans. Cybern.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport22.png)",title:"Learning from the Scene and Borrowing from the Rich: Tackling the Long Tail in Scene Graph Generation",info:"Tao He, Lianli Gao, Jingkuan Song, Jianfei Cai, Yuan-Fang Li",publish:"IJCAI 2020",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport23.png)",title:"One-shot Scene Graph Generation",info:"Yuyu Guo, Jingkuan Song, Lianli Gao, Heng Tao Shen",publish:"ACM Multimedia 2020",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport24.png)",title:"From Deterministic to Generative: Multimodal Stochastic RNNs for Video Captioning",info:"Jingkuan Song, Yuyu Guo, Lianli Gao, Xuelong Li, Alan Hanjalic, Heng Tao Shen",publish:"IEEE Trans. Neural Networks Learn. Syst.",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport25.png)",title:"Structured Two-Stream Attention Network for Video Question Answering",info:"Lianli Gao, Pengpeng Zeng, Jingkuan Song, Yuan-Fang Li, Wu Liu, Tao Mei, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport26.png)",title:"Perceptual Pyramid Adversarial Networks for Text-to-Image Synthesis",info:"Lianli Gao, Daiyuan Chen, Jingkuan Song, Xing Xu, Dongxiang Zhang, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport27.png)",title:"Deliberate Attention Networks for Image Captioning",info:"Lianli Gao, Kaixuan Fan, Jingkuan Song, Xianglong Liu, Xing Xu, Heng Tao Shen",publish:"AAAI 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport28.png)",title:"Beyond RNNs: Positional Self-Attention with Co-Attention for Video Question Answering",info:"Xiangpeng Li, Jingkuan Song, Lianli Gao, Xianglong Liu, Wenbing Huang, Xiangnan He, Chuang Gan",publish:"AAAI 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport29.png)",title:"Open-Ended Long-Form Video Question Answering via Hierarchical Convolutional Self-Attention Networks",info:"Zhu Zhang, Zhou Zhao, Zhijie Lin, Jingkuan Song, Xiaofei He",publish:"IJCAI 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport30.png)",title:"Matching Images and Text with Multi-modal Tensor Fusion and Re-ranking",info:"Tan Wang, Xing Xu, Yang Yang, Alan Hanjalic, Heng Tao Shen, Jingkuan Song",publish:"ACM Multimedia 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport31.png)",title:"Learnable Aggregating Net with Diversity Learning for Video Question Answering",info:"Xiangpeng Li, Lianli Gao, Xuanhan Wang, Wu Liu, Xing Xu, Heng Tao Shen, Jingkuan Song",publish:"ACM Multimedia 2019",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport32.png)",title:"From Pixels to Objects: Cubic Visual Attention for Visual Question Answering",info:"Jingkuan Song, Pengpeng Zeng, Lianli Gao, Heng Tao Shen",publish:"IJCAI 2018",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport33.png)",title:"Modal-adversarial Semantic Learning Network for Extendable Cross-modal Retrieval",info:"Xing Xu, Jingkuan Song, Huimin Lu, Yang Yang, Fumin Shen, Zi Huang",publish:"ICMR 2018",codeUrl:null,pdfUrl:null},{coverUrl:"require(@/assets/compactreport34.png)",title:"Examine before You Answer: Multi-task Learning with Adaptive-attentions for Multiple-choice VQA",info:"Lianli Gao, Pengpeng Zeng, Jingkuan Song, Xianglong Liu, Heng Tao Shen",publish:"ACM Multimedia 2018",codeUrl:null,pdfUrl:null}]}}};const xn=(0,s.Z)(kn,[["render",Ln]]);var Cn=xn;const yn={class:"container"};function In(n,e,i,a,t,r){const l=(0,o.up)("LinkBox"),s=(0,o.up)("ListWithCover");return(0,o.wg)(),(0,o.iD)("div",yn,[(0,o.Wm)(l,{list:t.links},null,8,["list"]),(0,o.Wm)(s,{title:"AI Safety",list:t.papers},null,8,["list"])])}var wn={name:"CompactReport",components:{ListWithCover:F,LinkBox:en},data(){return{links:[{name:"Back",url:"#/"},{name:"Compact Report",url:"#/compact-report"},{name:"Cross Media Analysis",url:"#/cross-media-analysis"},{name:"AI Safety",url:"#/ai-safety"}],papers:[{coverUrl:i(733),title:"Patch-wise Attack for Fooling Deep Neural Network",info:"Lianli Gao, Qilong Zhang, Jingkuan Song, Xianglong Liu, Heng Tao Shen",publish:"ECCV 2020",codeUrl:"https://github.com/qilong-zhang/Patch-wise-iterative-attack",pdfUrl:"https://arxiv.org/pdf/2007.06765.pdf"},{coverUrl:i(3110),title:"Staircase Sign Method for Boosting Adversarial Attacks",info:"Qilong Zhang, Xiaosu Zhu, Jingkuan Song, Lianli Gao, Heng Tao Shen",publish:"CoRR abs/2104.09722 (2021)",codeUrl:"https://github.com/qilong-zhang/Staircase-sign-method",pdfUrl:"https://arxiv.org/pdf/2104.09722.pdf"},{coverUrl:i(6370),title:"Practical No-box Adversarial Attacks with Training-free Hybrid Image Transformation",info:"Qilong Zhang, Chaoning Zhang, Chaoqun Li, Jingkuan Song, Lianli Gao",publish:"CoRR abs/2203.04607 (2022)",codeUrl:null,pdfUrl:"https://arxiv.org/pdf/2203.04607.pdf"},{coverUrl:i(3795),title:"Frequency Domain Model Augmentation for Adversarial Attack",info:"Yuyang Long, Qilong Zhang, Boheng Zeng, Lianli Gao, Xianglong Liu, Jian Zhang, Jingkuan Song",publish:"ECCV 2022",codeUrl:"https://github.com/yuyang-long/SSA",pdfUrl:"https://arxiv.org/pdf/2207.05382v1.pdf"},{coverUrl:i(9006),title:"Practical Evaluation of Adversarial Robustness via Adaptive Auto Attack",info:"Ye Liu, Yaya Cheng, Lianli Gao, Xianglong Liu, Qilong Zhang, Jingkuan Song",publish:"CVPR 2022",codeUrl:"https://github.com/liuye6666/adaptive_auto_attack",pdfUrl:"https://arxiv.org/pdf/2203.05154.pdf"},{coverUrl:i(2193),title:"Push & Pull: Transferable Adversarial Examples With Attentive Attack",info:"Lianli Gao, Zijie Huang, Jingkuan Song, Yang Yang, Heng Tao Shen",publish:"IEEE Trans. Multim. ",codeUrl:null,pdfUrl:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9430730"},{coverUrl:i(937),title:"Feature Space Targeted Attacks by Statistic Alignment",info:"Lianli Gao, Yaya Cheng, Qilong Zhang, Xing Xu, Jingkuan Song",publish:"IJCAI 2021 ",codeUrl:"https://github.com/yaya-cheng/PAA-GAA",pdfUrl:"https://arxiv.org/pdf/2105.11645.pdf"},{coverUrl:i(3251),title:"Natural Color Fool: Towards Boosting Black-box Unrestricted Attacks",info:"Shengming Yuan, Qilong Zhang, Lianli Gao, Yaya Cheng, Jingkuan Song",publish:"NeurIPS 2022 ",codeUrl:"https://github.com/ylhz/Natural-Color-Fool",pdfUrl:"https://arxiv.org/pdf/2210.02041v1.pdf"},{coverUrl:i(1007),title:"Beyond ImageNet Attack: Towards Crafting Adversarial Examples for Black-box Domains",info:"Qilong Zhang, Xiaodan Li, Yuefeng Chen, Jingkuan Song, Lianli Gao, Yuan He, Hui Xue",publish:"ICLR 2022",codeUrl:"https://github.com/Alibaba-AAIG/Beyond-ImageNet-Attack",pdfUrl:"https://arxiv.org/pdf/2201.11528.pdf"},{coverUrl:i(4707),title:"Explainable deep learning for efficient and robust pattern recognition: A survey of recent developments",info:"Xiao Bai, Xiang Wang, Xianglong Liu, Qiang Liu, Jingkuan Song, Nicu Sebe, Been Kim",publish:"Pattern Recognit. ",codeUrl:null,pdfUrl:"https://www.sciencedirect.com/science/article/pii/S0031320321002892"}]}}};const Tn=(0,s.Z)(wn,[["render",In]]);var Hn=Tn;const Jn=[{path:"/",redirect:"/index"},{path:"/index",component:tn},{path:"/our-group",component:hn},{path:"/compact-report",component:bn},{path:"/cross-media-analysis",component:Cn},{path:"/ai-safety",component:Hn}],Gn=(0,g.p7)({history:(0,g.r5)(),routes:Jn,scrollBehavior(){return{left:0,top:0}}}),Pn=(0,a.ri)(p);Pn.use(Gn),Pn.mount("#app")},733:function(n,e,i){n.exports=i.p+"img/aisafety1.ab967552.png"},4707:function(n,e,i){n.exports=i.p+"img/aisafety10.1d6fdba4.png"},3110:function(n,e,i){n.exports=i.p+"img/aisafety2.6c4159d5.png"},6370:function(n,e,i){n.exports=i.p+"img/aisafety3.e418d312.png"},3795:function(n,e,i){n.exports=i.p+"img/aisafety4.76e4345a.png"},9006:function(n,e,i){n.exports=i.p+"img/aisafety5.6efb3a12.png"},2193:function(n,e,i){n.exports=i.p+"img/aisafety6.22ea89ca.png"},937:function(n,e,i){n.exports=i.p+"img/aisafety7.7ffe93e3.png"},3251:function(n,e,i){n.exports=i.p+"img/aisafety8.ee567f82.png"},1007:function(n,e,i){n.exports=i.p+"img/aisafety9.14f13655.png"},8308:function(n,e,i){n.exports=i.p+"img/avatar.8f49a9ae.png"},3910:function(n,e,i){n.exports=i.p+"img/compactreport1.ebab9a34.png"},9370:function(n,e,i){n.exports=i.p+"img/compactreport10.a293f1c0.png"},5736:function(n,e,i){n.exports=i.p+"img/compactreport11.c9946f8d.png"},4640:function(n,e,i){n.exports=i.p+"img/compactreport12.07fac307.png"},3747:function(n,e,i){n.exports=i.p+"img/compactreport13.8c8ddba6.png"},2055:function(n,e,i){n.exports=i.p+"img/compactreport14.7b62d2ff.png"},4552:function(n,e,i){n.exports=i.p+"img/compactreport15.660e6d17.png"},3233:function(n,e,i){n.exports=i.p+"img/compactreport16.c48a7fe1.png"},5611:function(n,e,i){n.exports=i.p+"img/compactreport17.85785284.png"},2765:function(n,e,i){n.exports=i.p+"img/compactreport18.44a63dca.png"},1599:function(n,e,i){n.exports=i.p+"img/compactreport19.14a002a3.png"},4145:function(n,e,i){n.exports=i.p+"img/compactreport2.c23e0941.png"},7189:function(n,e,i){n.exports=i.p+"img/compactreport20.087301fa.png"},4805:function(n,e,i){n.exports=i.p+"img/compactreport21.e3dad006.png"},4784:function(n,e,i){n.exports=i.p+"img/compactreport22.b098ae93.png"},5034:function(n,e,i){n.exports=i.p+"img/compactreport23.e8aacd88.png"},2722:function(n,e,i){n.exports=i.p+"img/compactreport24.d6116c53.png"},7614:function(n,e,i){n.exports=i.p+"img/compactreport3.8a220c35.png"},6424:function(n,e,i){n.exports=i.p+"img/compactreport4.28978424.png"},7540:function(n,e,i){n.exports=i.p+"img/compactreport5.e94889b5.png"},2773:function(n,e,i){n.exports=i.p+"img/compactreport6.bbd07bd3.png"},5841:function(n,e,i){n.exports=i.p+"img/compactreport7.451d3093.png"},7873:function(n,e,i){n.exports=i.p+"img/compactreport8.d3ac5e9e.png"},1166:function(n,e,i){n.exports=i.p+"img/compactreport9.1f5d6816.png"},3585:function(n,e,i){n.exports=i.p+"img/highlight1.b249c2a8.png"},9809:function(n,e,i){n.exports=i.p+"img/highlight2.68597392.png"},9560:function(n,e,i){n.exports=i.p+"img/highlight3.ca2744ae.png"},6518:function(n,e,i){n.exports=i.p+"img/highlight4.996bfe6a.png"},118:function(n,e,i){n.exports=i.p+"img/highlight5.a24b97fb.png"},2671:function(n,e,i){n.exports=i.p+"img/highlight6.cbe1e454.png"}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var t=e[a]={exports:{}};return n[a](t,t.exports,i),t.exports}i.m=n,function(){var n=[];i.O=function(e,a,o,t){if(!a){var r=1/0;for(p=0;p<n.length;p++){a=n[p][0],o=n[p][1],t=n[p][2];for(var l=!0,s=0;s<a.length;s++)(!1&t||r>=t)&&Object.keys(i.O).every((function(n){return i.O[n](a[s])}))?a.splice(s--,1):(l=!1,t<r&&(r=t));if(l){n.splice(p--,1);var u=o();void 0!==u&&(e=u)}}return e}t=t||0;for(var p=n.length;p>0&&n[p-1][2]>t;p--)n[p]=n[p-1];n[p]=[a,o,t]}}(),function(){i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,{a:e}),e}}(),function(){i.d=function(n,e){for(var a in e)i.o(e,a)&&!i.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){i.p=""}(),function(){var n={143:0};i.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,t,r=a[0],l=a[1],s=a[2],u=0;if(r.some((function(e){return 0!==n[e]}))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(s)var p=s(i)}for(e&&e(a);u<r.length;u++)t=r[u],i.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return i.O(p)},a=self["webpackChunksongjingkuan"]=self["webpackChunksongjingkuan"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(9211)}));a=i.O(a)})();
//# sourceMappingURL=app.1c241f5d.js.map