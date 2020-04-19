/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores,roundScore,active,gamePlaying=true;
scores=[0,0];
roundScore=0;
active=0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
function roll1(active){
    document.getElementById('score-'+active).textContent=0;
    document.getElementById('current-'+active).textContent=0;
    scores[active]=0;
}
document.querySelector('.btn-new').addEventListener('click',function() {
    gamePlaying=true;
active=0;
scores=[0,0];
roundScore=0;
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('#name-0').textContent='PLAYER 1';
document.querySelector('#name-1').textContent='PLAYER 2';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.dice').style.display = 'none';
});
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying)
    {
    var dice=Math.floor((Math.random()*6))+1;
    document.querySelector('#score-'+active).textContent=dice;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src='dice-'+dice+'.png';
    if(dice!==1)
    {
        scores[active]+=dice;
        document.querySelector('#current-'+active).textContent=scores   [active];
    }
    else
    {
        roll1(active);
        active===0 ? active=1:active=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display='none';
    }
    if(scores[active]>=20)
    {
        document.querySelector('#name-'+active).textContent='WINNER!';
        document.querySelector('.player-'+active+'-panel').classList.add('winner');
        document.querySelector('.player-'+active+'-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gameplaying=false;
    }
}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
    {
    document.querySelector('#score-'+active).textContent=scores[active];
    active===0 ? active=1:active=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    }
})
