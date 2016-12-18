## 数据接口文档
  ### 品牌分布
    * 天气和销售额的关系
      ####请求参数
      ```
      type: 'sale_amount',
      year: '2016'
      month: '1'
      ```
      ####返回JSON示例 //返回的数据均不必带有单位
      ```
      {
        {brand: 'vinda', sale_amount: 49.9, temperature: 23}  //brand选取前12个品牌，sale_amount对应每个品牌的月销售数据,单位为千万元
      ...                                                   //temperature对应当月平均温度（12个一样的数）单位为摄氏度
      }
      ```
    * 品牌市场份额（所有品牌的总数据）
      ####请求参数
      ```
      type: 'market_shares'
      ```
      ####返回JSON示例
      ```
      {
        {symbol:"vinda",date:"Jan 2012",amount:"39.81"}, //品牌为vinda，在2012一月的销售额为39.81千万元
        {symbol:"vinda",date:"Feb 2012",amount:"36.35"},
        {symbol:"vinda",date:"Mar 2012",amount:"43.22"},
        ...
        {symbol:"walch",date:"Jan 2012",amount:"64.56"},
        {symbol:"walch",date:"Feb 2012",amount:"68.87"},
        {symbol:"walch",date:"Mar 2012",amount:"67"},
        ...
        {symbol:"心相印",date:"Jan 2012",amount:"100.52"},
        {symbol:"心相印",date:"Feb 2012",amount:"92.11"},
        {symbol:"心相印",date:"Mar 2012",amount:"106.11"},
        ...
        {symbol:"洁柔",date:"Jan 2012",amount:"76.47"},
        {symbol:"洁柔",date:"Feb 2012",amount:"25.94"},
        {symbol:"洁柔",date:"Mar 2012",amount:"28.66"},
      }
      ```
    * 品牌排行
      ####请求参数
      ```
      type: 'ranking',
      year: '2016'
      month: '1'
      ```
      ####返回JSON示例
      ```
      {
        {brand: 'vinda', sale_amount: 49.9, percentage: 23%}  //按销售额从大到小排序，brand代表每个品牌名称，sale_amount对应每个品牌的月销售数据,单位为千万元
       ...                                                    //percentage对应当月此品牌的市场占比
      }
      ```
