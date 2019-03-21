const Line = require('./line-notify');
const Delay = require('./train-delay');

const myLine = new Line();
const myDelay = new Delay();

var CHECK_LIST = [
  {
    'name': '池袋線',
    'company': '西武鉄道',
    'website': 'https://www.seiburailway.jp/railwayinfo/'
  },
  {
    'name': '西武有楽町線',
    'company': '西武鉄道',
    'website': 'https://www.seiburailway.jp/railwayinfo/'
  },
  {
    'name': '有楽町線',
    'company': '東京メトロ',
    'website': 'https://www.tokyometro.jp/unkou/history/yurakucho.html'
  },
  {
    'name': '山手線',
    'company': 'JR東日本',
    'website': 'https://traininfo.jreast.co.jp/train_info/kanto.aspx#direction_yamate'
  },
  {
    'name': '大江戸線',
    'company': '都営地下鉄',
    'website': 'https://www.kotsu.metro.tokyo.jp/subway/schedule/'
  },
]

var check = 0

// get LINE token from a environment[$LINE_TOKEN].
myLine.setToken(process.env.LINE_TOKEN);

// get information for train delaying
myDelay.getDelayData().then(function(res){
    res.forEach(function(data){
      // Send messages via LINE Notify
      CHECK_LIST.forEach(function(check_item){
        if(data.name == check_item.name && data.company == check_item.company){
          myLine.notify("現在、" + check_item.name + "が遅延しています。\n" + check_item.website);
          check++;
        }
      });
    });
    if(check == 0){
      myLine.notify("現在、遅延情報はありません");
    }
});
