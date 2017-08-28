var load;
function ready() { 
    load = setTimeout(fireContentLoadedEvent, 3000);
}

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);


function fireContentLoadedEvent () {
    ready();
    
    var fbTimeline = document.getElementById('stream_pagelet');
    
     if (fbTimeline) {
     document.getElementById('stream_pagelet')
    .innerHTML = '<h1 style="font-size: 20px; margin-bottom: -10px;">Cansou de notícias tristes na sua timeline?</h1><p style="margin: 15px 0 20px auto;">Que tal ficar olhando para esses lindos gatíneos? Tenha um ótimo dia! :)</p><img src="http://www.randomkittengenerator.com/cats/rotator.php" alt="Fotos aleatórias de gatinhos" title="Fotos aleatórias de gatinhos" style="width: 100%; height: auto;" /><small style="text-align: right; display: block;">Créditos das fotos: Random Kitten Generator</small><hr style="margin: 20px 0;"/><h1>Mensagem do dia:</h1><p style="border-left: 3px solid #4267b2; padding-left: 20px; font-size: 14px;">"Cada dia que amanhece assemelha-se a uma página em branco, na qual gravamos os nossos pensamentos, ações e atitudes. Na essência, cada dia é a preparação de nosso próprio amanhã."</p><small style="display: block; text-align: right; font-size: 12px;">- Chico Xavier</small>';

   }    
}