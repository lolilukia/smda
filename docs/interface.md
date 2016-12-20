## 数据接口文档


### 销售趋势
### 一年之中各月销量数据（图）
#### 请求示例
     10.60.36.3/smda/?r=sale-trend/do&type=month_sales&year=2013&callback=showData
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
#### 请求示例
      同上
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
#### 请求示例
      10.60.36.3/smda/?r=cate-trend/do&type=category_proportion&year=2012&month=12&callback=showData
#### 请求参数
      ```
      type: 'category_proportion',
      year: '2016'
      ```
#### 返回JSON示例 
#### category选取9个类目，category_proportion对应每个品牌的月销售额，单位随意，统一就好，因为后面会自动转化成百分比
      ```
      {
        name: '洗发沐浴/个人清洁',
        data: [502, 635, 809, 947, 1402, 3634, 5268,6584,7125,8547,8965,9021]
      }, {
        name: '卫生巾/护垫/成人尿裤',
        data: [106, 107, 111, 133, 221, 767, 1766,2561,2965,3021,3564,4521]
      }, {
        name: '衣物清洁剂/护理剂',
        data: [163, 203, 276, 408, 547, 729, 628,754,856,912,1024,2547]
      }, {
        name: '驱虫用品',
        data: [18, 31, 54, 156, 339, 818, 1201,1356,1578,1965,2547,2987]
      },{
        name: '香薰用品',
        data: [18, 31, 54, 156, 339, 818, 1201,1356,1578,1965,2547,2987]
      },{
        name: '家私/皮具护理品',
        data: [106, 107, 111, 133, 221, 767, 1766,2561,2965,3021,3564,4521]
      },{
        name: '纸品/湿巾',
        data: [18, 31, 54, 156, 339, 818, 1201,1356,1578,1965,2547,2987]
      },{
        name: '家庭环境清洁剂',
        data: [18, 31, 54, 156, 339, 818, 1201,1356,1578,1965,2547,2987]
      },{
        name: '室内除臭/芳香用品',
        data: [106, 107, 111, 133, 221, 767, 1766,2561,2965,3021,3564,4521]
      }

### 各类目占比详情
#### 请求示例
      10.60.36.3/smda/?r=cate-trend/do&type=detailed_cate_Proportion&year=2012&callback=showData
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

### 类目分布
### 天气和类目销售额的关系
### 类目销售额数据，每类商品根据年份返回12个月的销售额
    ```
      如
        {
          name:'洗发沐浴/个人清洁',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name:'纸品/湿巾',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },

        ```
#### 请求示例
    10.60.36.3/smda/?r=cate-dist/do&type=cate_sales&year=2012&category=1&callback=showData
#### 请求参数（年份和类目名称）
    ```
       year：'2012'
       name:'洗发沐浴/个人清洁'
    ```
####(返回2012年洗发的12个月销售额)
    ```
       data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

    ```
### 天气，根据年份返回12个月的平均气温
    ```
      如
        name:'平均气温',
        type:'line',
        yAxisIndex: 1,
        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

        ```
#### 请求示例
    10.60.36.3/smda/?r=cate-dist/do&type=temperature&year=2012&callback=showData
#### 请求参数（年份）
    ```
       year：'2012'
    ```
#### (返回2012年12个月各月平均气温)
    ```
       data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]

    ```
### 类目排行
#### 请求示例
    10.60.36.3/smda/?r=cate-dist/do&type=ranking&year=2012&month=1&callback=showData
#### 请求参数
      ```
      type: 'ranking',
      year: '2016'
      month: '1'
      ```
#### 返回JSON示例
#### 按销售额从大到小排序，brand代表每个类目名称，sale_amount对应每个类目的月销售数据,percentage对应当月此品牌的市场占比
      ```
      {
        {category: '洗发沐浴/个人清洁', sale_amount: 1,048,133,865, percentage: 35.04%}
       ...
      }
      ```




### 品牌分布
### 天气和销售额的关系
#### 请求示例
      10.60.36.3/smda/?r=brand-dist/do&type=sale_amount&year=2012&month=6&callback=showData
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
#### 请求示例
      10.60.36.3/smda/?r=brand-dist/do&type=market_shares&year=2013&callback=showData
#### 请求参数
      ```
      type: 'market_shares',
      year: '2016'
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
