const ready = () => load = setTimeout(removeFbComments, 3000)

const removeFbComments = () => { 
    ready()

    const fbComment = document.querySelectorAll('.commentable_item')
    const fb = document.getElementById('facebook')

    for(let i = 0; i < fbComment.length; i++)  
        if(fb) 
            fbComment[i].innerHTML = 
            '<div class="meoweradicator" style="margin: 1.25rem;"> <h4 style="font-size: 1.5rem;">Cansou de notícias tristes na sua timeline?</h4><p style="margin: .25rem 0 1rem 0;">Que tal ficar olhando para esses lindos gatíneos? Tenha um ótimo dia! :)</p><img src="http://www.randomkittengenerator.com/cats/rotator.php" alt="Fotos aleatórias de gatinhos" title="Fotos aleatórias de gatinhos" style="width: 100%; height: auto;" /><small style="padding-top: .25rem; text-align: right; display: block">Créditos da imagem: Random Kitten Generator</small> </div>'
    
}

document.addEventListener('DOMContentLoaded', removeFbComments, false)