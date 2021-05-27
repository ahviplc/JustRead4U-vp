# JustRead4U-vp

`JustRead4U-vp-为自己而读.`

`具体内容 请将右上角语言切换为简体中文READ.`

<img src="http://bpic.588ku.com/element_origin_min_pic/17/11/08/bdd88d667ce28b0e39aaf931511fe371.jpg" alt="READ" style="zoom:80%;" align="center"/>

[vuepress - npm](https://www.npmjs.com/package/vuepress)

[GitHub - vuejs/vuepress: 📝 Minimalistic Vue-powered static site generator](https://github.com/vuejs/vuepress)

`JustRead4U的vuepress版本`

[JustRead4U-vp-GitHub](https://github.com/ahviplc/JustRead4U-vp)

[JustRead4U-vp-Gitee](https://gitee.com/ahviplc/JustRead4U-vp)

`JustRead4U的docsify版本`

[JustRead4U-GitHub](https://github.com/ahviplc/JustRead4U)

[JustRead4U-Gitee](https://gitee.com/ahviplc/JustRead4U)

## 一个在线学习文档

### slogan

> JustRead4U-vp-为自己而读.

### 进阶

- JavaGuide-Interview 面试突击版 在线阅读地址：https://snailclimb.gitee.io/javaguide-interview/#/
- JavaGuide 在线阅读地址：https://snailclimb.gitee.io/javaguide/#/
- JavaGuide-Interview 面试突击版 Github：https://github.com/Snailclimb/JavaGuide-Interview
- JavaGuide-Interview 面试突击版 码云：https://gitee.com/SnailClimb/JavaGuide-Interview
- JavaGuide Github：https://github.com/Snailclimb/JavaGuide
- JavaGuide 码云：https://gitee.com/SnailClimb/JavaGuide
- docsify-demo Github：https://github.com/Snailclimb/docsify-demo
- awesome-java Github：https://github.com/CodingDocs/awesome-java
- u-na Github：https://github.com/ahviplc/u-na
- u-na Gitee：https://gitee.com/ahviplc/u-na

### 扩展

`引入图片` `加速` `使用外网`

```markdown
![](https://raw.fastgit.org/ahviplc/JustRead4U/master/images/x-1/1.jpg)
![](https://github.bajins.com/ahviplc/JustRead4U/raw/master/images/x-1/1.jpg)
![](https://cdn.jsdelivr.net/gh/ahviplc/JustRead4U@master/images/x-1/1.jpg)
![](https://cdn.staticaly.com/gh/ahviplc/JustRead4U/master/images/x-1/1.jpg)
```

## 感谢

> 感谢HcySunYang哥 其Github：https://github.com/HcySunYang/vue-design

## 部署在阿里云

`centos服务器` `部署步骤` `端口8099` `部署JustRead4U-vp`

```bash
1. 安装git
sudo yum install -y git

2. 安装nodejs
sudo yum install nodejs

3. 新建一个文件夹：
mkdir -p /home/JustRead4U-vp

4. cd 进去
cd /home/JustRead4U-vp

5. clone项目
git clone https://github.com/ahviplc/JustRead4U-vp.git

6 cd 进去
cd /home/JustRead4U-vp/JustRead4U-vp

7. 安装vuepress依赖(使用npm)
npm i
或
yarn

8. 运行
npm run dev
或
yarn dev

9. 打包
npm run build
或
yarn build

其dist生成路径: JustRead4U-vp/docs/.vuepress/dist

10. 后台运行 nohup
nohup npm run dev > docsify.log 2>&1& echo $! > docsify.pid
nohup yarn dev > docsify.log 2>&1& echo $! > docsify.pid

也可在打包好的目录JustRead4U-vp/docs/.vuepress/dist下 利用打包好的生产环境静态资源
Python3开启自带http服务 也可成功部署
nohup python3 -m http.server 8099 > docsify.log 2>&1& echo $! > docsify.pid

11. 停止
kill `cat docsify.pid`

12. 查询端口(docsify.pid里就是端口) 再kill停止
netstat -tunlp | grep 402595
kill 402595

13. 下面是运行日志
DONE  [13:41:06] Build a8e047 finished in 4011 ms!

> VuePress dev server listening at http://localhost:8099/JustRead4U-vp/
```

`外网访问我` `JustRead4U` `端口8099`

> http://106.14.212.65:8099/#/

> http://oneplusone.vip:8099/#/

## 作者介绍

`ahviplc (ahviplc!~LC) · GitHub`

> https://github.com/ahviplc

`ahviplc (ahviplc) - Gitee.com`

> https://gitee.com/ahviplc

