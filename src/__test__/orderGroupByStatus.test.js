import { orderGroupByStatus } from 'utils/utils';
import { GROUP_RULES } from 'utils/constants';

const mockData = {
  "orders": [
    {
      "name": "test1",
      "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
      "status": {
        "code": 3,
        "type": "已取消"
      },
      "date": "107/6/12"
    },
    {
      "name": "test2",
      "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
      "status": {
        "code": 1,
        "type": "處理中"
        },
      "date": "108/6/2"
    },
    {
      "name": "test3",
      "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
      "status": {
        "code": 4,
        "type": "已送達"
      },
      "date": "108/3/02"
    }
  ]
}

const expectData = [
  {
    title: '進行中',
    data: [
      {
        "name": "test2",
        "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
        "status": {
          "code": 1,
          "type": "處理中"
          },
        "date": "108/6/2"
      }
    ]
  },
  {
    title: '已完成',
    data: [
      {
        "name": "test3",
        "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
        "status": {
          "code": 4,
          "type": "已送達"
        },
        "date": "108/3/02"
      },
      {
        "name": "test1",
        "logo": "https://static.oopocket.com/store/iconTreemall@3x.png",
        "status": {
          "code": 3,
          "type": "已取消"
        },
        "date": "107/6/12"
      }
    ]
  }
]
test('group orders', () => {
  expect(orderGroupByStatus(mockData.orders, GROUP_RULES)).toStrictEqual(expectData);
});