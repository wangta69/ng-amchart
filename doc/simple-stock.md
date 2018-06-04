this.stockchart = this.amchartSvc.makeChart("stockchartdiv", {
    "type": "stock",
    "theme": "light",
    "dataSets": [{
        "title": "MSFT",
        "fieldMappings": [
            {
                "fromField": "Open",
                "toField": "open"
            }, {
                "fromField": "High",
                "toField": "high"
            }, {
                "fromField": "Low",
                "toField": "low"
            }, {
                "fromField": "Close",
                "toField": "close"
            }, {
                "fromField": "Volume",
                "toField": "volume"
            }
        ],
        "compared": false,
        "categoryField": "Date",

        "dataProvider": [

            {
                "Date": "2014-08-01",
                "Open": 43.23,
                "High": 43.32,
                "Low": 42.91,
                "Close": 43.20,
                "Volume": 28942700,
            },

            {
                "Date": "2014-08-02",
                "Open": 43.23,
                "High": 43.32,
                "Low": 42.91,
                "Close": 43.20,
                "Volume": 28942700,
            },

            {
                "Date": "2014-08-03",
                "Open": 42.84,
                "High": 43.45,
                "Low": 42.65,
                "Close": 43.23,
                "Volume": 30314900,
            },
            {
                "Date": "2014-08-04",
                "Open": 42.74,
                "High": 43.17,
                "Low": 42.21,
                "Close": 42.74,
                "Volume": 24634000,
            },
            {
                "Date": "2014-08-05",
                "Open": 43.31,
                "High": 43.46,
                "Low": 42.83,
                "Close": 43.08,
                "Volume": 26266400,
            },
            {
                "Date": "2014-08-06",
                "Open": 42.97,
                "High": 43.47,
                "Low": 42.81,
                "Close": 43.37,
                "Volume": 34244200,
            },
            {
                "Date": "2014-08-07",
                "Open": 43.23,
                "High": 43.32,
                "Low": 42.91,
                "Close": 43.20,
                "Volume": 28942700,
            },
            {
                "Date": "2014-08-08",
                "Open": 42.84,
                "High": 43.45,
                "Low": 42.65,
                "Close": 43.23,
                "Volume": 30314900,
            },
            {
                "Date": "2014-08-09",
                "Open": 42.74,
                "High": 43.17,
                "Low": 42.21,
                "Close": 42.74,
                "Volume": 24634000,
            },
        ]//"dataProvider"
    }],//"dataSets": [
    "dataDateFormat": "YYYY-MM-DD",// JJ:NN:SS
    "panels": [{
            "title": "Value",
            "percentHeight": 70,

            "stockGraphs": [{
            "type": "candlestick",
            "id": "g1",
            "openField": "open",
            "closeField": "close",
            "highField": "high",
            "lowField": "low",
            "valueField": "close",
            "lineColor": "#fff",
            "fillColors": "#fff",
            "negativeLineColor": "#db4c3c",
            "negativeFillColors": "#db4c3c",
            "fillAlphas": 1,
            "comparedGraphLineThickness": 2,
            "columnWidth": 0.7,
            "useDataSetColors": false,
            "comparable": true,
            "compareField": "close",
            "showBalloon": false,
            "proCandlesticks": true
            }],//"stockGraphs": [{
            "stockLegend": {
                "valueTextRegular": undefined,
                "periodValueTextComparing": "[[percents.value.close]]%"
            },

        }],//"panels": [
        "panelsSettings": {//메인 판넬 색상
            "plotAreaFillColors": "#333",
            "plotAreaFillAlphas": 1,
            "marginLeft": 60,
            "marginTop": 5,
            "marginBottom": 5
        },


        "categoryAxesSettings": {//http://docs.amcharts.com/3/javascriptstockchart/CategoryAxesSettings
            //"maxSeries": 100,
            "equalSpacing": true,
            "gridColor": "#555",
            "gridAlpha": 1,
            //"dataDateFormat": "YYYY-MM-DD",//JJ:NN:SS
            "dataDateFormat": [{period:'DD',format:'MMM DD'}],//JJ:NN:SS
            //"dateFormats":{period:'DD',format:'MMM DD'},
            "gridCount":20,
            "minHorizontalGap":95,
            "minPeriod":"hh",
            "tickLength":1,
            //"position":'bottom',
            //"groupToPeriods": ["hh","dd", "ww"],

            //"alwaysGroup":false,
            "color":"#fff"

        },


        "valueAxesSettings": {//판넬의 valueAxes 세팅
            "gridColor": "#555",
            "gridAlpha": 1,
            "inside": false,
            "showLastLabel": true,
            "color":"#fff"
        },





});//this.stockchart
