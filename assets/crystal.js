
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;

        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    
        $("#targetNumber").text(randomNumber);
        $("#totalScore").text(score);
        $("#wins").text("Wins:" + " " + wins);
        $("#losses").text("Losses:" + " " + losses);
    
        var crystalImages = [".//images/purple.jpg", ".//images/yellow.jpg", ".//images/quartz.jpg", ".//images/blue.jpg"];
        
        function setData() {
            for (var i = 0; i < crystalImages.length; i++) {
    
            var image = $('<img>');
    
            image.addClass('ghostImage');
    
            image.attr('src', crystalImages[i]);
    
            image.attr('data-crystalvalue', Math.floor(Math.random() * 12) + 1);
    
            $("#crystals").append(image);
    
            }
        }
    
        setData();
        
        $(".ghostImage").on("click", function () {
    
            var crystalValue = ($(this).data("crystalvalue"));
    
            score = score + crystalValue;
    
            $("#totalScore").text(score);
    
            if (score === randomNumber) {
                wins++;
                $("#wins").text("Wins:" + " " + wins);
                $("#outcome").text("Winner!");
    
            }else if (score > randomNumber) {
                losses++;
                $("#losses").text("Losses:" + " " + losses);
                $("#outcome").text("Loser!");
            }
            if (score === randomNumber || score > randomNumber) {
                randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
                score = 0;
                $("#targetNumber").text(randomNumber);
                $("#totalScore").text(score);
            }
    
        });
    
    });