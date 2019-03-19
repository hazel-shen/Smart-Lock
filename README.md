# LINE Things Starter

這份Code改寫自LINE Corporation的sample code => https://github.com/line/line-things-starter

## Getting Started

1. 關於ESP32</br>
  請準備好ESP32, 並將esp32資料夾內的範例程式碼上傳即可</br>
  請把裡面的heroku連結以及line notify access token置換成自己的</br>

2. 關於LIFF APP</br>
  請把liff-app/.example.env複製一份為liff-app/.env, 並將{{}}裡面的數值改成自己的設定</br>


### Installing the Firmware

以下是官方建議的開發板

- [Espressif ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview)
- [M5Stack （ESP32)](http://m5stack.com/)
- [Adafruit Feather nRF52 Bluefruit LE](https://www.adafruit.com/product/3406)
- [BBC micro:bit](https://microbit.org/)
- [Obniz](https://obniz.io/)

Each firmware is located under、`esp32`, `m5stack`, `nrf52`, `microbit`, `obniz` respectively.
For further details, please refer to the `README` file in each directory.

### Enable LINE Things

請掃描以下的QR code, 啟動LINE Things tab, 啟動之後可以在Settings裡看到LINE Things

![](https://developers.line.biz/media/line-things/qr_code-311f3503.png)


要看到這份範例Code的裝置, 請先加入這個OA
![](https://i.imgur.com/uxlcDnQ.png)

## Developer Trial

Documentation regarding the original firmware and LIFF functions for LINE Things are published at [LINE Things Developer Trial](https://developers.line.biz/ja/docs/line-things/about-line-things-trial/).

In order to develop for LINE Things using Developer Trial, you will need to create a LIFF application, register a trial product, and issue a GATT Service UUID.
For additional details, please visit the [LINE Developers](https://developers.line.biz/) site.

Please refer to the following article from LINE Engineering Blog.

- [LINE の IoT プラットフォーム LINE Things の Developer Trial を試してみる](https://engineering.linecorp.com/ja/blog/line-things-developer-trial/)

## License

LINE Things Starter code is licensed under Creative Commons License [CC0](http://creativecommons.org/publicdomain/zero/1.0/).
