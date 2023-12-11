# auto-reboot-sunrise-box
A simple puppeter program to reboot [Sunrise's](https://www.sunrise.ch) Connect Box

# /!\ I'm not affiliated with Sunrise or any ISP in any ways !

| Boxes  | Results |
| ------------- | ------------- |
| Sunrise : Connect Box 2  | Succes  |

## How to use ? :

1. clone this repository or download it as zip.
2. extract it
3. run `npm install` in the folder with package.json
4. edit `.env` file with your box password and box address (the one you use to connect to it)
5. you can launch it doing `node index.js`

## /!\ Debian users :
Please install first these dependencies : 
```
libgtk-3-0 libgbm-dev libatk-bridge2.0-0 libatk1.0-0 libnss3 libx11-xcb1 libxcb-dri3-0 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libcups2 libxss1 libxrandr2 libasound2 libpangocairo-1.0-0 libpango-1.0-0 libcairo2 libatspi2.0-0 libdbus-1-3
```
