/**
 * Call our functions on window load event
 */
window.onload = function(){
    v2('a');

};
var _data;

d3.csv("crimemap.csv").then(function(data) {
    data.forEach(function(d){
        d.a=+d.a;
        d.b=+d.b;
        d.c=+d.c;
        d.d=+d.d;
        d.e=+d.e;
        d.f=+d.f;
        d.x=+d.x;
        d.y=+d.y;

    });
    _data=data;
    console.log(data[0]);

});

const WIDTH = 1500;
const HEIGHT = 1600;
const PAD = 15;
const MARGIN =270;



function v2(t) {
    let xScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function (d) {
            return d.x;
        })])
        .range([MARGIN, WIDTH - MARGIN]);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function (d) {
            return d.y;
        })])
        .range([MARGIN, HEIGHT - MARGIN]);

    // Here we create a power scale with an exponent value of 2
    // which we will use to resize the radii of our circle data points
    let sizeScale = d3.scalePow()
        .exponent(2)
        .domain([0, d3.max(_data, function (d) {
            return d[t];
        })])
        .range([5, 40]); // 0 to 50 pixels

    var colorScale = d3.scaleOrdinal()
        .domain(["N", "E", "NW", "SW", "NE", "C", "SE", "W"])
        .range(["lightcoral", "#3288BD", "navajowhite", "#ABDDA4", "darkslategrey",
            "lightseagreen", "#FEE08B", "#FDAE61"]);


    const svg = d3.select('#vis2')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    function check(d){
        if(t== 'a') {
            return   myh3.innerText = "CALGARY CRIME (2013)";
        } else if(t=='b') {
             return myh3.innerText = "CALGARY CRIME (2014)";
        }else if(t=='c'){
            return myh3.innerText = "CALGARY CRIME (2015)";
         }else if(t=='d'){
            return myh3.innerText = "CALGARY CRIME (2016)";
         }else if(t=='e'){
              return myh3.innerText = "CALGARY CRIME (2017)";
          }else{
              return myh3.innerText = "CALGARY CRIME (2018)";
         }
    }


    svg.selectAll("*").remove();

    check(t);

    svg.selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d.x);
        })
        .attr("cy", function (d) {
            return yScale(d.y);
        })
        .attr("r", function (d) {

            return sizeScale(d[t]);  // call our sizeScale function to map values from d.r
        })
        .call(d3.zoom().on("zoom", function () {
           svg.attr("transform", d3.event.transform)
        }))
        .on("mouseover", function (d) {

            console.log(d.C);


            var cc = d.C;
            var ca = d.a;
            var cb = d.b;
            var ccc = d.c;
            var cd = d.d;
            var ce = d.e;
            var cf = d.f;

            var c =  svg.selectAll(".c")
                .data(_data)
                .enter()
                .append("g")
                .attr("class","c");

            c.append("circle")
                  .filter(function (d) {
                      return d.C==cc;
                  })
                  .attr("cx", 1600)
                  .attr("cy", 1300)
                  .attr("r", function (d) {
                      return sizeScale(d.a);  // call our sizeScale function to map values from d.r
                  })
                .style("fill", colorScale(d.s));


            c.append("text")
                 .attr("x", 1650)
                 .attr("y", 1400)
                 .attr("dy", ".35em")
                 .attr("font-size", "25px")
                 .style("text-anchor", "end")
                 .text(function(d) { return ca });

            c.append("text")
                .attr("x", 1750)
                .attr("y", 600)
                .attr("dy", ".35em")
                .attr("font-size", "50px")
                .style("text-anchor", "end")
                .style("font-weight", "bold")
                .text(function(d) { return cc });

            c.append("text")
                .attr("x", 1400)
                .attr("y", 1300)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return "2013"  });

             var c1 =svg.selectAll(".c1")
                   .data(_data)
                   .enter()
                   .append("g")
                   .attr("class","c1");

                 c1.append("circle")
                   .filter(function(d){ return d.C==cc; })
                   .attr("class","c1")
                   .attr("cx",1700)
                   .attr("cy",1200)
                   .attr("r", function(d){
                       return sizeScale(d.b);  // call our sizeScale function to map values from d.r
                   }) .style("fill", colorScale(d.s));

            c1.append("text")
                .attr("x", 1750)
                .attr("y", 1300)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return cb });

            c1.append("text")
                .attr("x", 1400)
                .attr("y", 1200)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return "2014" });

               var c2 = svg.selectAll(".c2")
                   .data(_data)
                   .enter()
                   .append("g")
                   .attr("class","c2");

                   c2.append("circle")
                   .filter(function(d){ return d.C==cc; })
                   .attr("class","c2")
                   .attr("cx",1800)
                   .attr("cy",1100)
                   .attr("r", function(d){
                       return sizeScale(d.c);  // call our sizeScale function to map values from d.r
                   })
                       .style("fill", colorScale(d.s));

            c2.append("text")
                .attr("x", 1850)
                .attr("y", 1200)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return ccc });

            c2.append("text")
                .attr("x", 1400)
                .attr("y", 1100)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return "2015" });


            var c3= svg.selectAll(".c3")
                   .data(_data)
                   .enter()
                   .append("g")
                   .attr("class","c3");


                  c3.append("circle")
                   .filter(function(d){ return d.C==cc; })
                   .attr("class","c3")
                   .attr("cx",1900)
                   .attr("cy",1000)
                   .attr("r", function(d){
                       return sizeScale(d.d);  // call our sizeScale function to map values from d.r
                   })
                      .style("fill", colorScale(d.s));


            c3.append("text")
                .attr("x", 1950)
                .attr("y", 1100)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return cd });

            c3.append("text")
                .attr("x", 1400)
                .attr("y", 1000)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return "2016" });

          var c4 =  svg.selectAll(".c4")
                .data(_data)
                .enter()
                .append("g")
                .attr("class","c4");


                c4.append("circle")
                .filter(function(d){ return d.C==cc; })
                .attr("class","c4")
                .attr("cx",2000)
                .attr("cy",900)
                .attr("r", function(d){
                    return sizeScale(d.e);  // call our sizeScale function to map values from d.r
                })
                    .style("fill", colorScale(d.s));

              c4.append("text")
                .attr("x", 2050)
                .attr("y", 1000)
                .attr("dy", ".35em")
                  .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return ce });
            c4.append("text")
                .attr("x", 1400)
                .attr("y", 900)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .text(function(d) { return "2017" });


            var c5=  svg.selectAll(".c5")
                .data(_data)
                .enter()
                .append("g")
                .attr("class","c5");

                c5.append("circle")
                .filter(function(d){ return d.C==cc; })
                .attr("class","c5")
                .attr("cx",2100)
                .attr("cy",800)
                .attr("r", function(d){
                    return sizeScale(d.f);  // call our sizeScale function to map values from d.r
                })
                    .style("fill", colorScale(d.s));

            c5.append("text")
                .attr("x", 2100)
                .attr("y", 900)
                .attr("font-size", "25px")
                .attr("fill", "black")
                .text(function(d) { return cf; });

            c5.append("text")
                .attr("x", 1335)
                .attr("y", 800)
                .attr("font-size", "25px")
                .attr("fill", "black")
                .text(function(d) { return "2018" })


         })
         .on("mouseout", function(d) {
             svg.selectAll(".c").remove();


             svg.selectAll(".c1").remove();
             svg.selectAll(".c2").remove();
             svg.selectAll(".c3").remove();
             svg.selectAll(".c4").remove();
             svg.selectAll(".c5").remove();
         })
         .style("fill", function(d){
             // when passing the month value, D3 will assign a unique
             // colour per unique month value
             // e.g., all "January" values will have a different colour
             // from "February" values, but all "January" values will be
             // of the same colour
             return colorScale(d.s);
         });

    svg.selectAll("text")
        .data(_data)
        .enter()
        .append("text")
        .attr("x", function (d) {
            return xScale(d.x);
        })
        .attr("y", function (d) {
            return yScale(d.y);
        })
        .attr("dy", ".35em")
        .attr("font-size", "10px")
        .style("text-anchor", "end")
        .text(function(d) { return d.C });


            // draw legend
            var legend = svg.selectAll(".legend")
                .data(colorScale.domain())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) { return "translate(-400," + i * 60 + ")"; });



            // draw legend colored rectangles
            legend.append("circle")
                .attr("cx", WIDTH +200)
                .attr("cy", 50)
                .attr("r",25)
                .style("fill", colorScale);


            // draw legend text
           legend.append("text")
                .attr("x", WIDTH + 320)
                .attr("y", 50)
                .attr("dy", ".35em")
                .attr("font-size", "25px")
                .style("text-anchor", "end")
                .style("font-weight", "bold")
                .text(function(d) { return d;});
        }



