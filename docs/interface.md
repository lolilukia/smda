## 数据接口文档

### 销售趋势
### 一年之中各月销量数据（图）
#### 请求参数
      ```
      type: 'month_sales',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例 //返回的数据均不必带有单位
#### month为月份，month_sales对应每个月的销售数据,单位为千万元,
###  temperature为当月的平均温度，单位为摄氏度
      ```
      {
        {month: '1月', month_sales: 49.9, temperature: 23}  
      ...                                                   
      }
      ```

### 各月销售表
#### 请求参数
      ```
      type: 'sales_num',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例
#### 三列，分别为月份，当月销售额（千万），占比
#### 和前面基本一样，只是改了第三列
      ```
      {
        {month: '1月', sales_num: 49.9, month_percentage: 23%}  
       ...                                                    
      }
      ```


### 类目趋势
### 各个年份每个月各类目销售占比
#### 请求参数
      ```
      type: 'category_proportion',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例 //返回的数据均不必带有单位
#### category选取9个类目，category_proportion对应每个品牌的月销售占比（百分多少）,无单位
      ```
      {
        {category: 'skincare', category_proportion: 34.6}  
      ...                                                   
      }
      ```
### 各类目占比详情
#### 请求参数
      ```
      type: 'detailed_cate_Proportion ',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例 //和category_proportion一样，只不过更具体（多了个时间）
#### 按销售额从大到小排序，brand代表每个品牌名称，sale_amount对应每个品牌的月销售数据,单位为千万元,percentage对应当月此品牌的市场占比
      ```
      {
        {category: 'skin_care', date:"Jan 2012", category_proportion: 23%}  
       ...                                                    
      }
      ```


### 品牌分布
### 天气和销售额的关系
#### 请求参数
      ```
      type: 'sale_amount',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例 //返回的数据均不必带有单位
#### brand选取前12个品牌，sale_amount对应每个品牌的月销售数据,单位为千万元,temperature对应当月平均温度（12个一样的数）单位为摄氏度
      ```
      {
        {brand: 'vinda', sale_amount: 49.9, temperature: 23}  
      ...                                                   
      }
      ```
### 品牌市场份额（所有品牌的总数据）
#### 请求参数
      ```
      type: 'market_shares'
      ```
#### 返回JSON示例
#### 品牌为xxx，在xxxx年x月的销售额为xxx千万元
      ```
      {
        {symbol:"vinda",date:"Jan 2012",amount:"39.81"}, //
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
### 品牌排行
#### 请求参数
      ```
      type: 'ranking',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例
#### 按销售额从大到小排序，brand代表每个品牌名称，sale_amount对应每个品牌的月销售数据,单位为千万元,percentage对应当月此品牌的市场占比
      ```
      {
        {brand: 'vinda', sale_amount: 49.9, percentage: 23%}  
       ...                                                    
      }
      ```
