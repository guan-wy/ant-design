webpackJsonp([116],{1889:function(e,t){e.exports={content:["article",["p","Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc."],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:"customized themes"}]],["h2","Less variables"],["p","We are using ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs."],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"Default Variables"]]]],["p","Please report an issue if the existing list of variables is not enough for you."],["h2","How to do it"],["p","We recommend ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," to override the default values of the variables. There are two ways to achieve it in practice."],["p","You can use this ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/customize-antd-theme"},"example"]," as a playground."],["h3","1) Using ",["code","theme"]," property (recommended way)"],["p","Specify the ",["code","theme"]," property in the ",["code","package.json"]," or ",["code",".webpackrc"]," file, whose value can be either an object or the path to a JS file that contains the custom values of specific variables:"],["ul",["li",["p","example of directly specifying the custom values as an object:"]]],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code",'"theme": {\n  "primary-color": "#1DA57A",\n},']],["ul",["li",["p","example of specifying a ",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/theme.js"},"file path"]," to a JS file:"]]],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"./theme.js"</span><span class="token punctuation">,</span>'},["code",'"theme": "./theme.js",']],["p","This approach is available only when using ",["a",{title:null,href:"https://github.com/ant-design/antd-init"},"antd-init"]," or ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"],". If you choose other boilerplates, you can write a webpack config about ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader modifyVars"]," like ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138"},"atool-build "]," does."],["p","Note:"],["ul",["li",["p","Importing styles from less files is necessary."],["ul",["li",["p","If you import styles by specifying the ",["code","style"]," option of ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", change it from ",["code","'css'"]," to ",["code","true"],", which will import the ",["code","less"]," version of antd."]],["li",["p","If you import styles from ",["code","'antd/dist/antd.css'"],", change it to ",["code","antd/dist/antd.less"],"."]]]],["li",["p","When using ",["code","dva-cli@0.7.0+"],", you should add the ",["code","theme"]," block to ",["a",{title:null,href:"https://github.com/dvajs/dva-example-user-dashboard/commit/d6da33b3a6e18eb7f003752a4b00b5a660747c31"},".roadhogrc"]," instead of ",["code","package.json"],"."]],["li",["p","If you want to override ",["code","@icon-url"],", the value must be contained in quotes like ",["code",'"@icon-url": "\'your-icon-font-path\'"']," (",["a",{title:null,href:"https://github.com/visvadw/dvajs-user-dashboard/pull/2"},"A fix sample"],")."]]],["h3","2) Overriding Less variables (alternative way)"],["p","Override variables via less definition files."],["p","Create a standalone less file like the one below, and import it in your project."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd/dist/antd.less"</span><span class="token punctuation">;</span></span>   // import official less entry file\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // override variables here'},["code",'@import "~antd/dist/antd.less";   // import official less entry file\n@import "your-theme-file.less";   // override variables here']],["p","Note: This way will load the styles of all components, regardless of your demand, which cause ",["code","style"]," option of ",["code","babel-plugin-import"]," not working."],["h2","Related Articles"],["ul",["li",["p",["a",{title:null,href:"https://intoli.com/blog/antd-scss-theme-plugin/"},"Using Ant Design in Sass-Styled Webpack Projects with ",["code","antd-scss-theme-plugin"]]]],["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack\u2026 the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"},"Using Sass/Scss with React App (create-react-app)"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"},"Dynamic Theming in Browser using Ant Design"]]]]],meta:{order:5,title:"Customize Theme",filename:"docs/react/customize-theme.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Less-variables",title:"Less variables"},"Less variables"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-to-do-it",title:"How to do it"},"How to do it"]],["li",["a",{className:"bisheng-toc-h2",href:"#Related-Articles",title:"Related Articles"},"Related Articles"]]]}}});