var myChart=""
var ChartLikes=startNewChart("ChartLikes")
var ChartComments=startNewChart("ChartComments")
var ChartSentiment=startNewChart("ChartSentiment")
var ChartLanguage=startNewChart("ChartLanguage")

typeGraph=["Likes"]
listGraph = [ChartLikes]
startNewChart("ChartLikes")

$(document).ready(function(){
    console.log("Qusìesto va")


    var allCheck = $(".year :checkbox");
    var allLabel = $(".year").find("label")
    var allLenght = $(".year :checkbox").length;
    var d = new Date();
    var lastYear = d.getFullYear();

    i=0
    $(".year").find("label").each(function(){
        if(i == 0) {
            $(this).html('<input type="checkbox" id="ALL" name="checkYear" value="ALL" style="margin-left:10px;"><small style="margin-left:5px;margin-right:10px; color:#fff">ALL</small>')
            i=1
        } else {

            $(this).html('<input type="checkbox" id="'+lastYear+'" name="checkYear" value="'+lastYear+'" style="margin-left:10px;"><small style="margin-left:5px;margin-right:10px; color:#fff">'+lastYear+'</small>')
            lastYear = lastYear-1
        }
    });

        
    

    $("#ALL").change(function(){
        uncheckALL()
    });

    $("#2021").change(function(){
        uncheckYear()
    });
    $("#2020").change(function(){
        uncheckYear()
    });
    $("#2019").change(function(){
        uncheckYear()
    });
    $("#2018").change(function(){
        uncheckYear()
    });
    $("#2017").change(function(){
        uncheckYear()
    });
    $("#2016").change(function(){
        uncheckYear()
    });


});

/*$("#username").keypress(function () {
    var username = $(this).val();

    $.ajax({
      url: 'ajax/validate_username/',
      data: {
        'username': username
      },
      dataType: 'json',
      success: function (data) {
        console.log(data)

      }
    });

  });
*/


function getTypeGraph(type){
    console.log(typeGraph)

    if(typeGraph.includes(type.value)){

        var profileIndex = labelChart.indexOf(type.value);
        typeGraph.splice(profileIndex, 1);
        $("#Chart"+type.value).css("visibility", "hidden");
        
                

    } else {

        typeGraph.push(type.value)

        $("#Chart"+type.value).css("visibility", "visible");
        x = startNewChart("Chart"+type.value)

        listGraph.push(x)

    }

    console.log(listGraph[0].canvas.id)
    
}

function startNewChart(chart){
    var ctx = document.getElementById(chart).getContext('2d');
    chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: "",
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 200, 32, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 200, 32, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Chart Averange ' + chart.substring(5) 
        }
    }
});

return chart

}


function uncheckALL()
  {
  allChk = $("input:checkbox");
       for (i = 0; i < allChk.length; i++)
          {
              if(allChk[i].value == "ALL"){}
              else          
              allChk[i].checked = false;

          }
  }

function uncheckYear()
{
  allChk = $("input:checkbox");
       for (i = 0; i < allChk.length; i++)
        {
              if(allChk[i].value == "ALL") allChk[i].checked = false;
              else {}      
        }
}

labelChart = []
dataL=[]
dataC=[]
dataS=[]
dataLen=[]

function makeLabelChart(ciao, likes, nPost, comments){

    
    if(labelChart.includes(ciao.value)){
        var profileIndex = labelChart.indexOf(ciao.value);
        labelChart.splice(profileIndex, 1);
        dataL.splice(profileIndex, 1)
        dataC.splice(profileIndex, 1)
        //dataS.splice(profileIndex, 1)
        //dataL.splice(profileIndex, 1)

        for(i in listGraph){
            if(listGraph[i].canvas.id == "ChartLikes")
            addOrRemoveData(listGraph[i], labelChart, dataL)

            if(listGraph[i].canvas.id == "ChartComments")
            addOrRemoveData(listGraph[i], labelChart, dataC)

        }
    } else {

        labelChart.push(ciao.value)
        dataL.push((likes/nPost).toFixed(2))
        dataC.push((comments/nPost).toFixed(2))
        for(i in listGraph){
            if(listGraph[i].canvas.id == "ChartLikes")
            addOrRemoveData(listGraph[i], labelChart, dataL)

            if(listGraph[i].canvas.id == "ChartComments")
            addOrRemoveData(listGraph[i], labelChart, dataC)

        }
    }

}


data=""
firstMove=true
function addOrRemoveData(chart, label, data) {


    chart.data.labels=label
    chart.data.datasets[0].data=data
    chart.update();

}

