# Şikayetvar

Bu projede https://jsonplaceholder.typicode.com API ı kullanılarak CRUD işlemlerini yaptım. API delete,put,patch gibi isteklere status:200 dönse de verileri aktif olarka silmiyor ve güncellemiyor(API da bunu belirtiyor). Bunun için tüm logları görmeniz için konsola bakabilirsiniz. Scoped SCSS in büyük projelerde skıntı yaratabilieceğini daha önceden deneyimlediğim için tek bir scss dosyası üzerinde çalıştım. Projeyi componentlere bölerek tekrar kullanılabilir hale getirdim. Figma üzerinde belirtilmeyen sayfa ve uyarı componenti için tasarımın genel yapısına uygun bir çalışma yaptım ve bunu ekledim. User detail ksımında response ile gelen kullanıcı konum bilgilerini dinamik olarak GoogleMap  componentinde ekledim. Ancak Google Maps paralı üyelik olmadan bu hizmeti sağlamıyor.Projenin son halini VERCEL üzerinden deploy ettim aşağıdaki linkten ulaşabilirsiniz.

URL: https://sikayetvar-com.vercel.app

## Plugins

Bu projede harici olarak Axios, x5-gmaps ve vue-svg-loader pluginleri kullanılmıştır.

| Plugin | README |
| ------ | ------ |
| Axios | https://github.com/axios/axios |
| x5-gmaps | https://github.com/xon52/x5-gmaps |
| vue-svg-loader | https://www.npmjs.com/package/vue-svg-loader |


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
