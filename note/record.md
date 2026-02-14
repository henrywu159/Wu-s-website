# my website
https://henrywu159.github.io/Wu-s-website/

# live server(insecurit / practice only)
## website
- 1.下載vscode
- 2.在extensions查詢並安裝"live server"
- 3.建立一個新檔案，檔名為index.html(這個檔名才會被自動視為根目錄)
- 4.輸入"!"後按Tab，並在<body>之間隨便輸入一串字
- 5.點選右鍵 -> `Open with live server`

## router setting(port forwarding)
- 1.`192.168.0.1` -> `feature` -> `virtual server` -> `add rule`
  ```
  Name:home-server
  Local IP:"server IP"
  protocol:udp
  TCP port:50000(ramdomly chosed)
  UDP port:5500(live server default ip)
  ```

## test(fail)
- 1.find my home wi-fi IP Address
  - 1.`curl ifconfig.me`
  - 2.google search`https://whatismyipaddress.com/`

## problem
- 1.live server預設只開放給localhost
  - 1.ctrl+,
  - 2.search`live server host`
  - 3.replace `127.0.0.1` with `0.0.0.0`
  - 4.use `ss -tulnp | grep 5500` to check
- 2.linux firewall
  - 1.type `sudo ufw status` to check if the firewall block the signal
  - 2.if it shows `inactive`, then it's okay
  - 3.if it shows `active`, then type `sudo ufw allow 5500`
- 3.router setting interface -> `internet`, IP Address is 192.168.100.2，代表我們家是二重路由器，對外連接的是大大寬頻的數據機。
  - 1.type gateway to enter setting interface
  - 2.`forward rules` -> `DMZ Configuration`(代表不論任何數據都將直接傳入對象router)
      ```
      Enable DMZ:yes
      WAN name:數據機
      Host Address:路由器
      ```

## downside
- 1.insecurite：live server是針對本地設計的開發工具，所以對於攻擊防護不足，可能會被path traversal。開放port也會導致家裡網路被ddos攻擊

# github
- 1.在browser裡的github -> 右上角的"+" -> `New repository`(設成Public)
- 2.將資料夾clone到本地
- 3.將index.html放入資料夾並git push
- 4.回到browser的repository -> `setting` -> `pages` -> 將branch從none改成main，等待幾分鐘後重整頁面即可在上方看到網域

# html/css
## 基礎
- 1.基本html框架
    ```
    <!DOCTYPE html>
    <html>
        <head>
            <title> Wu's page</title>
            <link rel="stylesheet" href="style.css"> #css
        </head>
        <body>
            <h1>page</h1>
            <h2>subtitle</h2>
            <p>paragraph</p>
            this is a <br/> line break

            <strong>bold</strong>
            <em>etalics</em>
            <button>clic</button>

            <ul>
                <li>unordered list, dots or stars... etc</li>
                <li>list item</li>
            </ul>
            <ol>
                <li>1, 2, 3</li>
                <li></li>
            </ol>

            <div>, <header>, <section>, <footter>
        </body>
    </html>
    ```

- 2.基本css include file
    ```
    body {
        font-family: Helvetica;
        background: black;
        color: white;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: blue;
    }
    ```

- 3.輔助網站
  - 1.配色
    - adobe color:https://color.adobe.com/

## 問題
- 1.怎麽讓header一直跟在螢幕最上方
    ```
    position: fixed;  //固定在螢幕上
    left: 0;
    top: 0;
    height: 100px;
    width: 100%;
    z-index: 1000;  //確保在圖層最上方
    ```
- 2.怎麽點擊按鈕跳轉頁面
  - 1.再寫另一個html，然後使用<a href="html-file">
  - 2.將想要跳轉的區域給一個id，然後使用<a href="#id">

- 3.怎麽使的不同大小的螢幕都有良好的體驗
  - 1.使用`display: flex`排版的話，可以用`flex-wrap: wrap`
  - 2.另外的情況要使用`@media screen and (max-width)`再重新排版一次。可以使用`f12`來模擬不同大小的螢幕

- 4.怎麽使的圖形被滑鼠觸碰後產生效果
  - 1.在<img>外面再包一層<div>，然後給<div>上效果
  - 2.使用`img::after`來創造一層虛擬內容
    ```
    #home figure a.image::after {
        background-color: var(--images-touched);
        content: '';  //虛擬物件必備
        position: absolute;  //脫離排版，使的可以上疊到原圖
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;  //平時看不見，被觸碰後再顯現
    }
    ```

## 技巧
- 1.統一管理配色
    ```
    :root {
        --words-untouched: blue;
        --words-touched: darkblue;
        --images-touched: rgba(0, 0, 0, 0.5);
    }

    header {
        color: var(--words-touched);
    }
    ```

# javascript

# Source
gimini
https://www.youtube.com/watch?v=gQojMIhELvM&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc
