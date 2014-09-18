$.ajax({
    url: '/mockData/testingJson.json',
    //force to handle it as text
    dataType: 'json',
    success: function (dataTest) {
        //data downloaded so we call parseJSON function
        //and pass downloaded data
        dataTest;
        var ractive = new Ractive({
            el: '.ractiveTemplate',
            template: '#template',
            data: dataTest,
            handlebars: true
        });
    }
});



