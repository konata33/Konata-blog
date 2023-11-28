

插入代码段：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>我的网页标题</title>
    <meta charset="UTF-8">
    <meta name="description" content="这是一个简要描述">
    <meta name="keywords" content="HTML,CSS,JavaScript">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Welcome to My Website</h1>
      <p>This is a paragraph of text in the main body of the webpage.</p>
    </main>
    <footer>
      <p>版权所有 &copy; 2023</p>
    </footer>
  </body>
</html>
```

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
  nationality: "American",
  introduce: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }
};

console.log(person.introduce()); // 输出：Hello, my name is John Doe.
