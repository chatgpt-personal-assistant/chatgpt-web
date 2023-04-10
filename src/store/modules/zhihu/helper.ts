import { ss } from '@/utils/storage'

const LOCAL_NAME = 'zhiHuStorage'

export interface AnswerItem {
  id: number
  userId: string | null
  platType: string
  questionId: string
  question: string
  answer: string
  platAnswerId: string | null
  status: number
  createAt: string
  isEdit?: boolean
}

export type AnswerList = AnswerItem[]

export interface ZhiHuState {
  answerList: AnswerList
}

export function defaultSetting(): ZhiHuState {
  return {
    answerList: [
      {
        id: 1,
        userId: null,
        platType: 'zhihu',
        questionId: '590641601',
        question: '移动端特定的 CSS Hacks 有哪些？',
        answer: '在移动端，由于不同的设备和浏览器的兼容性问题，可能会出现一些CSS显示上的问题。以下是一些常用的CSS Hacks：\n1. iOS设备特定的CSS：\n```css\n/* iPhone 和 iPod touch */\n@media only screen and (max-device-width: 480px) {}\n/* iPad */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}\n```\n2. Android设备特定的CSS：\n```css\n/* Android 2.3 */\n@media only screen and (min-device-width: 240px) and (max-device-width: 480px) {}\n/* Android 4.0 */\n@media only screen and (min-device-width: 480px) and (max-device-width: 800px) {}\n```\n3. Retina屏幕特定的CSS：\n```css\n@media only screen and (-webkit-min-device-pixel-ratio: 2), \n       only screen and (min-device-pixel-ratio: 2) {}\n```\n4. 用于隐藏iOS设备上的滚动条：\n```css\n/* iOS */\n::-webkit-scrollbar { display: none; }\n```\n5. 用于隐藏Android设备上的滚动条：\n```css\n/* Android */\n::-webkit-scrollbar { -webkit-appearance: none; }\n::-webkit-scrollbar:vertical { width: 0px; }\n::-webkit-scrollbar:horizontal { height: 0px; }\n```\n这些CSS Hacks可以在特定设备或浏览器上解决一些兼容性问题，但使用时需要注意兼容性和可维护性。',
        platAnswerId: '',
        status: 2,
        createAt: '2023-04-02T09:59:52.000+00:00',
      },
      {
        id: 2,
        userId: null,
        platType: 'zhihu',
        questionId: '593032778',
        question: '苹果泥有什么营养价值？',
        answer: '苹果泥是将苹果去皮去核搅碎制成的果泥状食品。它具有以下营养价值：\n1. 含有丰富的膳食纤维：苹果泥中含有丰富的膳食纤维，可以促进肠道蠕动，促进消化道健康，同时还能减缓胃肠吸收速度，降低血糖和胆固醇水平。\n2. 丰富的维生素和矿物质：苹果泥中富含维生素C和维生素K等多种维生素，同时还含有钾、镁、铁等矿物质，可以增强免疫力和提高身体的抗氧化能力。\n3. 低热量：苹果泥是一种低热量的食品，每100克只含有50-60千卡的热量，适合作为减肥期间的零食。\n总之，苹果泥是一种富含营养、低热量的食品，可以为身体提供多种健康营养素。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:00:10.000+00:00',
      },
      {
        id: 3,
        userId: null,
        platType: 'zhihu',
        questionId: '591272189',
        question: 'Ajax 如何解决缓存的方法有哪些？',
        answer: 'Ajax解决缓存主要有以下几种方法：\n1.设置HTTP头信息：可以在每次发送请求时，设置HTTP头信息，告诉浏览器不要缓存该请求的响应。可以设置如下的头信息：\n```\nresponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");\nresponse.setHeader("Pragma", "no-cache");\nresponse.setDateHeader("Expires", 0);\n```\n2.在URL后添加随机数或时间戳：可以在每次发送请求时，在URL后添加一个随机数或时间戳，使每个请求的URL都不一样，从而强制浏览器重新获取数据。例如：\n```\nvar url = "http://example.com/ajax/data.php?timestamp=" + new Date().getTime();\n```\n3.使用POST请求：使用POST请求可以避免浏览器对GET请求的缓存。因为GET请求的参数都会被保存在URL中，而POST请求的参数会被保存在请求体中。\n4.设置缓存时间：可以设置缓存时间，让浏览器在指定时间内缓存该请求的响应。例如：\n```\nresponse.setHeader("Cache-Control", "max-age=3600");\n```\n这个示例中，浏览器会缓存该请求的响应1个小时。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:00:27.000+00:00',
      },
      {
        id: 4,
        userId: null,
        platType: 'zhihu',
        questionId: '23055853',
        question: '真正的成熟是怎样的？',
        answer: '真正的成熟是指一个人在思想、行为、情感等方面都达到了稳定、成熟、理性的状态。具体来说，真正的成熟表现为：\n1. 意识到自己的不足和弱点，不断学习和改进自己；\n2. 能够理智地面对各种挑战和困难，不轻易妥协或放弃；\n3. 懂得关心、尊重和倾听他人，能够建立稳定、健康的人际关系；\n4. 能够正确地处理自己的情感，掌握自己的情绪，避免情绪的失控；\n5. 具备高度的责任心和使命感，能够承担自己的责任和义务，为自己和他人创造价值。\n总之，真正的成熟不仅体现在个人的行为和思想上，更体现在个人对社会、对人类的认识和贡献上。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:00:44.000+00:00',
      },
      {
        id: 5,
        userId: null,
        platType: 'zhihu',
        questionId: '592379595',
        question: '地球自转对气候有哪些影响？',
        answer: '地球自转对气候有以下影响：\n1. 日照时间和强度的变化：地球自转带来了昼夜交替和季节变化，这对气候有很大影响，因为气候取决于太阳辐射的数量和质量。\n2. 空气和海水的循环：地球自转也带动了大气和海洋的循环，这在气候系统中起到了至关重要的作用。大气和海洋中的运动使得气候变得更加复杂，从而影响了地球上的生态系统。\n3. 风向和风速的变化：地球自转还影响了风的方向和速度。由于地球自转的原因，地球表面上的气流会受到不同的影响，从而导致风向和风速的变化。\n4. 水平和垂直的温度分布：地球自转带来了日照的变化和大气和海洋的循环，这也导致了水平和垂直的温度分布的变化。这些变化对气候和生态系统都产生了重要的影响。\n总之，地球自转是气候系统的一个重要组成部分，它对气候和生态系统产生了深远的影响。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:01:05.000+00:00',
      },
      {
        id: 6,
        userId: null,
        platType: 'zhihu',
        questionId: '588996044',
        question: '如何解读 css 属性选择器的原理？',
        answer: 'CSS属性选择器是一种用于选择具有特定属性或属性值的HTML元素的CSS选择器。属性选择器使用方括号来指定属性和属性值的条件。例如，`[attribute=value]`可以匹配具有属性attribute且属性值等于value的元素。\n其原理是通过CSS引擎对HTML文档进行解析和遍历，查找符合选择器中指定属性和属性值的元素，然后将样式应用于这些元素。在解析文档时，CSS引擎会读取每个元素的属性并将其与选择器中指定的属性和属性值进行比较。如果找到匹配的元素，则将样式应用于该元素。\n例如，如果使用属性选择器`[class=example]`来选择所有具有class属性且属性值为example的元素，CSS引擎会遍历HTML文档中的所有元素，并找到所有具有class属性且属性值为example的元素。然后，CSS引擎会将选择器指定的样式应用于这些元素。\n总之，CSS属性选择器的原理是基于对HTML文档的解析和遍历，查找符合选择器中指定属性和属性值的元素，并将样式应用于这些元素。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:01:22.000+00:00',
      },
      {
        id: 7,
        userId: null,
        platType: 'zhihu',
        questionId: '591173047',
        question: 'vue3 编程如何利用 axios 来完成数据的交互？',
        answer: '在Vue3中，可以利用axios来完成数据的交互，具体实现如下：\n1. 首先，在Vue3项目中安装axios依赖包：\n```\nnpm install axios --save\n```\n2. 在Vue3项目中创建一个api.js文件，并在该文件中封装axios的请求方法，例如：\n```javascript\nimport axios from \'axios\'\nconst service = axios.create({\n  baseURL: process.env.VUE_APP_BASE_API,\n  timeout: 5000 // 请求超时时间\n})\n// request拦截器\nservice.interceptors.request.use(\n  config => {\n    // 在发送请求之前做些什么\n    return config\n  },\n  error => {\n    // 处理请求错误\n    console.log(error) // for debug\n    return Promise.reject(error)\n  }\n)\n// response拦截器\nservice.interceptors.response.use(\n  response => {\n    // 在接收到响应时做些什么\n    const res = response.data\n    if (res.code !== 20000) {\n      // 处理接口返回错误\n      console.log(res.message)\n      return Promise.reject(new Error(res.message || \'Error\'))\n    } else {\n      return res\n    }\n  },\n  error => {\n    // 处理响应错误\n    console.log(\'err\' + error) // for debug\n    return Promise.reject(error)\n  }\n)\nexport default service\n```\n3. 在Vue3项目中需要使用axios的组件中，引入api.js文件，并使用封装好的axios请求方法，例如：\n```javascript\nimport api from \'./api\'\nexport default {\n  data() {\n    return {\n      list: []\n    }\n  },\n  mounted() {\n    this.getData()\n  },\n  methods: {\n    getData() {\n      api.get(\'/api/list\').then(res => {\n        this.list = res.data\n      }).catch(err => {\n        console.log(err)\n      })\n    }\n  }\n}\n```\n以上就是在Vue3项目中如何利用axios完成数据交互的具体实现方法。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T10:01:45.000+00:00',
      },
      {
        id: 28,
        userId: null,
        platType: 'zhihu',
        questionId: '590319649',
        question: 'CSS3 透明属性使用时要注意哪些问题？',
        answer: '使用CSS3透明属性时需要注意以下几点：\n1. 浏览器兼容性问题：不同的浏览器对CSS3透明属性的支持不一样，有些旧版本的浏览器可能不支持。\n2. 使用RGBA或HSLA颜色模式时需要注意：RGBA或HSLA颜色模式在使用时需要注意其透明度的值，其中的alpha值为0时表示完全透明，alpha值为1时表示完全不透明。\n3. 透明度的继承问题：子元素的透明度值会继承父元素的透明度值，这可能会影响到布局的效果。\n4. 透明度与其他效果的冲突问题：透明度的使用可能会与其他效果（如阴影、边框等）产生冲突，需要注意调整样式。\n5. 透明度与性能问题：使用透明度会影响浏览器的性能，因此在使用时需要注意不要过度使用。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T11:59:00.000+00:00',
      },
      {
        id: 29,
        userId: null,
        platType: 'zhihu',
        questionId: '590641601',
        question: '移动端特定的 CSS Hacks 有哪些？',
        answer: '在移动端，不同的浏览器会对 CSS 标准支持的程度不同，因此可能需要使用一些特定的 CSS Hacks。以下是一些常见的移动端 CSS Hacks：\n1. 使用-webkit-前缀：由于 Safari 和 Chrome 的内核是 WebKit，因此在移动端开发中，使用-webkit-前缀可以兼容这两种浏览器。\n2. 使用-moz-前缀：Firefox 浏览器的内核是 Gecko，因此在移动端开发中，使用-moz-前缀可以兼容 Firefox 浏览器。\n3. 使用-ms-前缀：Internet Explorer 浏览器的内核是 Trident，因此在移动端开发中，使用-ms-前缀可以兼容 IE 浏览器。\n4. 使用-o-前缀：Opera 浏览器的内核是 Presto，因此在移动端开发中，使用-o-前缀可以兼容 Opera 浏览器。\n5. 使用@media查询：使用@media查询可以根据不同的屏幕尺寸来应用不同的样式，从而达到适配不同分辨率的效果。\n6. 使用特定的选择器：某些浏览器只支持特定的选择器，例如IE6只支持class选择器，不支持属性选择器和伪类选择器，因此在移动端开发中，需要根据不同的浏览器来选择相应的选择器。\n7. 使用Hack代码：在某些情况下，需要使用一些Hack代码来实现特定的效果，例如IE下的filter属性、zoom属性等。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T11:59:25.000+00:00',
      },
      {
        id: 30,
        userId: null,
        platType: 'zhihu',
        questionId: '591440189',
        question: 'AJAX 编程项目如何实现 web 页面中级联菜单？',
        answer: '实现 web 页面中级联菜单可以使用 AJAX 技术，具体实现步骤如下：\n1. 在 HTML 页面中定义两个下拉列表框，即第一个下拉列表框和第二个下拉列表框，第一个下拉列表框为父级菜单，第二个下拉列表框为子级菜单。\n2. 在 JavaScript 文件中编写 AJAX 请求函数，该函数用于向服务器发送请求，获取子级菜单数据，并将子级菜单数据插入到第二个下拉列表框中。\n3. 在 HTML 页面中使用 onchange 事件监听第一个下拉列表框的值变化，当第一个下拉列表框的值发生变化时，触发 AJAX 请求函数。\n4. 在服务器端编写处理 AJAX 请求的代码，当接收到 AJAX 请求时，从数据库中获取子级菜单数据，然后将子级菜单数据以 JSON 格式返回给客户端。\n5. 在客户端通过 AJAX 请求函数接收到服务器返回的子级菜单数据后，将子级菜单数据插入到第二个下拉列表框中。\n通过以上步骤，就可以实现 web 页面中级联菜单的功能。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T12:01:31.000+00:00',
      },
      {
        id: 31,
        userId: null,
        platType: 'zhihu',
        questionId: '587448659',
        question: '有哪些励志的句子值得收藏，学习，摘抄?',
        answer: '以下是一些励志的句子：\n1. 成功不是偶然的，它是持续努力的结果。\n2. 好的开始是成功的一半。\n3. 别人能做到的，你也能做到。\n4. 勇气不是没有恐惧，而是在恐惧面前仍然坚持前行。\n5. 成功的秘诀就是坚持不懈，永不放弃。\n6. 每一天都是一次新的开始，让我们珍惜它。\n7. 失败并不是终点，它是通往成功的必经之路。\n8. 任何困难都无法阻挡我们前进的步伐。\n9. 走自己的路，让别人去说吧。\n10. 天道酬勤，努力付出必有回报。\n希望这些句子能够激励您继续前行，并在工作和生活中不断追求进步和成功。',
        platAnswerId: null,
        status: 2,
        createAt: '2023-04-02T12:09:55.000+00:00',
      },
      {
        id: 45,
        userId: null,
        platType: 'zhihu',
        questionId: '593264550',
        question: '睡眠对于大脑神经元的健康有何作用？',
        answer: '睡眠对大脑神经元的健康具有重要的作用。睡眠时，大脑会进行清理和修复工作，清除垃圾物质和代谢产物，同时促进细胞分裂和修复。睡眠还可以帮助大脑进行记忆和学习的整合和巩固，提高大脑的认知和学习能力。\n此外，睡眠还可以调节神经元的代谢和免疫功能，减少氧化应激和神经元损伤，保护神经元免受损伤和衰老的影响。\n总之，充足的睡眠对大脑神经元的健康非常重要，可以帮助大脑保持良好的工作状态和健康的生理状态。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T12:51:53.000+00:00',
      },
      {
        id: 46,
        userId: null,
        platType: 'zhihu',
        questionId: '591225354',
        question: 'jquery 编程中怎么实现页面自适应？',
        answer: '在jQuery中实现页面自适应可以通过以下方法：\n1. 使用响应式Web设计：使用CSS媒体查询和流式布局来使页面能够自适应不同的屏幕大小。例如，在CSS中使用@media查询，在不同的屏幕大小下使用不同的CSS样式。\n2. 使用jQuery插件：有许多jQuery插件可以帮助实现页面自适应，例如FlexSlider、Adaptive Images、FitText等。这些插件可以自动调整页面元素的大小和位置，以适应不同的屏幕大小。\n3. 使用CSS框架：许多CSS框架（如Bootstrap、Foundation等）都提供了响应式设计的功能，这些框架可以帮助开发者快速搭建响应式的页面。\n总的来说，实现页面自适应需要结合CSS和JavaScript来完成，而jQuery可以帮助开发者简化JavaScript的编写，并提供一些有用的插件和工具来加快开发进度。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T12:52:10.000+00:00',
      },
      {
        id: 51,
        userId: null,
        platType: 'zhihu',
        questionId: '591440177',
        question: '移动端 Ajax 项目请求中传输中文乱码问题怎么解决？',
        answer: '移动端 Ajax 项目请求中传输中文乱码问题可能是由于前端页面的编码格式、Ajax请求的编码格式和后端服务的编码格式不一致造成的。解决方法如下：\n1.前端页面编码格式设置为UTF-8，确保页面中的中文字符编码格式正确。\n```html\n<meta charset="UTF-8">\n```\n2.Ajax请求设置contentType为"application/x-www-form-urlencoded;charset=utf-8"，确保Ajax请求中的中文字符编码格式正确。\n```javascript\n$.ajax({\n    url: \'your-url\',\n    type: \'POST\',\n    contentType: \'application/x-www-form-urlencoded;charset=utf-8\',\n    data: \'your-data\',\n    success: function(response) {\n        // your success code here\n    },\n    error: function(xhr, status, error) {\n        // your error code here\n    }\n});\n```\n3.后端服务接收请求时设置字符编码格式为UTF-8，确保后端服务中的中文字符编码格式正确。\n```java\n@RequestMapping(value = "/your-url", method = RequestMethod.POST, produces = "application/json;charset=utf-8")\n@ResponseBody\npublic ResponseData yourMethod(@RequestBody YourData yourData) {\n    // your code here\n}\n```\n通过以上步骤，可以解决移动端 Ajax 项目请求中传输中文乱码问题。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T13:42:31.000+00:00',
      },
      {
        id: 52,
        userId: null,
        platType: 'zhihu',
        questionId: '592824527',
        question: '如何解读 JS 中的变量声明提升与函数声明提升优先级？',
        answer: '在 JavaScript 中，变量声明和函数声明都会被提升到它们所在的作用域的顶部。这意味着在函数或代码块中的任何位置声明的变量和函数都可以在该函数或代码块中的任何位置访问。\n但是，在变量声明提升和函数声明提升之间，存在优先级的差异。函数声明提升优先级高于变量声明提升。\n这意味着在同一作用域中，如果同时存在变量和函数同名的情况，函数声明会覆盖变量声明。例如：\n```\nconsole.log(foo); // 输出函数定义\nconsole.log(bar); // 输出 undefined\nvar foo = \'变量\';\nfunction foo() {\n  console.log(\'函数定义\');\n}\nvar bar = \'变量\';\nvar bar = function() {\n  console.log(\'函数表达式\');\n};\n```\n在这个例子中，虽然 `foo` 同时被声明为变量和函数，但是由于函数声明提升优先级高于变量声明提升，`foo` 最终被解释为函数。而对于 `bar`，由于使用了变量声明，因此第二个 `bar` 覆盖了第一个 `bar` 的声明。\n总的来说，了解变量声明提升和函数声明提升的优先级差异对于正确理解 JavaScript 代码的行为非常重要。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-02T13:44:47.000+00:00',
      },
      {
        id: 55,
        userId: null,
        platType: 'zhihu',
        questionId: '590806008',
        question: '有哪些文科专业的工作不容易被AI 取代？',
        answer: '文科专业的工作通常涉及到复杂的人际关系、创造性思维和情感交流等方面，这些都是AI无法完全替代的。以下是几种文科专业的工作，不容易被AI取代：\n1. 律师：律师需要具备法律专业知识，能够根据客户的具体情况进行个性化的法律服务，以及在法庭上进行辩护和代表客户进行谈判等。\n2. 教育工作者：教育工作者需要具备针对不同年龄段学生的教育心理学知识，能够在课堂上引导学生的思维，培养学生的创造性思维和解决问题的能力等。\n3. 心理医生：心理医生需要具备心理学专业知识，能够与患者进行有效的沟通和情感交流，解决患者的心理问题。\n4. 媒体从业者：媒体从业者需要具备新闻学、传播学等专业知识，能够通过深入调研和采访等方式，提供独立客观的信息服务。\n5. 艺术工作者：艺术工作者需要具备创造性思维，能够通过音乐、舞蹈、绘画等方式表达自己的情感和观点，以及给人带来审美享受等。',
        platAnswerId: null,
        status: 2,
        createAt: '2023-04-04T03:25:28.000+00:00',
      },
      {
        id: 56,
        userId: null,
        platType: 'zhihu',
        questionId: '593570944',
        question: '跟人交往永远做不到放松自然，甚至是跟家人，该怎么办？',
        answer: '放松自然与人交往是一个需要长时间积累和练习的过程，有一些技巧和方法可以帮助你在交往中更加放松自然。\n1. 接受自己的不完美。每个人都有自己的缺点和不足，不必要过于苛求自己完美无缺。接受自己的不完美，放下自己的心理负担，就能更加放松自然地面对别人。\n2. 意识到交往是相互的。不要总是把自己看作是“演员”，而将别人看作是“观众”。相反，意识到交往是相互的，你需要听取别人的意见和反馈，也需要分享自己的想法和经验。\n3. 学会关注别人。将注意力从自己身上转移到别人身上，关注别人的需求、兴趣和情感状态，帮助你更好地融入到交往中去。\n4. 练习表达自己的情感。如果你总是把自己的情感藏在心底，就会让自己感到压抑和不自在。练习表达自己的情感，让别人了解你的内心世界，也能让你更加自然地面对别人。\n5. 多参加社交活动。多参加社交活动，与不同类型的人交往，可以帮助你更好地了解人际交往的规则和技巧，也能让你更加放松自然地面对人群。\n记住，放松自然需要长期的练习和积累，不要过于苛求自己。通过不断地尝试和反思，你一定能够逐渐变得更加放松自然。',
        platAnswerId: null,
        status: 2,
        createAt: '2023-04-04T03:47:00.000+00:00',
      },
      {
        id: 57,
        userId: null,
        platType: 'zhihu',
        questionId: '593535041',
        question: '什么是预训练 AI 模型？',
        answer: '预训练 AI 模型是一种已经经过大规模数据集训练的模型，可以用于各种不同的自然语言处理任务。预训练 AI 模型可以学习自然语言的语法、语义和上下文信息，然后在特定任务上进行微调，以适应该任务的需求。\n这种模型通常是基于深度学习算法的神经网络，如 BERT、GPT、XLNet 等。它们在大规模语料库上进行训练，以学习自然语言处理的基本模式和模式之间的关系。预训练模型的训练可以使用无监督学习方法，例如自编码器、对抗性网络等。\n预训练 AI 模型可以应用于各种不同的自然语言处理任务，如情感分析、文本分类、问答系统、语言翻译、命名实体识别等。使用预训练模型可以大大减少模型的训练时间和数据量，同时提高模型的准确率和效率。',
        platAnswerId: null,
        status: 0,
        createAt: '2023-04-04T03:47:13.000+00:00',
      },
      {
        id: 58,
        userId: null,
        platType: 'zhihu',
        questionId: '592674143',
        question: '大学生怎么学编程？',
        answer: '作为一名大学生想要学习编程，可以按照以下步骤：\n1.选择编程语言：首先选择一门编程语言，比如Java、Python、C++等。建议选择一门易学且广泛使用的语言。\n2.学习基础知识：学习编程语言的基础知识，包括数据类型、语法、函数、控制结构等。\n3.练习编程：通过练习编写简单的代码，逐步提高编程能力。\n4.参加编程社区：参加编程社区，比如GitHub、Stack Overflow等，与其他开发者交流、学习和分享经验。\n5.阅读编程书籍：阅读编程书籍可以加深对编程语言和开发技巧的理解。\n6.参加编程课程：参加编程课程可以加速学习进程，获取专业指导和实践经验。\n需要注意的是，学习编程需要耐心和坚持，要不断地练习、思考和探索。',
        platAnswerId: null,
        status: 2,
        createAt: '2023-04-04T03:47:26.000+00:00',
      },
      {
        id: 59,
        userId: null,
        platType: 'zhihu',
        questionId: '448830441',
        question: '有没有简短有深意的文案？',
        answer: '“生命不息，奋斗不止”',
        platAnswerId: null,
        status: 2,
        createAt: '2023-04-04T03:47:27.000+00:00',
      },
    ],
  }
}

export function getLocalState(): ZhiHuState {
  const localSetting: ZhiHuState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: ZhiHuState): void {
  ss.set(LOCAL_NAME, setting)
}