function v3(t,sec) {


    let xScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function (d) {
            return d.x;
        })])
        .range([MARGIN, WIDTH - MARGIN]);

    let yScale = d3.scaleLinear()
        .domain([0, d3.max(_data, function (d) {
            return d.y;
        })])
        .range([MARGIN, HEIGHT - MARGIN]);

    // Here we create a power scale with an exponent value of 2
    // which we will use to resize the radii of our circle data points
    let sizeScale = d3.scalePow()
        .exponent(2)
        .domain([0, d3.max(_data, function (d) {
            return d[t];
        })])
        .range([5, 40]); // 0 to 50 pixels

    var colorScale = d3.scaleOrdinal()
        .domain(["N", "S", "NW", "SW", "NE", "SE", "C", "W"])
        .range(["steelblue", "#3288BD", "#66C2A5", "#ABDDA4", "black",
            "#5E4FA2", "#FEE08B", "#FDAE61"]);

    const svg2 = d3.select('#vis2')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);


    svg2.selectAll("circle").remove();
    svg2.selectAll("text").remove();
 
    svg2.selectAll("circle")
        .data(_data)
        .enter()
        .append("circle")
        .filter(function(d){ return d.s==sec; })
        .attr("cx", function (d) {
            return xScale(d.x);
        })
        .attr("cy", function (d) {
            return yScale(d.y);
        })
        .attr("r", function (d) {
            return sizeScale(d[t]);  // call our sizeScale function to map values from d.r
        })
        .style("fill", colorScale(sec));




        svg2.selectAll("text")
            .data(_data)
            .enter()
            .append("text")
            .filter(function(d){ return d.s==sec; })
            .attr("x", function (d) {
                return xScale(d.x)})
            .attr("y", function (d) {
                return yScale(d.y)-10;
            })
            .attr("dy", ".35em")
            .attr("font-size", "10px")
            .style("text-anchor", "end")
            .style("font-weight", "bold")
            .text(function(d) { return d.C;})





}