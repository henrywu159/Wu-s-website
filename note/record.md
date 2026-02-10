# plan
- 1.先堅持寫一陣子的原生 HTML/CSS。先弄懂什麼是 div, span, flexbox 排版。基礎不穩，學框架會很痛苦。

- 2.加入 CSS 讓它變漂亮： 試著寫一個自己的個人介紹頁面，放上照片、連結。

- 3.下一步嘗試：Astro 當你覺得「每次都要複製貼上 <header>...</header> 很煩」的時候，去學 Astro。它最接近原生 HTML，但能讓你體驗「現代模組化開發」的威力，而且完美支援 GitHub Pages。

# live server(insecurit)
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

# Source
gimini
https://www.youtube.com/watch?v=gQojMIhELvM&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc
